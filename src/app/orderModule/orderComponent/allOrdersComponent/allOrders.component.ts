import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { map, mergeMap } from 'rxjs/operators';
import { IOrder } from 'src/app/services/orderService/order.interface';
import { OrderService } from 'src/app/services/orderService/order.service';
import { ConfirmDialogComponent } from 'src/app/sharedModules/dialogComponents/confirmDialog.component';

@Component({
  templateUrl: './allOrders.component.html',
  styleUrls: ['./allOrders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  title = 'All Orders';
  orders: IOrder[];

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'addressLine1',
    'addressLine2',
    'city',
    'state',
    'zip',
    'actions'
  ];

  orderDataSource: MatTableDataSource<IOrder>;
  constructor(private readonly orderService: OrderService, private readonly dialog: MatDialog) { }

  ngOnInit() {
    this.orderService.getAllOrders()
      .subscribe(orders => {
        this.orders = orders;
        this.orderDataSource = new MatTableDataSource(this.orders);
      },
      err => console.log(err));
  }

  onDeleteOrder(order: IOrder) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Order',
        header: 'WARNING! Deleting Order!',
        message: 'This will delete this order and is not reversible.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.orderService.removeOrderById(order.orderId)
        .pipe(
          mergeMap(res => {
            return this.orderService.getAllOrders();
          })
        )
        .subscribe(orders => {
          this.orders = orders;
          this.orderDataSource = new MatTableDataSource(this.orders);
        }, err => console.log(err));
      }
    });
  }
}
