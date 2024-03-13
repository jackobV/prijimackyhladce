import PocketBase from "pocketbase";
import {retrieveQuestionApiInput, retrieveQuestionApiResponse} from "@/app/quizzappplayground/types";

async function retrieveQuestionApi({params}:{params:retrieveQuestionApiInput}): Promise<retrieveQuestionApiResponse> {
    try {
        const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
        const response = await pb.collection('questions').getOne(params.id, {
        });
        return {id:params.id,text:response.title,catName:params.catName};
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}

export default retrieveQuestionApi;
