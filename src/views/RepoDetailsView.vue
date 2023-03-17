<script setup>
import { useRoute } from "vue-router";
import { useRepoStore } from "../stores/Repo";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";


const route = useRoute();
const { repo } = storeToRefs(useRepoStore());
const { fetchRepo } = useRepoStore();


// const filteredRepos = computed(() => {
//   return repos.filter((repo) => repo.id === route.params.id);
// });
onMounted (() => {
  fetchRepo(route.params.id);

})




</script>
<template>
  <div class="repo-section" >
    <h1> <router-link to="/">←</router-link>
              Repo Details</h1>
    
      <h2 class="title">{{ repo.name }}</h2>
      <p>{{ repo.description }}</p>
      
      <div class="date">
        <p class="date">Created: {{ repo.created_at }}</p>
        <p class="date">Updated:{{ repo.updated_at }}</p>
      </div>
      <div class="footer">
        <p>Language: {{ repo.language }}</p>
      </div>
<div class="buttons">
  <button class="btn">
    <a href="https://github.com/delighteee/altschool-class-of-vue" target="blank">Fork Repo</a></button>
    <button class="btn">
    <a href="https://github.com/delighteee/altschool-class-of-vue">View in Github</a></button>
</div>
  </div>
</template>


<style>


.details{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-top: 2em;
}

.repo-section {
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: #0f0f0f;
  padding: 1em;
  border: 0.5px solid #364137;
  margin-top: 1em;
  border-radius: 8px;
}



.buttons{
  display: flex;
  justify-content: start;
  margin-top: 2em;
  padding: 16px;
  gap: 2em;
}


.btn{
  background-color: #0f0f0f;
  border: 0.5px solid #364137;
  border-radius: 8px;
  padding: 8px;
  color: #69686c;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  text-decoration: none;
}

.title{
  font-size: 24px;
  color: #fff;
  margin-top: 1em ;
  padding: 0 0em;
  
}



</style>