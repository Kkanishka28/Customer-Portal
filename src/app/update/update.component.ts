import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateUser = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl('')

  })
  alert:boolean=false
  constructor(private customer:CustomerService, private router:ActivatedRoute) { }

  closeAlert(){
    this.alert=false
  }
  updateData:any={}
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.customer.getCurrentUser(this.router.snapshot.params['id']).subscribe((result)=>{
      this.updateData = result
      this.updateUser = new FormGroup({
        fullName: new FormControl(this.updateData.fullName),
        email: new FormControl(this.updateData.email),
        salary: new FormControl(this.updateData.salary)
    
      })
      
    })
  
  }

 
  collectData(){
    console.log("item",this.updateUser.value);
    this.customer.updateCurrentUser(this.router.snapshot.params['id'], this.updateUser.value).subscribe((output)=>{
      console.log(output);
      this.alert=true;
    
  })
}

}
