import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }
  public async canActivate(): Promise<boolean> {
    const user = await this.authService.isAuthenticated();

    if (user) {
      this.router.navigate(['/admin']);
      return false;
    }

    return true;
  }
}
