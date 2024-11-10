<template>
  <nav
    class="h-[50px] bg-pink-500 mb-6flex flex-row justify-center items-center px-2"
  >
    <ul class="h-full flex flex-row text-white text-sm">
      <li class="p-2 h-full w-1/3 cursor-pointer flex items-center">
        <img src="../assets/icones/IconeHome.svg" class="p-1" />Home
      </li>
      <li class="h-full w-1/3 cursor-pointer flex items-center">
        <img src="../assets/icones/IconeSerie.svg" class="p-1" />Series
      </li>
      <li class="h-full w-1/3 cursor-pointer flex items-center">
        <img src="../assets/icones/IconeBuscar.svg " class="p-1" />
        Buscar
      </li>
      <li class="h-full w-1/3 cursor-pointer flex items-center">
        <img src="../assets/icones/IconeLogin.svg " class="p-1" />
        Login
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppMenu",
};
</script>

<style scoped>
ul li {
  transition: all ease 0.2s;
}

&:hover {
  background-color: honeydew;
}
</style>
