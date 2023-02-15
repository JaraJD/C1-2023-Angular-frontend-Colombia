import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/main/services/auth/auth.service';

@Component({
  selector: 'sofka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor(private readonly authServive: AuthService) {
  }

  logout(): void{
    this.authServive.SignOut();
  }
}
