import { AbstractFactory } from "../../abstract-factory/abstractFactory";
import { BaseModel } from "../../views/core/baseModel";
import { Meta } from "../../views/core/meta";
import { Pagination } from "../../views/core/paginationModel";

export class PaginationFactory<T extends BaseModel> implements AbstractFactory<Pagination<T>>{
    
    
    private _factory : AbstractFactory<T> | null = null;
   
    public set factory(v : AbstractFactory<T>) {
        this._factory = v;
    }

    constructor(factory : AbstractFactory<T>){
        this._factory = factory;
    }
    
    
    createModel(response: any): Pagination<T> {

        const data = response.data;
        const arrayT = [];
        for (let aux of data  ){
            arrayT.push(this._factory!.createModel(aux));
        }

        const meta: Meta = new Meta(
            response.meta.offset,
            response.meta.limit,
                    
        )
        const pagination: Pagination<T> = new Pagination<T>(
            meta,
            response.count,
            arrayT
        )
            
        return pagination;
    }


}