import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CountryService } from '../services/country/country.service';
import { Country } from './country';
import { catchError, first } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
  providers: [CountryService],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CountryComponent implements OnInit{
  country : string = 'South Africa';
  
  public countryObject?: Country;
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountry(this.country).pipe(first()).subscribe(country => this.countryObject = country[0])
  }

  onEnter(arg0: any) {
    this.country = arg0;
    this.countryService.getCountry(this.country).pipe(first()).subscribe(country => this.countryObject = country[0])
  }
}