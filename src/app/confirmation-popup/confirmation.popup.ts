import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'confirmation-popup',
  templateUrl: './confirmation.popup.html',
  styleUrls: ['./confirmation.popup.scss'],
})
export class ConfirmationPopup {
  constructor(private readonly _dialogRef: MatDialogRef<ConfirmationPopup>) {}

  closeDialog(input: string) {
    this._dialogRef.close(input);
  }
}
