
import {
    ChatGPTMessage,
    OpenAIStream,
    OpenAIStreamPayload,
} from '@/app/(aplikace)/aplikace/lib/openai-stream'
import { MessageArraySchema } from '@/app/(aplikace)/aplikace/lib/validators/message'
import {chatbotPrompt} from "@/app/(aplikace)/aplikace/helpers/constants/chatbot-prompt";

export async function POST(req: Request) {
    const { messages } = await req.json()

    const parsedMessages = MessageArraySchema.parse(messages)

    const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
        return {
            role: message.isUserMessage ? 'user' : 'system',
            content: message.text,
        }
    })

    outboundMessages.unshift({
        role: 'system',
        content: chatbotPrompt,
    })

    const payload: OpenAIStreamPayload = {
        model: 'gpt-4-1106-preview',
        messages: outboundMessages,
        temperature: 0.4,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 550,
        stream: true,
        n: 1,
    }
    console.log(outboundMessages)
    const stream = await OpenAIStream(payload)

    return new Response(stream)
}