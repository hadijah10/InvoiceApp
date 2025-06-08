import { Component,EventEmitter,inject, Output,input } from '@angular/core';
import { ReactiveFormsModule,Validators,FormBuilder,FormArray,FormControl,FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EStatus } from '../../../model/interfaces/data';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  options=[
    {value:1,name:"Net 1 Day"},
    {value:7,name:"Net 7 Day"},
    {value:14,name:"Net 14 Day"},
    {value:3,name:"Net 30 Day"},
  ]
  form!:FormGroup
  fb = inject(FormBuilder)
  route=inject(Router)
  isNewform=input<boolean>()
 
  constructor(){
      this.form = this.fb.group({
        createdAt:['20 Aug 2021',[Validators.required]],
        description:['Graphic Design',[Validators.required]],
        paymentTerms:[this.options[3].value,[Validators.required]],
        clientName:['Alex Grim',[Validators.required]],
        status:[EStatus.pending],
        clientEmail:['alexgrim@gmail.com',[Validators.required, Validators.email]],
        senderAddress: this.fb.group({
          street:['19 Union Terrace',[Validators.required,Validators.min(3)]],
          city:['London',Validators.required],
          postalCode:['E13EZ',[Validators.required]],
          country:['United Kingdom',[Validators.required]]
        }),
        clientAddress: this.fb.group({
          street:['84 Church Way',[Validators.required,Validators.min(3)]],
          city:['Bradford',Validators.required],
          postalCode:['BD1 9PB',[Validators.required]],
          country:['United Kingdom',[Validators.required]]
        }),
        items:this.fb.array([
          this.fb.group({
          name:['Banner Design',[Validators.required]],
          quantity:['1',[Validators.required]],
          price:['156.00',[Validators.required]],
          total: [{ value: '156.00', disabled: true }, [Validators.required]]
        })
        ])
           })
      this.setupValueChangeListeners();
    }

    get itemFormArray():FormArray{
    return this.form.get('items') as FormArray
  }
  createItem(){
    return this.fb.group({
      name:['Design',[Validators.required]],
      quantity:['1',[Validators.required]],
      price: ['156.00',[Validators.required]],
        total: [{ value: '156.00', disabled: true }, [Validators.required]]
    })
  }
  addItem(){
    const newItem = this.createItem();
    this.itemFormArray.push(newItem);
    const index = this.itemFormArray.length - 1;
    this.setupListenersForItem(index);
  }
  deleteItem(index:number){
    if(this.form.value.items.length> 1){
        this.itemFormArray.removeAt(index);
    }
  }

    setupValueChangeListeners(): void {
    this.itemFormArray.controls.forEach((itemGroup, index: number) => {
      const quantityCtrl = itemGroup.get('quantity');
      const priceCtrl = itemGroup.get('price');

      quantityCtrl!.valueChanges.subscribe(() => this.updateItemTotal(index));
      priceCtrl!.valueChanges.subscribe(() => this.updateItemTotal(index));
    });
  }

    updateItemTotal(index: number): void {
    const itemGroup = this.itemFormArray.at(index) as FormGroup;
    const quantity = parseFloat(itemGroup.get('quantity')!.value) || 0;
    const price = parseFloat(itemGroup.get('price')!.value) || 0;
    const total = (quantity * price).toFixed(2);
    itemGroup.get('total')!.setValue(total, { emitEvent: false });
  }

   setupListenersForItem(index: number): void {
    const itemGroup = this.itemFormArray.at(index) as FormGroup;
    itemGroup.get('quantity')!.valueChanges.subscribe(() => this.updateItemTotal(index));
    itemGroup.get('price')!.valueChanges.subscribe(() => this.updateItemTotal(index));
  }
  routeTo(location:string=''){
    this.route.navigate([location])
  }
   
    saveAsDraft(){
      if(this.form.valid){
          this.form.get('status')?.setValue(EStatus.draft);
          this.route
      }
    }
     onSubmit(){
      const newformdata = {...this.form.getRawValue()}
      newformdata.id = Date.now()
     console.log(newformdata)
    if(this.form.valid){
      
    }
    
  }
}
