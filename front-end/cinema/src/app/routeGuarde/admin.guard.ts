import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../UserService/user-service.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserServiceService);  // Injection du service AuthService
  const router = inject(Router);  
  
const User = authService.getUser()
return !!User && User.role ==='admin'




};
