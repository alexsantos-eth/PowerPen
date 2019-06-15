if('serviceWorker' in navigator){
  navigator.serviceWorker.register("./sw.js")
  .then(e => console.log(e))
  .catch(er => console.log(er));
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

window.addEventListener('offline', () =>   M.toast({html: 'Sin conexión a Internet!'}));

let generalSide = false;
var elems = document.querySelectorAll('.sidenav');
var sideNav = M.Sidenav.init(elems[0], {preventScrolling:true, onOpenStart:()=>{
  generalSide = true;
}, onCloseStart:() =>{
  if(toggleSearch){
    setTimeout(() =>{
      searchBtn.click();
    }, 100)
  }
  generalSide = false;
}}); 

if('Notification' in navigator){
Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});} 

function notifyMe(msg, body) {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: body,
        badge:"./img/logoN.png",
        icon: './img/iconN.png',
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
var searchBtn = document.getElementById("searchBtn");
var title = document.querySelector(".brand-logo");
var menuBtn = document.querySelector(".menuIcon");
var imgLogo = document.querySelector(".brand-logo > img");
var toggleSearch =false;
let l = title.style.left;
let searchInput = document.getElementById("searchInput");

searchInput.style.width="0";
searchBtn.addEventListener("click", () =>{
  if(!toggleSearch){
    title.style.left="120px";
    title.childNodes[2].style.opacity="0";
    searchInput.style.display = "block";
    setTimeout(()=>{
      searchInput.focus();
      searchInput.style.opacity="1";
      searchInput.style.width="50%";
    }, 10)
    toggleSearch = !toggleSearch;
  }else{
    searchInput.style.opacity="0";
    searchInput.style.width="0";
    setTimeout(()=>{
      searchInput.style.display="none";
    } , 500);
    title.style.left=l;
    title.childNodes[2].style.opacity="1";
    toggleSearch = !toggleSearch;
  }
})

searchInput.addEventListener("focusout",()=>{

  setTimeout(()=>{
    if(toggleSearch && !generalSide){
      searchBtn.click();
    }
  }, 10)
})

//animations

let btnFloating = document.querySelector(".btn-floating");
let form = document.getElementById("loginForm");
let shadow = document.getElementById("shadow");
//let preloaders= document.getElementById("preloaders");
let nav = document.getElementById("navbar");
let loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", ()=>{
  fadeIn();
})
btnFloating.addEventListener("click", ()=>{
  fadeIn();
})
function fadeIn(){
  shadow.style.display="block"; 
  form.style.display="block"; 
 setTimeout(() =>{
 	form.style.opacity=1;
     shadow.style.opacity=1;
 }, 10);
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
function fadeOut(){
  form.style.opacity=0;
  shadow.style.opacity ="0";
  setTimeout(() =>{
    shadow.style.display =  "none" ; 
    form.style.display =  "none" ;
  }, 300);
}

setTimeout(()=>{
  searchBtn.style.opacity="1";
  searchInput.style.display="block";
  menuBtn.style.opacity="1";
}, 300)
setTimeout(() =>{
    title.style.transition="all 0.3s ease-in"
    title.style.opacity="1";

  },600)

function fixSpace() {
	let pre = document.querySelectorAll(".nb");
for(let i = 0 ;i<pre.length;i++){
	pre[i].innerHTML = pre[i].innerHTML.replace(/&amp;nbsp;/gi, " ").replaceAll("&lt;br /&gt;", "<br />").replaceAll("<br/>", " ");
	let link = pre[i].innerHTML.substr(pre[i].innerHTML.indexOf("htt"));
	if(link.length > 5){
	pre[i].innerHTML = pre[i].innerHTML.substr(0, pre[i].innerHTML.indexOf("htt")) + `<br /><br /><a href="${link}" class="truncate">${link}</a>`;
	}
	}
} 

/*setTimeout(() =>{
    fixSpace();
  },2000)*/
  
shadow.addEventListener("click", () =>{
	fadeOut() ;
	
	}) ;
//EventSource

let logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click",()=>{
  swal({
  title: "¿Deseas salir? ",
  text: "Puedes cambiar de cuenta o seguir visualizando el contenido como invitado.",
 
  buttons: ["Cancelar", "Si"],
  dangerMode: true,
})
.then((e) => {
  if (e) {
    swal({
      icon: "success",
      title :" ", 
      iconColor:"#7E57C2", 
      buttons:false
    }) .then((e) =>{
      logout();
      })
    setTimeout(()=>{
      logout();
    }, 2000)
  }
})
}) 

function logout(){
  window.location = "./";
}
//eruda.init();


