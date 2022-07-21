<template>
  <div class="fluid">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <div class="row">
          <b-navbar-nav class="ml-auto">
            <!-- Right aligned nav items -->
            <b-nav-form>
              <div class="container">
                <div class="row">
                  <b-form-input size="sm" class="mr-sm-2 col-sm" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0 col-sm-3" type="submit">Search</b-button>
                </div>
              </div>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default{
  methods: {
    // homePage() {
    //   this.$router.push('/')
    // }
  }
}
</script>