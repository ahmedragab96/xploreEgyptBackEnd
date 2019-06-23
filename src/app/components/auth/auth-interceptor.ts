import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth.services';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authServices: AuthServices) {}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authServices.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }
}
