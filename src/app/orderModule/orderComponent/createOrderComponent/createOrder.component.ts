import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/services/orderService/order.interface';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  templateUrl: './createOrder.component.html',
})
export class CreateOrderComponent {
  title = 'Create Order';
  constructor(
    private readonly orderService: OrderService,
    private readonly router: Router
    ) { }
    onFormSubmit(order: IOrder) {
      this.orderService.addOrder(order)
      .subscribe(res => this.router.navigate(['/orders']), err => console.log(err));
    }
}
