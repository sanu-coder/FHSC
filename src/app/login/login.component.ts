import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FhscServiceService } from '../fhsc-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;
  userDetails:any;
  constructor(private fhsc : FhscServiceService, private router: Router) { }
   onSubmit(){
    this.userDetails = {
      email : this.email,
      password : this.password,
    };
    if(this.userDetails){ 
      console.log(this.userDetails);
      this.fhsc.login(this.userDetails).toPromise().then(async (data:any)=>{
        console.log(data);
        if(data.success == true){
          await Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: true,
            confirmButtonColor: 'black',
            timer: 1500
          });
          // this.router.navigate(['/hospitals/'+data.user._id]);
          this.router.navigate(['/dashboard']);
        }
      })
    }
    
  }
  ngOnInit(): void {
    this.fhsc.getHospitals().subscribe((data:any)=>{
      console.log(data);
    })
  }

}
