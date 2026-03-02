import { Component } from '@angular/core';
import { CursoComponent } from './components/curso/curso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CursoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
