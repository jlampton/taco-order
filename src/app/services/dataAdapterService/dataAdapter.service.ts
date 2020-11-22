import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IOrder } from '../orderService/order.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private orders: IOrder[] = [];
  constructor() {
    const savedOrderJson = localStorage.getItem('orderList');
    if (savedOrderJson != null) {
      this.orders = JSON.parse(savedOrderJson);
    }
  }

  getAllOrders(): Observable<IOrder[]> {
    return of(this.orders);
  }

  getOrderById(orderId: number): Observable<IOrder> {
    const order = this.orders.find(o => o.orderId == orderId);
    return of(order);
  }

  addOrder(order: IOrder): Observable<IOrder> {
    order.orderId = Math.floor(100000 + Math.random() * 900000);
    this.orders.push(order);
    localStorage.setItem('orderList', JSON.stringify(this.orders));
    return of(order);
  }

  removeOrderById(orderId: number): Observable<number> {
    this.orders = this.orders.filter(o => o.orderId != orderId);
    localStorage.setItem('orderList', JSON.stringify(this.orders));
    return of(orderId);
  }

  updateOrder(order: IOrder): Observable<IOrder> {
    let existingOrder = this.orders.find(o => o.orderId == order.orderId);
    if (existingOrder == null) {
      return throwError('Order not found.');
    }

    const updatedOrder = this.mergeOrderData(existingOrder, order);
    existingOrder = updatedOrder;
    const i = this.orders.findIndex(o => o.orderId == order.orderId);
    this.orders[i] = updatedOrder;
    localStorage.setItem('orderList', JSON.stringify(this.orders));
    return of(updatedOrder);
  }

  clearAllOrders() {
    localStorage.removeItem('orderList');
  }

  private mergeOrderData(existingOrder: IOrder, order: IOrder) {
    const existingOrderId = existingOrder.orderId;
    const mergedOrder = {... existingOrder, ... order};
    mergedOrder.orderId = existingOrderId;
    return mergedOrder;
  }
}
