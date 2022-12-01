import{ auth } from "./firebase.js";

const ui = new firebaseui.auth.AuthUI(auth);
const uiConfig = {
  signInSuccessWithAuthResult:(authResult, redirectUrl) =>{
    return true;
  },
  uiShown: () =>{
    document.getElementById("loader").style.display = "none";
  },
  sighnInFrow:"popup",
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],

  tosUrl: '<your-tos-url>',
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};
ui.start('#firebaseui-auth-container', uiConfig);
