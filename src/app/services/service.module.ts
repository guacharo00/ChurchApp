import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { 
  SettingService,
  SidebarService,
  SharedService,
  UsuarioService
 } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SettingService, SidebarService, SharedService, UsuarioService],
})

export class ServiceModule { }
