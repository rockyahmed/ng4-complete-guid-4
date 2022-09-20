import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng4-complete-guid-4';

  defaultComponent = 'recipes';

  ngOnInit(): void {
  }

  constructor () {

  }

  onNavigate(feature: string){
    this.defaultComponent = feature;
  }

}
