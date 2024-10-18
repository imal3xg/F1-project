import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Inicializamos BehaviorSubject con un valor inicial (por ejemplo, false para no autenticado)
  private _authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // Observable que otros componentes pueden suscribirse para saber si el usuario está autenticado
  public authenticated$: Observable<boolean> = this._authenticated.asObservable();

  constructor() { }
  
  login(){}
  logout(){}
}
