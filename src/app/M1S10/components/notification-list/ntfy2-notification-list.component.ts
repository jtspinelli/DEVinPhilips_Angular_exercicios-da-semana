import { Component } from '@angular/core';
import { AppNotification } from "../../../M1S08/models/AppNotification";
import { Ntfy2LoadingService } from "../../services/ntfy2-loading.service";

@Component({
  selector: 'ntfy2-notification-list',
  templateUrl: './ntfy2-notification-list.component.html',
  styleUrls: ['./ntfy2-notification-list.component.scss']
})
export class Ntfy2NotificationListComponent {
  constructor(private loadingService: Ntfy2LoadingService) {
    this.loadingService.novaRandomNotification$.subscribe(code => {
      this.loading = code === '0';
    });
  }

  loading:boolean = false;

  checkRead(notificationIndex:number) {
    this.getNotifications()[notificationIndex].lido = true;
  }

  getNotifications():AppNotification[] {
    return AppNotification.pool;
  }
}
