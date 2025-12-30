import { CanActivateFn } from '@angular/router';

export const roleGuard = (role: string): CanActivateFn => {
  return () => localStorage.getItem('role') === role;
};
