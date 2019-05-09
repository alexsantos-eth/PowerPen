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

function notifyMe(msg, body) {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: body,
        badge:"./img/logoP.png",
        icon: './img/icon.png',
        actions:[
          {
            title:"Ver noticia", 
            action:"showFeed"
          }
          ], 
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      reg.showNotification(msg, options);
    });
  }
}

notifyMe("hola", "este es un mensaje de prueba");