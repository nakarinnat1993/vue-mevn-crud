<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <h1>List</h1>
      <table class="table table-bordered table-striped">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <router-link :to="'/edit/'+user._id" class="btn btn-warning">Edit</router-link>
              <button @click.prevent="deleteUser(user._id)" class="btn btn-danger">Delete</button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.users = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteUser(id) {
      let apiURL = `http://localhost:4000/api/users/${id}`;
      let indexOfArrayItem = this.users.findIndex((i) => i._id === id);
      if (window.confirm("Do you want to delete ?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.users.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style></style>
