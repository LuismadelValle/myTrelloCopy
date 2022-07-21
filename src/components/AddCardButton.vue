<template>
  <div class="flex">
    <b-button variant="outline-primary" @click="addCard">New Board</b-button>
  </div>
</template>

<script>
import cardsDefault from '@/assets/card.json'

export default {
  data() {
    return {
      cards: cardsDefault,
      newCard: 'Card',
      idForCard: 4,
      descriptionNew: 'Double click to edit'
    }
  },
  methods: {
    addCard() {
      this.cards.push({
        id: this.idForCard,
        title: this.newCard,
        description: this.descriptionNew
      });

      this.newCard = 'Card'
      this.idForCard++
      this.descriptionNew = 'Double click to edit'
    }
  }
}
</script>