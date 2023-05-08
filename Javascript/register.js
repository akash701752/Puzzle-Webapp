// document.querySelector('#register').onclick = function(){
//     window.location.href='index.html';  
// }
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase , set , ref} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqDzV0DPd_1_HP3bCW6BgBLsfGsxVl6cQ",
    authDomain: "authentication-app-9fb3c.firebaseapp.com",
    databaseURL: "https://authentication-app-9fb3c-default-rtdb.firebaseio.com",
    projectId: "authentication-app-9fb3c",
    storageBucket: "authentication-app-9fb3c.appspot.com",
    messagingSenderId: "273612730542",
    appId: "1:273612730542:web:27cc8c209b465cd5983d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app) ;
const auth = getAuth(app);

// let res = document.querySelector('#register');
//let res = document.getElementById('register');
//console.log(res);
const btn = document.getElementById('register');
btn.addEventListener('click',(e)=>{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value ;
    var password = document.getElementById('password').value ;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const dt = new Date();
            set(ref(database, 'users/' + user.uid),{
                username: name,
                email: email,
                last_login: dt
            })
            alert('!! User Created !!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // 
            alert(errorMessage);
        });

        //upload credentials
        
});   

