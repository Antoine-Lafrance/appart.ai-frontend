import { Component, Input, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from '../../../../../services/auth/authentication.service';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss'
})
export class AuthButtonComponent implements OnInit {

  @Input() message: string = 'Se connecter';
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private authenticateService: AuthenticationService) {}
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.auth.idTokenClaims$.subscribe(claims => {
          if(claims){
          const token = claims.__raw;
          this.authenticateService.setToken(token);
          }
        });
      }
    });
    this.auth.user$.subscribe(user => {
      if (user){
        this.authenticateService.user = user;
      }
    });
  }
}