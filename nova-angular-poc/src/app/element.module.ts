import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ClientsModule } from './clients/clients.module';
import { ClientsComponent } from './clients/clients.component';
import { CountryComponent } from './country/country.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country/country.service';
import { CountryListComponent } from './country-list/country-list.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        BrowserModule,
        ClientsModule,
        CommonModule,
        MatListModule,
        HttpClientModule,
        CountryComponent,
        CountryListComponent
    ],
    providers: [CountryService],
})
export class ElementModule implements DoBootstrap {
    constructor(
        private injector: Injector
    ) {}

    ngDoBootstrap(appRef: ApplicationRef) {
        if (!customElements.get('clients-provider')) {
            // Register only if 'clients-provider' entry is not found in the registry
            
            // Step 3: ClientsComponent stores the constructor class
            const clientsComponent = createCustomElement(ClientsComponent, {
                injector: this.injector,    // This injector is used to load the component's factory
            });
            
            // Step 4: Registering custom tag 'clients-provider' with the obtained custom class
            customElements.define('clients-provider', clientsComponent);
        }

        if (!customElements.get('country-provider')) {
            // Register only if 'clients-provider' entry is not found in the registry
            
            // Step 3: ClientsComponent stores the constructor class
            const countryComponent = createCustomElement(CountryComponent, {
                injector: this.injector,    // This injector is used to load the component's factory
            });
            
            // Step 4: Registering custom tag 'clients-provider' with the obtained custom class
            customElements.define('country-provider', countryComponent);
        }

        if (!customElements.get('country-list-provider')) {
            // Register only if 'clients-provider' entry is not found in the registry
            
            // Step 3: ClientsComponent stores the constructor class
            const countryListComponent = createCustomElement(CountryListComponent, {
                injector: this.injector,    // This injector is used to load the component's factory
            });
            
            // Step 4: Registering custom tag 'clients-provider' with the obtained custom class
            customElements.define('country-list-provider', countryListComponent);
        }
    }
}