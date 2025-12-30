import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {
  name='';
  associationDate='';

  addCustomer(){
    alert('Customer Added: ${this.name}');
  }

}
