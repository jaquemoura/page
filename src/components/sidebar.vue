<template>
  <div class="sidebar">
    <div class="sidebar__conteudo">
      <div class="icone">
        <img src="../assets/img/icone.png" alt="">
      </div>

      <nav class="menu">
        <ul class="menu__lista">
          <li class="menu__item" v-for="(item, i) in menu" :key="i">
            <a :href="`#${item.name}`" class="menu__link" @click="scrollToSection()">{{item.name}}</a>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>
<script>
export default {
  name: 'sidebar',
  props: ['fundoEscuro'],
  data(){
    return {
      menu: [
        { name: "Sobre"},
        { name: "Projetos"},
        { name: "Contato"}
      ]
    }
  },
  methods: {
    scrollToSection(){
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      this.dark = false;
      this.$emit("update:fundoEscuro", this.dark)

      const sidebar = document.querySelector('.sidebar');

      sidebar.classList.toggle('ativo');
    }
  }
}
</script>
<style>
@media(max-width: 1023px){
 .sidebar{
    transform: translateX(-100%);
    transition: 0.9s;
    position: fixed;
    height: 636px;
    z-index: 9;
  }
  .sidebar.ativo{
    transform: translateX(0%);
  }
  
  .sidebar__conteudo{
    /* position: relative; */
    background: #F2F2F2;
  }
  .icone img{
    width: 100px;
    height: 100px;
    margin: 20px 76px 24px;
  }
}

.sidebar{
  max-width: 304px;
  width: 100%;
  background: #F2F2F2;
}
.sidebar__conteudo{
  position: fixed;
}
.icone {
  display: flex;
  justify-content: center;
}

.menu__lista{
  padding: 8px;
}
.menu__item{
  padding: 12px 16px;
}
.menu__item:hover{
  background: #DCDDDF;
  border-radius: 5px;
  
}
.menu__link{
  text-decoration: none;
  cursor: pointer;
  color: #1f2937;
}

@media(min-width: 1024px){
  .sidebar{
    max-height: 100%;
  }
  .icone img{
    width: 136px;
    height: 136px;
    margin: 20px 76px 24px;
  }
}
</style>
