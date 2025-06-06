import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationPopup } from '../confirmation-popup/confirmation.popup';

@NgModule({
  declarations: [HomePage, ConfirmationPopup],
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [HomePage],
})
export class HomePageModule {}
