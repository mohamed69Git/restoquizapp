import { Token } from './token'
import { Admin } from "./admin";
export interface LoginResponse {
    token: Token;
    user: Admin;
    model_type: string;
}