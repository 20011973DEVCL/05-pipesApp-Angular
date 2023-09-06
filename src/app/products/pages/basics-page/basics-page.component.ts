import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'maira y fernanda';
  public nameUpper: string = 'MAIRA Y FERNANDA';
  public titleCase: string = 'mAIrA y feRNanDa';

  public customDate: Date = new Date();
}
