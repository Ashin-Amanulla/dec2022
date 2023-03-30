import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isToken!: boolean

  constructor(private router: Router, private auth: BackendService) { }

  canActivate() {

    if (this.auth.getToken()) {
      return true
    }
    else{
      this.router.navigate(['/login']);
      return false
    }
  }


}
