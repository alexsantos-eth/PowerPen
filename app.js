//C OMPONENTS
Vue.component("news-feed",{
  props:['title', 'link', 'img', 'cache' ], 
  template:'<div class="card  feed hoverable" ><div class="card-image waves-effect waves-block waves-light"><span class="material-icons white  shareCircle" v-bind:data-link=link  v-bind:data-text=title>share</span><img class="activator" v-bind:src=cache> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">{{ title.substr(0,Math.random() * 10 + 50 ) }}...</span><i class="material-icons right moreBtn">more_vert</i><p><a download v-bind:href=img class="white-text downFeed waves-effect"><i class="material-icons ">arrow_downward</i>DESCARGAR</a><a v-bind:href=link class="blue-text"><i class="material-icons">chevron_right</i>VER NOTICIA</a></p> </div> <div class="card-reveal"><span class="card-title grey-text text-darken-4 nb">{{ title }}</span></div> </div> ' 
} 
)

Vue.component("note", {
  props:["name", "desc", "img", "total", "link" ], 
  template:'<div class="col s12 file hoverable"><div class="card horizontal"><div class="card-image"><img v-bind:src=img></div><div class="card-stacked"><div class="card-content"> <h6>{{ name }}</h6> <span>{{ desc }}</span><p>({{ total }})</p></div><div class="card-action waves-effect"><span class="material-icons shareCircle white" v-bind:data-link=link  v-bind:data-title=name v-bind:data-text=desc>share</span><a download v-bind:href=link class="white-text" ><i class="material-icons">arrow_downward</i>Descargar</a> </div> </div> </div> </div>'
})

Vue.component("file", {
  props:["name", "desc", "total", "link" ], 
  template:'<div class="col s12 hoverable dep"><div class="card horizontal"><div class="card-stacked"><div class="card-content"> <h6>{{ name }}</h6> <span>{{ desc }}</span><p>({{ total }})</p></div><div class="card-action waves-effect"><span class="material-icons shareCircle white" v-bind:data-link=link  v-bind:data-title=name v-bind:data-text=desc>share</span><a download v-bind:href=link class="white-text" ><i class="material-icons">arrow_downward</i>Descargar</a> </div> </div> </div> </div>'
})
//VUE INSTANCE 

