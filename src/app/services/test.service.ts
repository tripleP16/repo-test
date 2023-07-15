import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { BaseModel } from "../models/views/core/baseModel";
import { AbstractFactory } from "../models/abstract-factory/abstractFactory";

@Injectable()
export class TestService {

    private baseUrl: string =  'http://api.snappay.webuildit.tech/';


    constructor(private httpClient: HttpClient ){

    }

    get<T>(factory: AbstractFactory<T>, path: string): Observable<T[]> {
        return this.httpClient.get(this.baseUrl + path).pipe(
            map((responseData:any)=>{
                const response: T[] = [];
                for(let resp of responseData.data) {
                    response.push(factory!.createModel(resp))
                }
                return response;
            })
        )
    }

    getPaginated<T>(factory: AbstractFactory<T>, path: string): Observable<T>{
        return this.httpClient.get(this.baseUrl + path).pipe(
            map((responseData:any)=>{
                console.log(responseData);
                const response: T = factory!.createModel(
                    responseData
                )
                return response;
            })
        )
    }

    post<T, N>(factory: AbstractFactory<T>, path: string, body: N): Observable<T> {
      return this.httpClient.post(this.baseUrl + path, body).pipe(
        map((responseData:any)=>{
          const response: T = factory!.createModel(
            responseData
          );
          return response
        })
      )
    }

    put<T, N>(factory: AbstractFactory<T>, path: string, body: N): Observable<T> {
      return this.httpClient.put(this.baseUrl + path, body).pipe(
        map((responseData:any)=>{
          const response: T = factory!.createModel(
            responseData
          );
          return response
        })
      )
    }


    patch<T, N>(factory: AbstractFactory<T>, path: string, body: N): Observable<T> {
      return this.httpClient.patch(this.baseUrl + path, body).pipe(
        map((responseData:any)=>{
          const response: T = factory!.createModel(
            responseData
          );
          return response
        })
      )

  }
}


