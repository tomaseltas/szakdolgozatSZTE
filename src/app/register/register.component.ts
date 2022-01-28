import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  }

  googleIcon = faGoogle;
  

  constructor(private authService: AuthService,private router: Router, private toastr: ToastrService,private userService: UserService) { }

  ngOnInit(): void {
  }

  signup() {
    this.authService.signup(this.user.email,this.user.password).then(() => {
      this.updateUser(this.user.name);
      this.router.navigate(["/home"]);
      this.toastr.success("Sikeresen bejelentkeztél.");
    }).catch(err => {
      this.toastr.error(err);
    });
  }

  signUpWithGoogle(){
    this.authService.signUpWithGoogle().then(() => {
      this.updateUser();
      this.router.navigate(["/home"]);
      this.toastr.success("Sikeresen bejelentkeztél Google fiókkal.");
    }).catch(err => {
      this.toastr.error(err);
    });
  }

  updateUser(name?: string){
    this.authService.getAuth().subscribe(user => {
      if(user) {
        this.userService.updateUser(user.uid, user.email || "",user.displayName || name || "")
      }
    }, error => {
      this.toastr.error(error.message);
    })
  }

}
