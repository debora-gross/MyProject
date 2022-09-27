import { Component } from '@angular/core';

@Component({
  //esse app-root é o componente que deve ser usado como tag no index: <app-root></app-root>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyProject';
  
}
