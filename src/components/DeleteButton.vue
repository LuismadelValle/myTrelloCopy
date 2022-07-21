<template>
  <div>
    <b-button id="deleteBtn" variant="outline-danger" @click="deleteCard(index)">🗑️ Delete</b-button>
  </div>
</template>

<script>
import cardsDefault from '@/assets/card.json'

export default {
  data() {
    return {
      cards: cardsDefault,
    }
  },
  methods: {
    deleteCard(index) {
      this.cards.splice(index, 1);
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