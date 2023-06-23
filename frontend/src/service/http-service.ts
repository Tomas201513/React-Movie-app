import apiClient from "./api-client";


class HttpService {
    endpoint :string;

    constructor(endpoint: string){
        this.endpoint= endpoint;
    }
    
    getAll<T>(){
        const controller = new AbortController();

        const request = apiClient
        .get<T[]>(this.endpoint, {
          signal: controller.signal,
        })
        return{request,cancel:()=>controller.abort()}
    }

    // createUser(){

    // }

    // updateUser(){

    // }

    // delete(){

    // }


} 

const get=(endpoint:string)=> new HttpService(endpoint)

export default get