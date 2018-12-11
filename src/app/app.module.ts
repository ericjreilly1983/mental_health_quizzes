import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SociopathComponent } from './sociopath/sociopath.component';
import { DepressionComponent } from './depression/depression.component';


const appRoutes: Routes = [
{path: 'sociopath', component: SociopathComponent},
{path: 'depression', component: DepressionComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SociopathComponent,
    DepressionComponent
  ],
  imports: [
  	RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
