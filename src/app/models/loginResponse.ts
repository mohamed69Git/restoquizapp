import { Token } from './token'
import { Admin } from "./admin";
import { Data } from './data';
export interface LoginResponse {
    data: Data;
    error: boolean
    // token: Token;
    // user: Admin;
    // model_type: string;
}