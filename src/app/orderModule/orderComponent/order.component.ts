import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderService } from 'src/app/services/orderService/order.service';
import { ConfirmDialogComponent } from 'src/app/sharedModules/dialogComponents/confirmDialog.component';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  title = 'Loco Order Manager';
  constructor() { }
}
