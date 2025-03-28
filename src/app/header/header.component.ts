import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, AvatarModule, MenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  profileItems: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Affiliate', icon: 'pi pi-dollar', routerLink: '/' },
      { label: 'Premium', icon: 'pi pi-credit-card', routerLink: '/' },
      { label: 'Upload', icon: 'pi pi-upload', routerLink: '/' }
    ];

    this.profileItems = [
      { label: 'Register', icon: 'pi pi-user-plus', routerLink: '/register' },
      { label: 'Login', icon: 'pi pi-sign-in', routerLink: '/login' }
    ];
  }
}
