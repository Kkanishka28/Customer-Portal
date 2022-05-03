import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createUser = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl('')

  })

alert:boolean=false
  constructor(private customer:CustomerService) { }
  userDetail(){
    this.customer.createId(this.createUser.value).subscribe((result)=>{
      console.log(result);
      this.alert=true;
    }
    
    )
    this.createUser.reset({})
    
  }
  closeAlert(){
    this.alert=false
  }
  ngOnInit(): void {
  }


}
