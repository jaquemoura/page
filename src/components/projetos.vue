<template>
  <section class="projetos js-scroll" id="Projetos">
    <h2 class="portfolio__t1">Projetos</h2>
    <div class="projeto__item" v-for="(item, i) in projetos" :key="i">
    <div class="projetos__video-wrapper">
      <div class="projetos__video">
        <video :src="getVideoUrl(item.video)"
        controls
        >
        </video>
      </div>
    </div>
    
    <h3 class="projetos__t2">{{ item.name }}</h3>
    <p class="projetos__t3" v-html="item.descricao"></p>
    <div class="projetos__links">
      <a v-if="item.site" :href="item.site" target="_blank">Site</a>
      <a :href="item.repositorio" target="_blank">Repositório</a>
    </div>
  </div>
  </section>
</template>

<script>
import dados from './data/projetos.js'

export default {
  name: 'Projetos',
  computed: {
    projetos(){
      return dados.projetos;
    },
  },
  methods: {
    getVideoUrl(video) {
      return require('./../assets/video/'+video)
    }
  }
}
</script>

<style>
.projetos{
  /* text-align: center; */
  padding: 60px 0;
}
.projeto__item{
  margin-bottom: 60px;
}
.projetos__video-wrapper{
  max-width: 770px;
}
.projetos__video{
  width: 100%;
  padding-top: 59.75%;
  position: relative;
}
.projetos__video video{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.projetos__t2{
  margin: 15px 0 5px;
}
.projetos__links{
  display: flex;
  grid-gap: 17px;
  margin-top: 30px;
}
.projetos__links a{
  display: block;
  padding: 10px 40px;
  text-decoration: none;
  background: #DCDDDF;
  color: #1f2937;
}
</style>
