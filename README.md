## DEMO
![AngularFireDemo](./src/assets/Images/angularFirebaseDemo.gif)
## install firbase and angularfire
$npm install @angular/fire firebase --save (https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)

## sign up, log in and log out methods 
use: (https://firebase.google.com/docs/auth/web/password-auth)
+ AngularFireAuth.auth.createUserWithEmailAndPassword() to sign up new account.
+ AngularFireAuth.auth.signInWithEmailAndPassword() to log in.
+ AngularFireAuth.auth.signOut() to log out.

## onLoginEmail and onSignUp method with two validation
calling AuthService using validateForm()
after AuthService throws an error using firebase.Thenable.catch()