import PocketBase from "pocketbase";
import {recommendQuestionResponse} from "@/app/quizzappplayground/types";
function getRandomItemFromArray<T>(array: T[]): T | undefined {
    if (array.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

async function recommendQuestion(id:string): Promise<recommendQuestionResponse> {
    try {
        const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
        const response = await pb.collection('user_quizz_data').getOne(id, {
        });
        if(response.cat_one_score > response.cat_two_score){
            const cat_two_unseen:string[] = response.unseen_questions_cat_two;
            const random = getRandomItemFromArray(cat_two_unseen);
            if(random){
                return {id:random,catName:"cat_two"};
            }
        }else{
            const cat_one_unseen:string[] = response.unseen_questions_cat_one;
            const random = getRandomItemFromArray(cat_one_unseen);
            if(random){
                return {id:random,catName:"cat_one"};

            }
        }
        return {id:undefined,catName:"undefined"};
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}

export default recommendQuestion;
