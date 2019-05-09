//COMPONENTS
Vue.component("news-feed",{
  props:['title', 'desc', 'img'], 
  template:'<div class="card"><div class="card-image waves-effect waves-block waves-light"> <img class="activator" v-bind:src=img> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">{{ title }}</span><i class="material-icons right moreBtn">more_vert</i><p><a href="#"><i class="material-icons">arrow_forward</i>Ver noticia </a><a href="#"><i class="material-icons ">share</i>Compartir</a></p> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">{{ title }}</span><i class="material-icons right closeBtn">close</i><p>{{ desc }}</p> </div> </div> ' 
} 
)
//VUE INSTANCE 
new Vue({el : '#content'})
