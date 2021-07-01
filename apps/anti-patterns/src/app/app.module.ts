import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from '@angular-mastery/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpaghettiCodePostsModule } from '@angular-mastery/spaghetti-code/posts';
import { RegistryPatternModule } from '@angular-mastery/registry-pattern';
import { ArchitecturesSscModule } from '@angular-mastery/architectures/ssc';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    BrowserAnimationsModule,
    SpaghettiCodePostsModule,
    RegistryPatternModule,
    ArchitecturesSscModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
