import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({ providedIn: 'root' })
export class cursoService {
  private url = 'http://localhost:8080/api/curso';

  constructor(private http: HttpClient) {}

  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  crear(c: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url, c);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
  
  actualizar(id: number, c: Curso): Observable<Curso> {
  return this.http.put<Curso>(`${this.url}/${id}`, c);
}
}