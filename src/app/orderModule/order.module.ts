import { NgModule } from '@angular/core';
import { OrderComponent } from './orderComponent/order.component';
import { OrderFormComponent } from './orderComponent/orderFormComponent/orderForm.component';
import { AllOrdersComponent } from './orderComponent/allOrdersComponent/allOrders.component';
import { OrderRoutingModule } from './order-routing.module';
import { SharedFormModule } from '../sharedModules/sharedForm.module';
import { SharedButtonModule } from '../sharedModules/sharedButton.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTableModule } from '@angular/material';
import { CreateOrderComponent } from './orderComponent/createOrderComponent/createOrder.component';
import { EditOrderComponent } from './orderComponent/editOrderComponent/editOrder.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderFormComponent,
    AllOrdersComponent,
    CreateOrderComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    SharedFormModule,
    SharedButtonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
})
export class OrderModule { }
