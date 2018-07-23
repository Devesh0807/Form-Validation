import { Component, OnInit } from '@angular/core';
// import { EALREADY } from 'constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
   public matchPwd = false;
  constructor() { }

  ngOnInit() {
    
  }
  confirmMsg(){
    alert("You are Register successfully");
  }
  
  match(pwd, cpwd){
    this.matchPwd = false;
    if(pwd==cpwd){
    }
    else{
      this.matchPwd= true;
    }
  }
}
