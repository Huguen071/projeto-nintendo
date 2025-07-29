export interface User {
  uid?: string; // Adicionado
  displayName?: string; // "username" renomeado para "displayName" para consistência
  email?: string;
  password?: string;
  bio?: string; // Adicionado
}