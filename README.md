## install firbase and angularfire
$npm install @angular/fire firebase --save (https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)

## sign up, log in and log out methods
use:
+ AngularFireAuth.auth.createUserWithEmailAndPassword() to sign up new account.
+ AngularFireAuth.auth.signInWithEmailAndPassword() to log in.
+ AngularFireAuth.auth.signOut() to log out.