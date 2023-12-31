import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroName: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  public heroeRemove?: string;

  removeLastHero(): void {
    this.heroeRemove = this.heroName.pop();
  }
}
