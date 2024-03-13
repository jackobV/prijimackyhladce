import PocketBase from "pocketbase";
import {ApiResponseStatus, recordAnswearApiInput, retrieveQuestionApiResponse} from "@/app/quizzappplayground/types";

async function recordAnswear(params:recordAnswearApiInput): Promise<ApiResponseStatus> {
    try {
        const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
        const modelCallRetrieveBaseData = await pb.collection("user_quizz_data").getOne(params.modelId)
        const unseenCatQuestionsBaseData:string[] = modelCallRetrieveBaseData[`unseen_questions_${params.catName}`]
        const seenCatQuestionsBaseData:string[] = modelCallRetrieveBaseData[`seen_questions_${params.catName}`]
        const updatedCatQuestionBaseData:string[] = unseenCatQuestionsBaseData.filter(item => item !== params.questionId)
        let updatedScore: number;
        if (params.success) {
            updatedScore = modelCallRetrieveBaseData[`${params.catName}_score`] + 1;
        } else {
            updatedScore = modelCallRetrieveBaseData[`${params.catName}_score`] - 1;
        }
        console.log(unseenCatQuestionsBaseData)
        console.log(updatedCatQuestionBaseData)
        const newQuestionAnswearRecord = await pb.collection("question_user_answear").create({
            question:params.questionId,
            correct:params.success
        })
        const updatedSeenCatQuestion:string[] = [...seenCatQuestionsBaseData,newQuestionAnswearRecord.id]

        const updateOperationData = {
            [`unseen_questions_${params.catName}`]: updatedCatQuestionBaseData,
            [`seen_questions_${params.catName}`]: updatedSeenCatQuestion,
            [`${params.catName}_score`]:updatedScore
        };
        await pb.collection("user_quizz_data").update(params.modelId,updateOperationData)

        return "success";
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}

export default recordAnswear;
