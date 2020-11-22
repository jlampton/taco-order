import {Component} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirmDialog.component.html',
})
export class ConfirmDialogComponent {
  title: string;
  header: string;
  message: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = this.data.title;
    this.header = this.data.header;
    this.message = this.data.message;
  }

}
