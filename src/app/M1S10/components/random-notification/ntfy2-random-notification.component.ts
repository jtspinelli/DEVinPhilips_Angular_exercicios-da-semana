import { Component } from '@angular/core';
import {AppNotification} from "../../../M1S08/models/AppNotification";
import {fontAwesomeClasses} from "./fontAwesomeClasses";
import {Ntfy2LoadingService} from "../../services/ntfy2-loading.service";
import {Subject} from "rxjs";

@Component({
  selector: 'ntfy2-random-notification',
  templateUrl: './ntfy2-random-notification.component.html',
  styleUrls: ['./ntfy2-random-notification.component.scss']
})
export class Ntfy2RandomNotificationComponent {
  constructor(private loadingService: Ntfy2LoadingService) {
  }

  loading:boolean = false;

  teste = new Subject();

  async generateRandomNotification() {
    this.loadingService.newNotificationAlert('0');
    this.loading = true;

    const iconClass = this.getRandomClass();
    const appName = this.capitalize(iconClass.split('fa-')[1].split('-')[0]);
    const date = new Date();
    const titulo = await this.getRandomWords(3);
    const subtitulo = await this.getRandomWords(5);

    new AppNotification(iconClass, appName, date, titulo, subtitulo);

    this.loadingService.newNotificationAlert('1');
    this.loading = false;
  }

  getRandomClass():string {
    const randomNum:number = Math.floor(Math.random() * fontAwesomeClasses.length);
    return fontAwesomeClasses[randomNum];
  }

  async getRandomWords(quantity:number) {
    const result = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const words = await result.json();
    const arrayOfWords = words[0].toLowerCase().replace(/,*\.*( {2})*/g, '').split(" ");

    let count:number = 1;
    let randomWords:string = '';

    do {
      const randomNum:number = Math.floor(Math.random() * arrayOfWords.length);
      randomWords += ` ${arrayOfWords[randomNum]}`;
      count++;
    } while (count <= quantity);

    return this.capitalize(randomWords.trim());
  }

  capitalize(string:string) {
    return `${string[0].toUpperCase()}${string.substring(1)}`;
  }
}
