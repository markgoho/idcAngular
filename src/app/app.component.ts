import { Component, OnInit } from '@angular/core';

// Yup more imports
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'idcAngular';

  // class property called `data`
  // it is of type `any`
  data: any;

  constructor(private http: HttpClient) {}

  // the `: void` part just means ngOnInit isn't returning anything
  ngOnInit(): void {

    // Add your GET endpoint between the single quotes
    this.http.get('').subscribe((apiData) => (this.data = apiData));
  }
}
