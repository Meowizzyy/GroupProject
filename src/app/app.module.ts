import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClient } from '@angular/common/http'; // ✅ Required for HttpClient
import { FormsModule } from '@angular/forms'; // Optional, for forms support

// Import your components

// Import your services (optional, or use providedIn: 'root')

@NgModule({
  declarations: [
    AppComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    HttpClient, // ✅ Required for HttpClient
    FormsModule, // Optional: useful for ngModel, etc.
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
