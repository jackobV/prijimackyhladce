export interface retrieveQuestionApiResponse{
    text:string
    id:string
    catName:string
}
export interface retrieveQuestionApiInput{
    id:string
    catName:string
}
export interface recordAnswearApiInput{
    catName:string
    modelId:string
    questionId:string
    success:boolean
}
export interface questionStateInterface{
    catName:string
    id:string
    text:string
}
export interface recommendQuestionResponse{
    id:string|undefined
    catName:string
}
export type ApiResponseStatus = 'success' | 'error';
