import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdListModule,
  MdMenuModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdTableModule,
  MdToolbarModule
} from '@angular/material';

/**
 * 
 * 
 * @export
 * @class MaterialModule
 */
@NgModule({
  imports: [
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdPaginatorModule,
    MdTableModule,
    MdProgressBarModule,
    MdSnackBarModule],
  exports: [
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdPaginatorModule,
    MdTableModule,
    MdProgressBarModule,
    MdSnackBarModule],
  declarations: [],
  providers: [],
})
export class MaterialModule {
}

