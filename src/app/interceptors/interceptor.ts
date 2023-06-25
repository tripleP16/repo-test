import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHNuYXAtcGF5LmNvIiwic3ViIjoxLCJyb2xlIjoiQWRtaW4iLCJjb21wYW55Ijp7ImlkIjoxLCJuYW1lIjoiQ2FwaXRhbCBTcG9ydHMifSwiaWF0IjoxNjg3NzI3MTgzfQ.cbynaFvicJQ43oJfVDqbr12HkucwbZXF2gw5OsJaVis' ;

    if (token !== null ) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }

    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];