import { defineStore } from "pinia";
import axios from "axios";

export const useRepoStore = defineStore( "repo",{

  state: () => ({
    repos: [],
    isLoading: true,
    hasError: false,
    currentPage: 1,
    perPage: 4,
    repo: {},
  }),
  actions: {
    async fetchRepos() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/delighteee/repos",
          {
            headers: {
              Accept: "application/vnd.github.mercy-preview+json",
            },
          }
        );
        this.repos = await response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.hasError = true;
        this.isLoading = false;
      }
    },
    previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
  
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },

        setPage(page) {
        if (page > 0 && page <= this.totalPages) {
          this.currentPage = page;
        }},

    async fetchRepo(id) { 
        this.repo = this.repos.find((repo) => repo.id == id);
    },

     
  },

  getters: {
    filterRepos() {
        const indexOfLastRepo = this.currentPage * this.perPage;
        const indexOfFirstRepo = indexOfLastRepo - this.perPage;
        return this.repos.slice(indexOfFirstRepo, indexOfLastRepo);
      },
      totalPages() {
        return Math.ceil(this.repos.length / this.perPage);
      },
    }
});
