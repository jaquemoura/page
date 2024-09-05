<template>
  <section class="contato js-scroll" id="Contato">
    <h2 class="portfolio__t1">Contatos</h2>
    <div class="contato__icons">
      <div class="contato__box" v-for="(item, i) in contatos" :key="i">
        <a :href="item.link" target="_blank" class="contato__link">
          <div class="contato__img">
            <img :src="getImgUrl(item.icone)" alt="">
          </div>
          <span class="contato__title">{{ item.rotulo }}</span>
          <span class="contato__text">{{ item.info }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import dados from './data/contatos.js'

export default {
  name: 'contatos',
  computed: {
    contatos(){
      return dados.contatos;
    },
  },
  methods: {
    getImgUrl(svg) {
      return require('../assets/svg/'+svg)
    }
  }
}
</script>

<style>
/* contato */
.contato{
  padding-bottom: 300px;
}
.contato__icons{
  display: flex;
  justify-content: center;
  grid-gap: 60px;
  flex-wrap: wrap;
}
.contato__box{
  transition: 0.2s;
}
.contato__box:hover{
  transform: scale(1.2);
}
.contato__link{
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1f2937;
}
.contato__img{
  width: 62px;
  height: 62px;
  padding: 15px;
  border-radius: 50%;
  background: #F2F2F2;
  display: flex;
  justify-content: center;
}
.contato__title{
  display: block;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0 10px;
}
</style>
