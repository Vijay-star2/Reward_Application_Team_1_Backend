export interface CesUser {
  id?: number;
  username: string;
  role: 'ADMIN_CES' | 'CES';
  active: boolean;
}
