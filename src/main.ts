import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { ProductService } from './app/demo/service/product.service';
import { PhotoService } from './app/demo/service/photo.service';
import { NodeService } from './app/demo/service/node.service';
import { IconService } from './app/demo/service/icon.service';
import { EventService } from './app/demo/service/event.service';
import { CustomerService } from './app/demo/service/customer.service';
import {provideHttpClient } from "@angular/common/http";

import { CountryService } from './app/demo/service/country.service';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
      provideAnimations(),
      provideHttpClient(),

        importProvidersFrom(AppRoutingModule),
        BrowserAnimationsModule,BrowserModule,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ]
})
  .catch(err => console.error(err));
