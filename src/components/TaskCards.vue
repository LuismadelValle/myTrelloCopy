<template>
  <div class="col-sm-2">
    <b-card-group deck>
      <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
        <b-card-text>
          Task goes here
        </b-card-text>
        <template #footer>
          <small class="text-muted">Updated (time of change)</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>