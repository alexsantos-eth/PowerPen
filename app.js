//COMPONENTS
Vue.component("news-feed",{
  props:['title', 'desc', 'img'], 
  template:'<div class="card"><div class="card-image waves-effect waves-block waves-light"> <img class="activator" v-bind:src=img> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">{{ title }}</span><i class="material-icons right moreBtn">more_vert</i><p><a href="#!" class="deep-purple-text"><i class="material-icons">arrow_forward</i>VER NOTICIA</a><a href="#!" class="deep-purple-text"><i class="material-icons ">share</i>COMPARTIR</a></p> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">{{ title }}</span><i class="material-icons right closeBtn">close</i><p>{{ desc }}</p> </div> </div> ' 
} 
)

Vue.component("note", {
  props:["name", "desc", "img", "total"], 
  template:'<div class="col s12"><div class="card horizontal"> <div class="card-image"> <img v-bind:src=img> </div> <div class="card-stacked"> <div class="card-content"> <h6>{{ name }}</h6> <span>{{ desc }}</span><p>({{ total }} fotos)</p></div> <div class="card-action waves-effect"> <a href="#!" class="deep-purple-text"><i class="material-icons">file_download</i>Descargar</a> </div> </div> </div> </div>'
})

Vue.component("class", {
  props:["name", "desc", "not"], 
  template:' <div class="card"><span data-badge-caption="nuevos" class="new badge blue">{{ not }}</span><div class="card-content"><h5 class="black-text bold" >{{ name }}</h5> <h6>{{ desc }}</h6></div><div class="card-action"> <a href="#!" class="deep-purple-text"><i class="material-icons">filter_none</i>Ver archivos</a> <a href="#!" class="deep-purple-text"><i class="material-icons">share</i>Compartir</a></div> </div>'
})
//VUE INSTANCE 
new Vue({el : '#content'})
