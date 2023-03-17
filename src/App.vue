<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    <img alt="Tolulope image" class="hero-img" src="@/assets/image.png" width="400" height="380" />

    <div class="wrapper">
      <HelloWorld msg="Tolulope's Github Repos" />

     
    </div>
  </header>

  <RouterView />
 
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.hero-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4%;
  margin-bottom: 2em;
}
  

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

 .hero-img{
  float: left;
  margin: 1em 0;
 }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
