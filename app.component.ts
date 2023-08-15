import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boxes = [
    { color: 'bg-primary', text: 'Box 1' },
    { color: 'bg-success', text: 'Box 2' },
    { color: 'bg-danger', text: 'Box 3' }
  ];
}
