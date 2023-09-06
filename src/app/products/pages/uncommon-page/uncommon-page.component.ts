import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //#region  i18n Select Pipe
  public name: string = 'Danilo';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }
  public isMale: boolean = true;

  changeClient() {
    this.isMale = !this.isMale;

    if (this.isMale) {
      this.name = 'Danilo';
      this.gender = 'male';
    } else {
      this.name = 'Melisa';
      this.gender = 'female'
    }
  }
  //#endregion

  //#region i18nPlural Pipe
  public clientes: string[] = ['Danilo', 'Melisa', 'Fernanda', 'Maira', 'Bre Larson', 'Erika Eleniak', 'Kaina']
  public clientsMap = {
    '=0': 'No tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    '=2': 'tenemos 2 clientes',
    'other': 'tenemos # clientes'
  }

  deleteClient() {
    this.clientes.shift();
  }
  //#endregion

  //#region  KeyValue Pipe
  public person =
  {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }
  //#endregion

  //#region Async Pipe
  public myObserableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la Promesa');
      console.log('Tenemos data en la Promesa');
    }, 3500);
  })

}
