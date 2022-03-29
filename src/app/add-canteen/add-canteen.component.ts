import { Component, OnInit } from '@angular/core';
import { canteenService } from '../canteen.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { canteen } from '../canteen';
@Component({
  selector: 'app-add-canteen',
  templateUrl: './add-canteen.component.html',
  styleUrls: ['./add-canteen.component.css']
})
export class AddcanteenComponent implements OnInit {
  canteenservice: any;
  Canteen: any;
  DateandTime: any;

  constructor(private Canteenservice:canteenService) { }

  canteen : canteen=new canteen();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  canteensaveform=new FormGroup({
    canteenNo:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    DateandTime:new FormControl('',[Validators.required,Validators.minLength(10)]),
    mailId:new FormControl(),
    PhoneNo:new FormControl(),
    selectcanteen:new FormControl(),
  });

  savecanteen(savecanteen){
    this.canteen=new canteen();   
    this.canteen.canteenNo=this.canteenNo.value;
    this.canteen.mailId=this.mailId.value;
    this.canteen.dateandtime=this.DateandTime.value;
    this.canteen.selectcanteen=this.selectcanteen.value;
    this.canteen.phoneNo=this.PhoneNo.value;
    this.submitted = true;
    this.save();
  }
  save() {
    this.canteenservice.createcanteen(this.canteen)
      .subscribe(data => console.log(data), error => console.log(error));
    this.canteen = new canteen();
  }
  get dateandtime(){
    return this.canteensaveform.get('DateandTime');
  }
  get mailId()
  {
    return this.canteensaveform.get('mailId');
  }
  get PhoneNo()
  {
    return this.canteensaveform.get("[PhoneNo")
  }
  get canteenNo()
  {
    return this.canteensaveform.get('canteenNo');
  }
  get selectcanteen(){
    return this.canteensaveform.get('selectcanteen');
  }

  addcanteenForm(){
    this.submitted=false;
    this.canteensaveform.reset();
  }
}
