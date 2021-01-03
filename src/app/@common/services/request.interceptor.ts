import { Observable } from 'rxjs'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SharedOptions } from '@helpers/shared-options'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  // ======================================= //
  constructor(private options: SharedOptions) { }
  // ======================================= //
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/svg'
    }

    const request = req.clone({ setHeaders: headers });
    return next.handle(request);
  }
}