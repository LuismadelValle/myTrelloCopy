<template>
  <div>
    <b-button id="deleteBtn" variant="outline-danger" @click="deleteCard(); reloadPage();">🗑️ Delete</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      cards: null,
      id: null,
      loading: true,
      errors: false
    }
  },
  methods: {
    deleteCard() {
      this.getEvents('http://localhost:8081/cards')
    },
    async getEvents(url) {
      axios
        .delete(url, {
          cards: this.id
        })
        .then(response => response.status)
        .catch(error => {
          console.log(error)
          this.errors = true
        })
        .finally(() => this.loading = false)
    },
    reloadPage() {
      window.location.reload();
    }
  }
}
</script>

<style>
#deleteBtn {
  display: inline-block;
  text-align: center;
  margin: auto;
}
</style>