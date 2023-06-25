import { BaseModel } from "./baseModel";
import { Meta } from "./meta";

export class Pagination <T extends BaseModel> {
    private _count: number ;

    private _meta: Meta ;

    private _data: T[] ;

    constructor( meta: Meta, count: number, data: T[] ) {
        this._meta = meta ;
        this._count = count ;
        this._data = data ;
    }

    get count(): number {
        return this._count ;
    }

    get meta(): Meta {
        return this._meta ;
    }

    get data(): T[] {
        return this._data ;
    }

    set count( count: number ) {
        this._count = count ;
    }

    set meta( meta: Meta ) {
        this._meta = meta ;
    }

    set data( data: T[] ) {
        this._data = data ;
    }

}