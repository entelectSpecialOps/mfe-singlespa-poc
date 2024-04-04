import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientsModule } from './clients/clients.module';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,ClientsModule,CountryComponent,CountryListComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExternalComponentApp';
}
