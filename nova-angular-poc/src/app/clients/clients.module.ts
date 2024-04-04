import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientsComponent
  ],
  exports: [ClientsComponent]
})
export class ClientsModule { }
