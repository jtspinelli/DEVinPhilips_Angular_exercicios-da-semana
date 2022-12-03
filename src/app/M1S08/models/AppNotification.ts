export class AppNotification {
  iconClasses: string;
  appName: string;
  date: Date;
  title: string;
  subtitle: string;
  lido:boolean;
  static pool: AppNotification[] = [];

  constructor(iconClasses: string, appName: string, date: Date, title: string, subtitle: string) {
    this.iconClasses = iconClasses;
    this.appName = appName;
    this.date = date;
    this.title = title;
    this.subtitle = subtitle;
    this.lido = false;
    AppNotification.pool.push(this);
  }
}

new AppNotification('fa-brands fa-instagram', 'Instagram', new Date('2022-11-15T10:31:00-03:00'), 'Nova Mensagem', '@carlosfreitas: fala Jonathan, gostaria de ver...');
new AppNotification('fa-solid fa-burger', 'Delivery+', new Date('2022-11-15T11:40:00-03:00'), 'Bateu aquela fome?', 'Dá uma olhada nessas promoções que prepar...');
