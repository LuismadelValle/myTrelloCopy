<template>
  <div>
    <b-nav id="sideBar" vertical class="w-25" v-model="collapsed">
      <b-collapse id="collapse">
        <b-nav-item>Templates</b-nav-item>
        <b-nav-item>Options</b-nav-item>
      </b-collapse>
      <b-button v-b-toggle.collapse variant="outline-primary" @click="toggleText">{{ text }}</b-button>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      collapsed: true,
      text: '>>'
    }
  },
  methods: {
    toggleText() {
      if (this.collapsed = !this.collapsed) {
        this.text = '>>';
      } else {
        this.text = 'Hide';
      }
    }
  }
}
</script>

<style>
#sideBar {
  text-align: left !important;
  font-size: 14px;
}
</style>