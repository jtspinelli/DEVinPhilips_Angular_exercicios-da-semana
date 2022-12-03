import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  novaRandomNotification$ = new Subject<string>();

  newNotificationAlert(code:string) {
    this.novaRandomNotification$.next(code);
  }
}
