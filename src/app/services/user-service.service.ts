import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, queueScheduler, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  items$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.users$ = this.firestore.collection('usuarios').valueChanges();
    this.items$ = this.firestore.collection('citas').valueChanges();
  }

  async addCita(cita: any): Promise<boolean> {
    // Se utiliza la api de firebase a traves de dos fucniones, una seria el idicar en que coleccion
    // quiero agregar el registro (collection) y la otra seria la funcion en la que le mando mi objeto y quiero
    // que se registre en la bd (add)
    //this.firestore.collection('citas').add({ data: cita });
    try {
      const querySnapshot = await this.firestore
        .collection('citas')
        .ref.where('data.arriveDate', '==', cita.arriveDate)
        .where('data.casaReservada.title', '==', cita.casaReservada.title)
        .get();

      if (querySnapshot.empty) {
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            // Obtener el ID del usuario logueado
            const userId = user.uid;
            // Guardar la cita en la colección "citas" con el ID del usuario como documento
            this.firestore
              .collection('citas')
              .add({ userId: userId, data: cita })
              .then(() => {
                console.log('Cita agregada exitosamente');
                return true;
              })
              .catch((error) => {
                console.error('Error al agregar la cita:', error);
                return false;
              });
          }
        });
      } else {
        querySnapshot.forEach((doc) => {
          console.log('Documento encontrado');
        });
        return false;
      }
    } catch (error) {
      console.error('Error al agregar la cita:', error);
      return false;
    }
    return true;
  }

  //  async addCita(cita: any) {

  //    await this.firestore
  //       .collection('citas')
  //       .ref.where('data.arriveDate', '==', cita.arriveDate)
  //       .where('data.casaReservada.title', '==', cita.casaReservada.title)
  //       .get()
  //       .then((querySnapshot) => {
  //         if (querySnapshot.empty) {
  //           this.afAuth.authState.subscribe((user) => {
  //             if (user) {
  //               // Obtener el ID del usuario logueado
  //               const userId = user.uid;
  //               // Guardar la cita en la colección "citas" con el ID del usuario como documento
  //               this.firestore
  //                 .collection('citas')
  //                 .add({ userId: userId, data: cita })
  //                 .then(() => {
  //                   console.log('Cita agregada exitosamente');
  //                   return true;
  //                 })
  //                 .catch((error) => {
  //                   console.error('Error al agregar la cita:', error);
  //                   return false;
  //                 });
  //             }
  //           });
  //         } else {
  //           querySnapshot.forEach((doc) => {
  //             console.log('Documento encontrado');
  //             return false;
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         return false;
  //       });
  //   }

  addUser(user: any) {
    this.firestore.collection('usuarios').add({ data: user });
  }

  getCita() {
    return this.items$;
  }

  getUsuario() {
    return this.users$;
  }

  getConsulta(nombre: string): Observable<any> {
    return this.firestore
      .collection<any>('citas', (ref) =>
        ref.where('data.casaReservada.title', '==', nombre)
      )
      .valueChanges();
  }

  getConsulta2(): Observable<any> {
    return this.firestore.collection<any>('usuarios').valueChanges();
  }

  getConsulta3(): Observable<any> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          // Obtener el ID del usuario logueado
          const userId = user.uid;

          // Obtener las citas del usuario logueado
          return this.firestore
            .collection<any>('citas', (ref) =>
              ref.where('userId', '==', userId)
            )
            .valueChanges();
        } else {
          // Si no hay usuario logueado, retornar un arreglo vacío
          return [];
        }
      })
    );
  }

  eliminarCita(nombreUsuario: any): void {
    this.firestore
      .doc('citas/' + nombreUsuario)
      .delete()
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
