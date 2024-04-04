import { Component, ViewEncapsulation } from '@angular/core';
import { Client } from './client';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ClientsComponent {
   CLIENTS: Client[] = [
    { id: 1, name: 'Michael' , surname: 'Gomes', idNumber: '999999999', balance: 42},
    { id: 2, name: 'Alejandro' , surname: 'Garnacho', idNumber: '999999999', balance: 10000},
    { id: 3, name: 'Rasmus' , surname: 'Hojlund', idNumber: '999999999', balance: 20000},
    { id: 4, name: 'Aaron' , surname: 'Wan-Bissaka', idNumber: '999999999', balance: 15000},
  ];

    // @Input() submitColor: string = 'unset';
    // @Output() formSubmitted: EventEmitter<{email: string, password: string}> = new EventEmitter();

    constructor(
    ) {
    }
}
