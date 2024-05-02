import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainersComponent } from './components/containers/containers.component';
import { ContainerContentsComponent } from './components/container-contents/container-contents.component';
import { Route, RouterOutlet, Routes, provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'containers', component: ContainersComponent},
  {path: 'container-contents', component: ContainerContentsComponent},
  {path: 'container-contents/:id', component: ContainerContentsComponent},
  {path: '', redirectTo: '/containers', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    ContainersComponent,
    ContainerContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule
    
  ],
  providers: [provideRouter(appRoutes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
