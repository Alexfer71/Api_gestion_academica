import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { curso } from '../models/curso';

@Injectable({ providedIn: 'root' })
export class cursoService {
  private url = 'http://localhost:8080/api/curso';

  constructor(private http: HttpClient) {}

  listar(): Observable<curso[]> {
    return this.http.get<curso[]>(this.url);
  }

  crear(c: curso): Observable<curso> {
    return this.http.post<curso>(this.url, c);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}