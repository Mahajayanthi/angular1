import { Component, OnInit } from '@angular/core';
import { canteenService } from '../canteen.service';
import { canteen } from '../canteen';
import { Observable,Subject } from "rxjs";
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-canteen-list',
  templateUrl: './canteen-list.component.html',
  styleUrls: ['./canteen-list.component.css']
})
export class CanteenListComponent implements OnInit {
  id:any;
  canteenNo: any;
  phoneNo: any;

 constructor(private Canteenservice:canteenService) { }

  canteensArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  canteens: Observable<canteen[]>;
  canteen : canteen=new canteen();
  deleteMessage=false;
  canteenlist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.Canteenservice.getcanteenList().subscribe(data =>{
    this.canteens =data;
    this.dtTrigger.next();
    })
  }
  
  deletecanteen(id: number) {
    this.Canteenservice.deletecanteen(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.Canteenservice.getcanteenList().subscribe(data =>{
            this.canteens =data
            })
        },
        error => console.log(error));
  }


  updatecanteen(id: number){
    this.Canteenservice.getcanteen(id)
      .subscribe(
        data => {
          this.canteenlist=data           
        },
        error => console.log(error));
  }

  canteenupdateform=new FormGroup({
    mailId:new FormControl(),
    DateandTime:new FormControl(),
    canteenNo:new FormControl(),
    PhoneNo:new FormControl(),
    selectcanteen:new FormControl(),
    
  });

  updateCan(updateCan){
    this.canteen=new canteen(); 
   this.canteen.mailId=this.mailId.value;
   this.canteen.canteenNo=this.canteenNo.value;
   this.canteen.dateandtime=this.DateandTime.value;
  //  this.canteen.time=this.Time.value;
   //this.canteen.canteenNo=this.canteenNo.value;
   this.canteen.phoneNo=this.phoneNo.value;
   this.canteen.selectcanteen=this.selectcanteen.value;
   console.log(this.selectcanteen.value);
   

   this.Canteenservice.updatecanteen(this.canteen.id,this.canteen).subscribe(
    data => {     
      this.isupdated=true;
      this.Canteenservice.getcanteenList().subscribe(data =>{
        this.canteens=data
        })
    },
    error => console.log(error));
  }

  get mailId(){
    return this.canteenupdateform.get('mailId');
  }
  get CanteenNo()
  {
    return this.canteenupdateform.get('canteenNo');
  }

  get DateandTime(){
    return this.canteenupdateform.get('DateandTime');
  }

  // get Time(){
  //   return this.canteenupdateform.get('Time');
  // }

  /* get canteenNo(){
    return this.canteenupdateform.get('canteenNo');
  } */
  get selectcanteen()
  {
    return this.canteenupdateform.get('selectcanteen');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
