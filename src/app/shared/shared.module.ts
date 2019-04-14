import { NgModule } from "@angular/core";


import { SidebarComponent } from "./sidebar/sidebar.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { HeaderComponent } from "./header/header.component";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";







@NgModule({
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