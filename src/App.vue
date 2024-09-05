<template>
  <div id="app">
    <div class="fundoEscuro" v-if="fundoEscuro" @click="closeFundo"></div>
    <div class="menu__btn-wrapper">
      <div class="menu__btn" @click="openMenu()">
        <span></span>
      </div> 
    </div>
    <main class="columns js-scroll" id="Sobre">
      <sidebar  @update:fundoEscuro = "fundoEscuro = $event" />
      <div class="columns__right">
        <section>
          <div class="title">
            <h1 class="title__t1">Olá, seja bem-vindo(a) 👋 </h1>
            <span class="title__t2">Eu sou Jaqueline Moura :)</span>
            <p class="title__t3">Desenvolvedora Front-End</p>
            <p class="text">
              Sou formada em Análise e desenvolvimento de sistemas e já atuei na área de e-commerce.
              Possuo experiência em Vue js, Vuex, Javascript, consumo de APIs REST.
              Nessa página você vai encontrar meus projetos pessoais, minhas habilidades e minhas informações de contato.
            </p>
          </div>
        </section>

        <projetos />

        <contatos />

      </div>
    </main>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
import projetos from './components/projetos.vue'
import contatos from './components/contatos.vue'

export default {
  name: 'App',
  components: {
    sidebar,
    projetos,
    contatos
  },
  data(){
    return {
      fundoEscuro: false
    }
  },
  methods: {
    openMenu(){
      const sidebar = document.querySelector('.sidebar');

      sidebar.classList.toggle('ativo');
      this.fundoEscuro = true;
    },
    closeFundo(){
      const sidebar = document.querySelector('.sidebar');

      sidebar.classList.toggle('ativo');
      this.fundoEscuro = false;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
   
* {
  margin: 0;
  padding: 0;
}
/* body{
  font-family: "Roboto", sans-serif;
} */
#app {
  font-family: "Roboto", sans-serif;
  color: #1f2937;
}
.fundoEscuro{
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);  
}
.columns{
  display: flex;
}
@media(max-width: 1023px){
  .columns__right{
    margin:  100px 24px 24px 24px;
  }
  .title__t2{
    font-size: 36px;
  }
  .title__t3{
    font-size: 22px;
  }
  .text{
    font-size: 16px;
  }
  .menu__btn-wrapper{
    width: 100%;
    background: #fff;
    position: fixed;
    height: 64px;
    z-index: 7;
  }
  .menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 20px;
    
    width: 26px;
    height: 26px;
    
    cursor: pointer;
    z-index: 1;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    
    width: 100%;
    height: 2px;
    
    background-color: #000;
    
    transition-duration: .25s;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }
  .portfolio__t1{
    font-size: 28px;
    margin-bottom: 30px;
  }
  .projetos__t2{
    font-size: 21px;
  }
}
.portfolio__t1{
  
  text-align: center;
}

.title__t1{
  font-size: 20px;
  line-height: 1.4;
  font-weight: 400;
}
.title__t2{
  line-height: 1;
  font-weight: 700;
}
.title__t3{
  line-height: 1.2;
  font-weight: 700;
  padding: 12px 0;
}
.text{
  font-size: 1.5;
}

.slide{
  max-width: 900px;
}

@media(min-width: 1024px){
  .columns__right{
    margin: 30px;
  }
  .title__t2{
    font-size: 48px;
  }
  .title__t3{
    font-size: 30px;
  }
  .text{
    font-size: 18px;
  }
  .portfolio__t1{
    font-size: 36px;
    margin-bottom: 60px;
  }
  .projetos__t2{
    font-size: 24px;
  }
  
}
@media(min-width: 1200px){
  .columns__right{
    max-width: 800px;
    margin-top: 95px;
    margin-left: 133px;
  }
}
</style>
