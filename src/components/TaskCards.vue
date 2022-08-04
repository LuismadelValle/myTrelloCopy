<template>
  <div class="col-sm-2">
    <b-card-group deck>
      <b-card v-for="task in tasks" :key="task.task_id" img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image" img-top>
        <b-card-text>
          {{ task.task_description }}
        </b-card-text>
        <template #footer>
          <small class="text-muted">Updated {{ task.task_update }}</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import taskDefaults from "@/assets/task.json"

export default {
  data() {
    return {
      tasks: taskDefaults
    }    
  }
}
</script>