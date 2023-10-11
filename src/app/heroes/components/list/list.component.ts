import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames = ['Batman', 'Spiderman', 'Ironman', 'Hulk', 'Hawkeye'];
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
    // console.log({deletedHero});
  }
}
