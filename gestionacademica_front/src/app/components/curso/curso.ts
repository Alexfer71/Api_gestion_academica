import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { cursoService } from '../../services/curso';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './curso.html',
  styleUrl: './curso.css'
})
export class CursoComponent implements OnInit {
  cursos: Curso[] = [];

  nuevo: Curso = {
    descripcionCurso: '',
    estadoCurso: 'ACTIVO'
  } as Curso;

  constructor(private cursoService: cursoService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.cursoService.listar().subscribe({
      next: (data: Curso[]) => (this.cursos = data),
      error: (e: any) => console.log(e),
    });
  }

  guardar(): void {
    this.cursoService.crear(this.nuevo).subscribe({
      next: (_resp: Curso) => {
        this.nuevo.descripcionCurso = '';
        this.cargar();
      },
      error: (e: any) => console.log(e),
    });
  }

  eliminar(id: number): void {
    this.cursoService.eliminar(id).subscribe({
      next: () => this.cargar(),
      error: (e: any) => console.log(e),
    });
  }
  
  confirmarEliminar(id: number): void {
  const ok = confirm('¿Seguro que deseas eliminar este curso?');
  if (!ok) return;
  this.eliminar(id);
  }
}