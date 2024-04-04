import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CountryService } from '../services/country/country.service';
import { Country } from '../country/country';
import {MatListModule} from '@angular/material/list';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule,MatListModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
  providers: [CountryService],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CountryListComponent {
  country : string = 'South Africa';
  selectedCountry ?: Country;
  
  public countryObjectList?: [Country];
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountryList().pipe().subscribe(country => this.countryObjectList = country)
  }

  onSelect(arg0: any) {
    this.country = arg0.name;
    this.countryService.getCountry(this.country).pipe(first()).subscribe(country => this.selectedCountry = country[0])
  }
}
