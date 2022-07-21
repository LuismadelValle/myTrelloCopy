<template>
  <div class="flex">
    <NavBar />
    <b-container fluid>
      <b-row class="my-2 mr-0">
        <b-col cols="1">
          <SideBar />
        </b-col>
        <b-col fluid>
          <b-container fluid>
            <b-row>
              <Card />
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import Card from '@/components/Card.vue'


@Component({
  components: {
    NavBar,
    SideBar,
    Card,
  },
})
export default class HomeView extends Vue {}
</script>
