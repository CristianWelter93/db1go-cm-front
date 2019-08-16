<template>
  <div>
    <h1>Página não encontrada</h1>
    <h2>A página que você tentou acessar não existe.</h2>
    <router-link class="link" to="/">
      <v-btn text>Retornar para Home</v-btn>
    </router-link>
  </div>
</template>
<style lang="sass" scoped>
h1
    margin-top: 30px
    margin-bottom: 30px
    padding-left: 30px
h2
    margin-top: 15px
    margin-bottom: 15px
    padding-left: 30px
.link
    padding-left: 90px

</style>