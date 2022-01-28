import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor( private authService: AuthService,private router: Router,private toastr: ToastrService) {
   
   }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.username,this.password).then(() => {
      this.toastr.success("Bejelentkezés sikeres. Lássunk munkának!");
      this.router.navigate(["/home"])
    }).catch(err => {
      this.toastr.error(err);
    })
  }

  rememberMe(){
    this.authService.setRememberMe();
  }

}
