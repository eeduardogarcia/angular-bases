import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name = "Batman";
  public age = 33;

  get CapitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = "Spiderman"
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void {
    this.name = 'Batman';
    this.age = 33;
  }

}
