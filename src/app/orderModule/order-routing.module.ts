import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './orderComponent/allOrdersComponent/allOrders.component';
import { CreateOrderComponent } from './orderComponent/createOrderComponent/createOrder.component';
import { EditOrderComponent } from './orderComponent/editOrderComponent/editOrder.component';
import { OrderComponent } from './orderComponent/order.component';


const routes: Routes = [
  {
    path: 'orders',
    redirectTo: 'orders/all'
  },
  {
    path: 'orders',
    component: OrderComponent,
    children: [
      {
        path: 'all',
        component: AllOrdersComponent
      },
      {
        path: 'create',
        component: CreateOrderComponent
      },
      {
        path: 'edit/:orderId',
        component: EditOrderComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
