import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { IOrder } from 'src/app/services/orderService/order.interface';

@Component({
  selector: 'app-order-form',
  templateUrl: './orderForm.component.html',
  styleUrls: ['./orderForm.component.scss']
})
export class OrderFormComponent implements OnChanges {
  orderForm: FormGroup;
  @Input() order: IOrder;
  @Output() formSubmit: Subject<any> = new Subject();

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    this.orderForm = this.buildForm(changes.order.currentValue);
  }
  get firstName() {
    return this.orderForm.controls['firstName'];
  }

  get lastName() {
    return this.orderForm.controls['lastName'];
  }

  get addressLine1() {
    return this.orderForm.controls['addressLine1'];
  }

  get addressLine2() {
    return this.orderForm.controls['addressLine2'];
  }

  get city() {
    return this.orderForm.controls['city'];
  }

  get state() {
    return this.orderForm.controls['state'];
  }

  get zip() {
    return this.orderForm.controls['zip'];
  }

  onFormSubmit(orderForm: FormGroup) {
    if (!orderForm.valid) {
      return;
    }

    const vals = orderForm.value;
    this.formSubmit.next(vals);
  }

  private buildForm(order: IOrder): FormGroup {
    return this.createForm(order);
  }

  private createForm(orderData: IOrder) {
    const form = this.formBuilder.group({
      firstName: [orderData && orderData.firstName || null, Validators.required],
      lastName: [orderData && orderData.lastName || null, Validators.required],
      addressLine1: [orderData && orderData.addressLine1 || null, Validators.required],
      addressLine2: [orderData && orderData.addressLine2 || null],
      city: [orderData && orderData.city || null, Validators.required],
      state: [orderData && orderData.state || null, Validators.required],
      zip: [orderData && orderData.zip || null, Validators.required]
    });
    return form;
  }
}
