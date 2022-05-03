import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any = [];
  username: string = '';
  fullName: any;
  p: number = 1
  constructor(private cs: CustomerService, private route: ActivatedRoute) { }
  alert:boolean=false;
  deleteUser(item:any){
    console.log(this.users)
    this.users.splice(item-1, 1)

    this.cs.deleteItem(item).subscribe((output)=>{
      console.log(output);
      this.alert=true;
     

}
)

  }
  closeAlert(){
    this.alert=false
  }
  ngOnInit(): void {
    
    this.cs.getUsers().subscribe((result)=>
    this.users=result)

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.username = (params['username']).split('@')[0];
        console.log(this.username);
      }
      )
      
}

  Search() {
    if (this.fullName == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter((res: any) => {
        return res.fullName.toLocaleLowerCase().match(this.fullName.toLocaleLowerCase())
      })
    }

  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
