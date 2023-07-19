import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoaderSpinerComponent } from './loader-spiner/loader-spiner.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
    LoaderSpinerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    LoaderSpinerComponent
  ]
})
export class SharedModule { }
