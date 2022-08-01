import { Question } from "./question";
import { Result } from "./result";
export interface Quiz {
    id: number;
    questions: Question[];
    resultats: Result[];
    libelle: string;
    description: string;
}