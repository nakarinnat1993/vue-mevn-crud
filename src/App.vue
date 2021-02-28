<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
    <div class="container">
      <router-link to="/" class="navbar-brand flot-left">MEVN Stack CRUD</router-link>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link pl-3">Create</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/view" class="nav-link pl-3">View</router-link>
        </li>

      </ul>

    </div>

  </nav>
  <div class="container mt-5"> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>