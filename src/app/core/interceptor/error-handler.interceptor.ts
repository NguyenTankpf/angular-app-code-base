import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '@env';
import { UNAUTHORIZED, FORBIDDEN } from '../constants/common.const';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      console.error('Request error ' + JSON.stringify(response));
    }

    // console.error(error);
    const httpErrorCode = response['status'];
    switch (httpErrorCode) {
      case UNAUTHORIZED:
        this.router.navigateByUrl('/auth/login');
        break;
      case FORBIDDEN:
        this.router.navigateByUrl('/auth/403');
        break;
      // case BAD_REQUEST:
      //    this.showError(error.message);
      //     break;
      default:
        break;
    }

    throw response;
  }
}
