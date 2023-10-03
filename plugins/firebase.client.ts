import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyC0bJ9mKaR_K_J5unyocbrvj3oMYkBvtNE",
        authDomain: "portfolio-panel-f5ad2.firebaseapp.com",
        databaseURL: "https://portfolio-panel-f5ad2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "portfolio-panel-f5ad2",
        storageBucket: "portfolio-panel-f5ad2.appspot.com",
        messagingSenderId: "321526491182",
        appId: "1:321526491182:web:ac9b3c1f7a9c597b61d7bf"
    };

    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})