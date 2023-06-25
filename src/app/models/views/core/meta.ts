export class Meta {
    
    private _offset : number ;
    private _limit : number ;

    constructor(offset : number, limit : number) {
        this._offset = offset ;
        this._limit = limit ;
    }

    public get limit() {
        return this._limit;
    }

    public set limit(v: number) {
        this._limit = v ;
    }

    public get offset() : number {
        return this._offset;
    }
    public set offset(v : number) {
        this._offset = v;
    }
    
}