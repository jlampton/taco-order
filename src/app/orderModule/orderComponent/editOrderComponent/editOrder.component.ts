import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { IOrder } from 'src/app/services/orderService/order.interface';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  templateUrl: './editOrder.component.html',
})
export class EditOrderComponent implements OnInit {
  title = 'Edit Order';
  order: IOrder;
  constructor(
    private readonly orderService: OrderService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      mergeMap((paramMap: ParamMap) => {
        const orderId = +paramMap.get('orderId');
        return this.orderService.getOrderById(orderId);
      })
    )
    .subscribe((order: IOrder) => {
      if (order == null) {
        this.router.navigate(['/orders/all']);
      }
      this.order = order;
    },
    err => console.log(err));
  }

  onFormSubmit(order: IOrder) {
    order.orderId = this.order.orderId;
    this.orderService.updateOrder(order)
    .subscribe(res => this.router.navigate(['/orders']), err => console.log(err));
  }
}
