import { BaseModel } from "./core/baseModel";

export class Products extends BaseModel {
    private _name: string;
    private _price : number;
    private _description : string;

    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }
    
    public get price() : number {
        return this._price;
    }
    public set price(v : number) {
        this._price = v;
    }


    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    

    constructor(_id: number, _name: string, _price: number, _description: string) {
        super(_id);
        this._name = _name;
        this._price = _price;
        this._description = _description;
       
    }

    
   
}