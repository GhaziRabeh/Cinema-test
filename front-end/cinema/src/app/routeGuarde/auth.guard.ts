import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../UserService/user-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserServiceService);  // Injection du service AuthService
  const router = inject(Router);  

  
  // Vérification si l'utilisateur est authentifié
  if (authService.isLoggedIn()) {
    return true;
  }


  router.navigate(['/login']);  
  return false;  
};
 