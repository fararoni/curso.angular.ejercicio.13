import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivismoService {
  private data = ['Derechos humanos', 'Medio ambiente', 'Equidad de Genero' , 'División de poderes'];

  getActivismo(): string[] {
    return this.data;
  }

  addActivismo(item: string): void {
    this.data.push(item);
  }
  constructor() { }
}
