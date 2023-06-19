import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  items$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.users$ = this.firestore.collection('usuarios').valueChanges();
    this.items$ = this.firestore.collection('citas').valueChanges();
  }


  addCita(user: any) {
    // Se utiliza la api de firebase a traves de dos fucniones, una seria el idicar en que coleccion 
    // quiero agregar el registro (collection) y la otra seria la funcion en la que le mando mi objeto y quiero 
    // que se registre en la bd (add)
    this.firestore.collection('citas').add({ data: user });
  }

  addUser(user: any) {
    this.firestore.collection('usuarios').add({ data: user });
  }

  getCita() {
    return this.items$;
  }

  getUsuario() {
    return this.users$;
  }

  eliminarCita(nombreUsuario: any): void {
    this.firestore.doc('citas/' + nombreUsuario).delete()
      .then(() => {
        console.log('Dato ELIMINADO exitosamente');
      })
      .catch((error) => {
        console.error('Error al ELIMINAR el dato:', error);
      });
  }

  getUsersAuth() {
    return this.users$;
  }
}
