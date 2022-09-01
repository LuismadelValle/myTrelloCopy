<template>
  <div class="col-sm-2">
    <b-card-group deck>
      <b-card v-for="task in tasks" :key="task.id" img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image" img-top>
        <b-card-text>
          {{ task.title }}
        </b-card-text>
        <b-card-text>
          {{ task.description }}
        </b-card-text>
        <template #footer>
          <small class="text-muted">Updated {{ task.updatedOn }}</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  data() {
    return {
      tasks: null,
      loading: true,
      errors: false
    }    
  },
  mounted() {
    axios
      .get('http://localhost:8081/tasks')
      .then(response => this.tasks = response.data)
      .catch(error => {
        console.log(error)
        this.errors = true
      })
      .finally(() => this.loading = false)
  }
}
</script>