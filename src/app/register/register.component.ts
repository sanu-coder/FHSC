import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FhscServiceService } from '../fhsc-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  cvisible : any;
  iconClass:any;
  visible:any;
  current = 0;
  name:any;
  password : any;
  errorMessage :string = "";
  confirmPassword:any;
  email :any;
  index = 'First-content';
  userDetails:any;
  error :any;
 
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }
  
  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
  show(){
    if(this.visible === 'text'){
      this.visible = 'password';
    }
    else{
      this.visible = 'text';
    }
  }
  cshow(){
    if(this.cvisible === 'text'){
      this.cvisible = 'password';
    }
    else{
      this.cvisible = 'text';
    }
  }
  onSubmit(){
    console.log("hit");
    if(this.password != this.confirmPassword){
      this.error = "Password and confirm password should be same"
    }
    this.userDetails = {
      name : this.name,
      email : this.email,
      password : this.password,
      confirmPassword : this.confirmPassword,
    };
    console.log(this.userDetails);
    this.fhsc.register(this.userDetails).toPromise().then(async(data:any)=>{
      console.log(data);
      if(data.result === "success"){
        await Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          showConfirmButton: true,
          confirmButtonColor: 'black',
          timer: 1500
        });
        localStorage.setItem("id", data.id);
        this.router.navigate(['/dashboard']);
      }else{
        this.errorMessage = data.result;
      }
      
    })
  }
  constructor( private fhsc :FhscServiceService,private router: Router) { 
    this.error = "";
    this.visible = 'password';
    this.cvisible = 'password';
  }

  ngOnInit(): void {

  }

}
