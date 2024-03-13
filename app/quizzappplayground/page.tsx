"use client"
import {useState} from "react";
import RecommendQuestion from "@/app/quizzappplayground/(quizzFunctions)/recommendQuestion";
import retrieveQuestionApi from "@/app/quizzappplayground/(quizzFunctions)/getquestion";
import {questionStateInterface, recordAnswearApiInput, retrieveQuestionApiInput} from "@/app/quizzappplayground/types";
import recordAnswear from "@/app/quizzappplayground/(quizzFunctions)/recordAnswear";

export default function Page(){
    const [question,setQuestion]=useState<questionStateInterface|undefined>(undefined)
    const [successfullUpdate,setSuccessfullUpdate] = useState("")
    const getRecommendation = async ()=>{
        try{
            const response = await RecommendQuestion("965malgnpodb34z");
            if (response.id){
                const input:retrieveQuestionApiInput = {
                    id:response.id,
                    catName:response.catName
                }
                const questionTextCall = await retrieveQuestionApi({params:input})
                setQuestion({id:questionTextCall.id,text:questionTextCall.text,catName:questionTextCall.catName})
            }
        }catch (e) {
            console.log(e)
            setQuestion(undefined);
        }
    }
    const recordSuccess = async ()=>{
        try {
            if(question){
                const input:recordAnswearApiInput={
                    catName:question.catName,
                    modelId:"965malgnpodb34z",
                    success:true,
                    questionId:question.id
                }
                const status = await recordAnswear(input)
                if(status === "success"){
                    setSuccessfullUpdate("success")
                }else{
                    setSuccessfullUpdate("Fail")
                }
            }

        }catch (e) {

        }
    }
    return(
        <div className="">
            <button onClick={getRecommendation}>get question</button>
            <div>
                {question?.text?
                    <div>{question.text}</div>:<p>undefined</p>}
            </div>
            <button onClick={recordSuccess}>Correct</button>
            <button onClick={recordSuccess}>Fail</button>

        </div>
    )
}