import { ObjectId } from 'mongodb';
export interface Test {
    _id: ObjectId;
    name: string;
    description: string;
    questions: Question[];
}

export interface Question {
    type: QuestionType;

}

export type QuestionType = 'complete' | 'trueOrFalse' | 'multipleChoice'; 