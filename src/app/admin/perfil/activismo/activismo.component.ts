import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivismoService } from '../../../core/services/activismo.service'; 

@Component({
  selector: 'app-activismo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activismo.component.html',
  styleUrl: './activismo.component.css'
})
export class ActivismoComponent {
  items: string[];

  constructor(private activismoService: ActivismoService) {
    this.items = this.activismoService.getActivismo();
  }

  addItem(newItem: string): void {
    this.activismoService.addActivismo(newItem);
    this.items = this.activismoService.getActivismo(); // Actualizar la lista
  }
}
