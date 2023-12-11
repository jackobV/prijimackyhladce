'use client'

import { MessagesContext } from '../../context/messages'
import { cn } from '../../lib/utils'
import { Message } from '../../lib/validators/message'
import { useMutation } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { FC, HTMLAttributes, useContext, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const [input, setInput] = useState<string>('')
    const {
        messages,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
    } = useContext(MessagesContext)

    const { mutate: sendMessage, isLoading } = useMutation({
        mutationKey: ['sendMessage'],
        // include message to later use it in onMutate
        mutationFn: async (_message: Message) => {
            console.log(messages)
            const response = await fetch('/api/vektor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages }),
            })

            return response.body
        },
        onMutate(message) {
            addMessage(message)
        },
        onSuccess: async (stream) => {
            if (!stream) throw new Error('No stream')

            // construct new message to add
            const id = nanoid()
            const responseMessage: Message = {
                id,
                isUserMessage: false,
                text: '',
            }

            // add new message to state
            addMessage(responseMessage)

            setIsMessageUpdating(true)

            const reader = stream.getReader()
            const decoder = new TextDecoder()
            let done = false

            while (!done) {
                const { value, done: doneReading } = await reader.read()
                done = doneReading
                const chunkValue = decoder.decode(value)
                updateMessage(id, (prev) => prev + chunkValue)
            }

            // clean up
            setIsMessageUpdating(false)
            setInput('')

            setTimeout(() => {
                textareaRef.current?.focus()
            }, 10)
        },
        onError: (_, message) => {
            toast.error('Something went wrong. Please try again.')
            removeMessage(message.id)
            textareaRef.current?.focus()
        },
    })

    return (
             <div className="flex flex-row gap-x-5 w-full items-center">
                    <div className="w-full">
                            <textarea
                                ref={textareaRef}
                                value={input}
                                disabled={isLoading}
                                onChange={(e)=>setInput(e.target.value)}
                                id="message" rows={4} className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sem napište svůj dotaz..."></textarea>

                    </div>
                    <button type="submit" onClick={
                        (e) => {
                                e.preventDefault()

                                const message: Message = {
                                    id: nanoid(),
                                    isUserMessage: true,
                                    text: input,
                                }
                                sendMessage(message)
                            }
                    } className="inline-flex justify-center p-2 text-blue-500 rounded-lg cursor-pointer dark:bg-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-blue-500 dark:hover:text-blue-700 dark:hover:bg-gray-800 duration-75">
                        <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
    )
}

export default ChatInput