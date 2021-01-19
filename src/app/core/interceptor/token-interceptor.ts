import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Basic ' + btoa('paula' + ':' + '123456'))
      });
      return next.handle(authReq);
  }
}
