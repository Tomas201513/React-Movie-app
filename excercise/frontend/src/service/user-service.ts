import get from "./http-service";

export interface User {
    id: number;
    name: string;
}

export default get('/users')