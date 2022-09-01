<template>
  <div class="container" @click="cancelEdit">
    <div class="row">
      <div v-for="card in cardQuery" :key="card.id" class="col-4">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
          tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text v-if="!editing" >
            <span @dblclick="goToEditTitle">
              {{ card.title }}
            </span>
          </b-card-text>
          <b-card-text v-if="editing" @keyup.esc="cancelEdit(card)">
            <input v-model="pushValueTitle">
          </b-card-text>
          <b-card-text v-if="!editing2">
            <span v-if="card.description" @dblclick="goToEdit">
              {{ card.description }}
            </span>
            <span v-else @dblclick="goToEdit">
              Enter a description
            </span>
            <b-card-text v-if="editing2" @keyup.esc="cancelEdit(card)">
              <input v-model="pushValue">
            </b-card-text>            
          </b-card-text>

          <div class="row">
            <div class="col">
              <b-button id="taskBtn" variant="primary" @click="goToTasks">📝 Tasks</b-button>
              <!-- <router-link class="btn btn-success btn-sm" id="taskBtn" variant="primary" :to="{ name: 'tasks', params: {cardID: cards.id}}">📝 Tasks</router-link> -->
            </div>
            <div class="col">
              <DeleteButton />
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <div>
      <AddCardButton />
    </div>
  </div>
</template>

<script>
import AddCardButton from '@/components/AddCardButton.vue'
import DeleteButton from '@/components/DeleteButton.vue'
import axios from 'axios'
import { ref } from 'vue'

export default {
  name: 'card-List',
  components: {
    AddCardButton,
    DeleteButton,
  },
  data() {
    return {
      cardQuery: null,
      editing: false,
      editing2: false,
      pushValueTitle: null,
      pushValue: null,
      loading: true,
      errors: false
    }
  },
  mounted() {
    axios
      .get('http://localhost:8081/cards')
      .then(response => (this.cardQuery = response.data))
      .catch(error => {
        console.log(error)
        this.errors = true
      })
      .finally(() => this.loading = false)
  },
  methods: {
    goToEditTitle() {
      this.editing = true
      
    },
    goToEdit() {
      this.editing2 = true
      
    },
    cancelEdit() {
      this.pushValueTitle = null
      this.editing = false
    },
    goToTasks() {
      this.$router.push('/tasks')
    }
  }
}
</script>

<style>
.card-item {
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: auto;
}
#taskBtn {
  display: inline-block;
  text-align: center;
  margin: auto;
}
</style>
