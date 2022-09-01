<template>
  <div class="flex">
    <b-button variant="outline-primary" @click="addCard(); reloadPage();">New Board</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      cards: null,
      title: 'New Card',
      loading: true,
      errors: false
    }
  },
  methods: {
    addCard() {
      this.getEvents('http://localhost:8081/cards')
    },
    async getEvents(url) {
      axios
        .post(url, {
            title: this.title
        })
        .then(response => {
          console.log(response)
          response.status
        })
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