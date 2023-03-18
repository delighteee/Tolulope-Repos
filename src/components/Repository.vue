

<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import { useRepoStore } from "../stores/Repo";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const { filterRepos, totalPages, currentPage } = storeToRefs(useRepoStore());
const { fetchRepos, nextPage, previousPage, setPage } = useRepoStore();

onMounted(() => {
  fetchRepos();
});
</script>


<template>
  <WelcomeItem>
    <div class="card" v-for="repo in filterRepos" v-bind:key="repo.id">
      <router-link :to="{ name: 'repo', params: { id: repo.id } }"
            >
      <div class="main-section">
        <div class="title-card">
          <img src="@/assets/codeicon.png" width="40" height="40" alt="avatar" />
          <h2>{{ repo.name }}</h2>
        </div>
       
        <p>{{ repo.description }}</p>
        <div class="date">
          <p class="date">Created: {{ repo.created_at }}</p>
          <p class="date">Updated:{{ repo.updated_at }}</p>
        </div>
      </div>
      </router-link
          >
    </div>
  </WelcomeItem>
  <div class="pagination">
    <a @click.prevent="previousPage">Previous</a>
    <ul>
      <li v-for="page in totalPages" :key="page">
        <a
          @click.prevent="setPage(page)"
          :class="{ active: page === currentPage }"
          >{{ page }}</a
        >
      </li>
    </ul>
    <a @click.prevent="nextPage">Next</a>
  </div>
</template>

<style>



.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
  align-items: center;
}

.pagination ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.pagination ul li {
  margin: 0 5px;
}
.pagination ul li a {
  color: #dadada;
  text-decoration: none;
  padding: 5px 10px;
  border: 0.5px solid #4e504f;
  border-radius: 5px;
}

.pagination ul li a.active {
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
  border: 1px solid #b7f1b5;
}

.pagination ul li a:hover {
  background-color: #047725;
}

.pagination a {
  color: #5a5858;
  text-decoration: none;
  padding: 5px 10px;
  border: 0.5px solid #626161;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}

.pagination a:disabled {
  color: #ccc;
  border: 1px solid #ccc;
  cursor: not-allowed;
}

@media (min-width: 1024px) {
  .top{
    margin-top: 8em;
  }

}

</style>
