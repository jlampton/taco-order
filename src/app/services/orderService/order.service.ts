import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService } from '../dataAdapterService/dataAdapter.service';
import { IOrder } from './order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  public orders$: Subject<IOrder[]> = new Subject();
  constructor(private readonly dataService: DataService) { }

  getOrderById(orderId: number): Observable<IOrder> {
    return this.dataService.getOrderById(orderId);
  }
  getAllOrders(): Observable<IOrder[]> {
    return this.dataService.getAllOrders();
  }
  updateOrder(order: IOrder): Observable<IOrder> {
    return this.dataService.updateOrder(order);
  }
  removeOrderById(orderId: number): Observable<number> {
    return this.dataService.removeOrderById(orderId);
  }
  removeAllOrders() {
    this.dataService.clearAllOrders();
  }
  addOrder(order: IOrder): Observable<IOrder> {
    return this.dataService.addOrder(order);
  }
}
