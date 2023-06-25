import { BaseModel } from "../views/core/baseModel";

export interface AbstractFactory<T> {
    createModel(response: any): T; 
}