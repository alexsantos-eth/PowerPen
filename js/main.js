if('serviceWorker' in navigator){

  navigator.serviceWorker.register("./sw.js")

  .then(e => console.log(e))
 .catch(er => console.log(er)) ;
}
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    addBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted Pp prompt');
        } else {
          console.log('User dismissed the Pp prompt');
        }
        deferredPrompt = null;
      });
  });
});


var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems, {preventScrolling:true}); 


Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function notifyMe(msg) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }
  
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(msg);
  }
  
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(msg);
      }
    });
  }
  
  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
notifyMe("hola");