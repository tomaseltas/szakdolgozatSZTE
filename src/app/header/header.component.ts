import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: AppUser;

  public now: Date = new Date();
  currentDate = new Date();

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    setInterval(() => {
      this.now = new Date();
    }, 1);

    this.user = {
      name: '',
      email: '',
    };
  }

  logout() {
    this.authService.logout();
    this.toastr.info('Kijelentkeztél.');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.authService.appUser$.subscribe((appUser) => {
      this.user = appUser;
    });
  }
}
