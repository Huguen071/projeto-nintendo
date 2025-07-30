import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { User } from '../modelos/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();
  private currentUser = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUser.asObservable();

  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn.next(true);
        this.currentUser.next({ uid: user.uid, 
          email: user.email ?? undefined,
          displayName: user.displayName ?? undefined
        });
      } else {
        this.loggedIn.next(false);
        this.currentUser.next(null);
      }
    });
  }

  async register(user: User) {
    const auth = getAuth();
    if (!user.email || !user.password || !user.displayName) {
      alert('Nome, e-mail e senha são obrigatórios.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      await updateProfile(userCredential.user, {
        displayName: user.displayName
      });
      await sendEmailVerification(userCredential.user);
      alert('Cadastro realizado com sucesso! Um e-mail de verificação foi enviado.');
      this.router.navigate(['/login']);
    } catch (error) {
      alert(`Erro no cadastro: ${error}`);
    }
  }

  async login(user: User) {
    const auth = getAuth();
    if (!user.email || !user.password) {
      alert('Email e senha são obrigatórios.');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      this.router.navigate(['/pagina-inicial']);
    } catch (error) {
      alert(`Erro no login: ${error}`);
    }
  }

  async logout() {
    const auth = getAuth();
    try {
      await signOut(auth);
      this.router.navigate(['/login']);
    } catch (error) {
      alert(`Erro ao sair: ${error}`);
    }
  }

  async sendPasswordResetEmail(email: string) {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Um e-mail para redefinição de senha foi enviado para ' + email);
    } catch (error) {
      alert(`Erro ao enviar e-mail de redefinição de senha: ${error}`);
    }
  }
}
