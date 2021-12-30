<template>
  <div id="app" class="h-screen">
    <router-view></router-view>
  </div>
</template>

<script>

export default{
}
</script>

<style>
@font-face {
    font-family: "Pokemon GB";
    src: url("./assets/font/PokemonClassic.ttf?") format("truetype");
    font-weight: normal;
    font-style: normal;
}
*{
    font-family:'Pokemon GB' !important;
}

#app {
  background: linear-gradient(120deg, #effafd 50%, #fb6348 50%);
  margin: 0;
  padding: 0;
}
</style>
