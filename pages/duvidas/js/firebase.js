// js/firebase.js

// Substitua os valores abaixo pelas suas configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBjEZQbRNl-FJK1COJPzmeMXu9UVjm6VVU",
  authDomain: "data-form-duvidas.firebaseapp.com",
  projectId: "data-form-duvidas",
  storageBucket: "data-form-duvidas.firebasestorage.app",
  messagingSenderId: "833624000646",
  appId: "1:833624000646:web:35d66723043a943263e907"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Exporta o Firestore e Auth
window.db = firebase.firestore();
window.auth = firebase.auth();
