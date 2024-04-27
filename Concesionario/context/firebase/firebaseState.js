import React, { useReducer, useEffect } from 'react'
import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import firebase from '../../firebase'

const FirebaseStage = (props) => {
    const initialState = {
        appointment: [],
    };

    const [state, dispatch] = useReducer(FirebaseReducer, initialState)

    useEffect(() => {
        const appointmentsRef = firebase.database.collection('appointment')
        const appointmentsUnsub = appointmentsRef.onSnapshot((snapshot) => {
            const appointmentData = snapshot.docs.map((doc) => doc.data())
            console.log('appointment retrieved:', appointmentData);
            dispatch({ type: 'SET_APPOINTMENTS', payload: appointmentData })
        });

        return () => {
            appointmentsUnsub()
        };
    }, []);

    return (
        <FirebaseContext.Provider value={{ state }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseStage