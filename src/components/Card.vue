<template>
  <div class="container">
    <div class="row">
      <div v-for="card in cards" :key="card.id" class="col-4">
        <b-card @dblclick="goToEdit" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
          tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text>
            {{ card.title }}
          </b-card-text>
          <b-card-text>
            {{ card.description }}
          </b-card-text>

          <div class="row">
            <div class="col">
              <b-button id="taskBtn" variant="primary" @click="goToTasks">📝 Tasks</b-button>
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
import cardsDefault from '@/assets/card.json'
import { ref } from 'vue'

export default {
  name: 'card-List',
  components: {
    AddCardButton,
    DeleteButton,
  },
  data() {
    return {
      cards: cardsDefault
    }
  },
  methods: {
    goToEdit() {
      console.log('Hello World!')
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
