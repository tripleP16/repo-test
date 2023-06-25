import { BaseModel } from "./core/baseModel";

export class Rol extends BaseModel{
   
    private _name: string;

    constructor(_id: number, _name: string) {
        super(_id);
        this._name = _name;
       
    }

    
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}