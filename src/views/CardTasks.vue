<template>
  <div>
    <NavBar />
    <div v-for="card in cards" :key="card.id" class="row">
      <h3>{{ card.title }}</h3>
    </div>
    <div class="row">
      <div class="col-2">
        <p>Here goes smth</p>
      </div>
      <div class="col">
        <b-container fluid>
          <b-row>
            <TaskCards />
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import cardsDefault from '@/assets/card.json';
import TaskCards from '@/components/TaskCards.vue';

export default{
  components: {
    NavBar,
    TaskCards
  },
  data(){
    return {
      cards: cardsDefault
    }
  }
}
</script>
