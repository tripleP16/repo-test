import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { BaseModel } from "../models/views/core/baseModel";
import { AbstractFactory } from "../models/abstract-factory/abstractFactory";

@Injectable({
    providedIn: 'root',
})
export class TestService<T> {

    private baseUrl: string =  'http://api.snappay.webuildit.tech/';
    private _path: string = '';
    private _factory : AbstractFactory<T> | null = null;

    public set factory(v : AbstractFactory<T>) {
        this._factory = v;
    }

    public set path(value : string) {
        this._path = value;
    }
    

    constructor(private httpClient: HttpClient ){

    }

    get(): Observable<T[]> {
        return this.httpClient.get(this.baseUrl + this._path).pipe(
            map((responseData:any)=>{
                const response: T[] = [];
                for(let resp of responseData.data) {
                    response.push(this._factory!.createModel(resp))
                }
                return response;
            })
        )
    }

    getPaginated(): Observable<T>{
        return this.httpClient.get(this.baseUrl + this._path).pipe(
            map((responseData:any)=>{
                console.log(responseData);
                const response: T = this._factory!.createModel(
                    responseData
                )
                return response;
            })
        )
    }
}