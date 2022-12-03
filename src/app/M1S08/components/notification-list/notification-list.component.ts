import { Component } from '@angular/core';
import { AppNotification } from "../../models/AppNotification";
import { LoadingService } from "../../services/loading.service";

@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  constructor(private loadingService: LoadingService) {
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
