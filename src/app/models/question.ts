import { Response } from "./response";
export interface Question {
    id: number;
    libelle: string;
    description: string;
    quiz_id: number;
    reponses: Response[];
}