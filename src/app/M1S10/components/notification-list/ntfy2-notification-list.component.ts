import { Component } from '@angular/core';
import { AppNotification } from "../../../M1S08/models/AppNotification";
import { Ntfy2LoadingService } from "../../services/ntfy2-loading.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'ntfy2-notification-list',
  templateUrl: './ntfy2-notification-list.component.html',
  styleUrls: ['./ntfy2-notification-list.component.scss']
})
export class Ntfy2NotificationListComponent {
  constructor(private loadingService: Ntfy2LoadingService, private router: Router, private route: ActivatedRoute) {
    this.notifications = [...AppNotification.pool];

    this.loadingService.novaRandomNotification$.subscribe(code => {
      this.loading = code === '0';

      if(!this.loading) {
        this.updateFilter(route.snapshot.params['filtro']);
      }

    });

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateFilter(route.snapshot.params['filtro']);
      }
    })

  }

  notifications: AppNotification[];

  loading:boolean = false;
  nothingToShow:boolean = false;

  checkRead(notificationIndex:number) {
    this.notifications[notificationIndex].lido = true;
  }

  filter(type: string) {
    this.router.navigateByUrl(`/m1s10/home/${type}`);
  }

  updateFilter(type: string) {
    switch (type) {
      case 'todos':
        this.notifications = [...AppNotification.pool];
        break;

      case 'lidos':
        this.notifications = [...AppNotification.pool.filter(e => e.lido)]
        break;

      case 'nao-lidos':
        this.notifications = [...AppNotification.pool.filter(e => !e.lido)]
        break;
    }
     this.nothingToShow = this.notifications.length === 0;
  }

}
