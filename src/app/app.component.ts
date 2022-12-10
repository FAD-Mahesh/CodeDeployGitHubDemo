import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mobiles: any =[];
  formHeader="Add mobile";
  mobileName : any;
  price: any;
  ram: any;
  storage: any;
  showForm:boolean = false;
  id: any;


constructor(private _mobileService:MobileService){
}

  ngOnInit():void{
    this.getmobile()
  }
  deleteMobiles(id:any){
    this._mobileService.deleteMobile(id).subscribe((res)=>{
      this.getmobile();
    })
    }
    getmobile(){
    this._mobileService.getMobiles().subscribe((data)=>{
       this.mobiles = data;
       console.log("DATA :",this.mobiles)
    },
     (error)=>{
       console.log("error")
       }
       )
      }
  openForm(data:any){
    this.showForm = true;
    if(data){
      this.mobileName = data['name'];
      this.ram = data['ram'];
      this.storage = data['storage'];
      this.price = data['price'];
    }else{
      this.id = null;
      this.formHeader = 'Add Mobile'
    }
  }

  saveMobile(data=null){
    this.showForm = false;

    let body:any = {
      id : this.id,
      name:this.mobileName,
      ram:this.ram,
      storage: this.storage,
      price:this.price
    }
    if(this.id){
     body.id = this.id;
     this._mobileService.putMobile(body).subscribe((res)=>{
      this.getmobile();
     })
    }else{
      this._mobileService.postMobile(body).subscribe((resp)=>{
        this.getmobile();
      })
    }
  }

  closeForm(){
    this.showForm = false;
    this.clearForm();
  }
  clearForm(){
    this.mobileName = null;
    this.price = null;
    this.ram= null;
    this.storage = null;
  }
  
}
