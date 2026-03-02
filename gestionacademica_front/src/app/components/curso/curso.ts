import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.html',
  styleUrls: ['./curso.css']
})
export class CursoComponent implements OnInit {

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe({
      next: (res) => console.log('Cursos desde backend:', res),
      error: (err) => console.log('Error:', err)
    });
  }
}
