import app from 'firebase/compat/app';
import firebaseConfig from './config';
import 'firebase/compat/firestore';

class Firebase {
  constructor() {
    console.log("Constructor de Firebase ejecutándose...");
    console.log("Cantidad de apps antes de la inicialización:", app.apps.length);

    if (!app.apps.length) {
      console.log("Inicializando Firebase...");
      app.initializeApp(firebaseConfig);
      console.log("¡Firebase inicializado correctamente!");
    } else {
      console.log("Firebase ya estaba inicializado.");
    }

    console.log("Cantidad de apps después de la inicialización:", app.apps.length);

    this.database = app.firestore();
  }
}

const firebase = new Firebase();
export default firebase;

