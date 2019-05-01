import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { SidebarComponent } from "./sidebar/sidebar.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { HeaderComponent } from "./header/header.component";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { RouterModule } from "@angular/router";







@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],

  declarations: [
    BreadcrumsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  exports: [
    BreadcrumsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],  
})

export class SharedModule { }