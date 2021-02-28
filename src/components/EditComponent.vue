<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1>Edit</h1>
      <form @submit.prevent="handleUpdateForm" >
        <div class="form-group">
          <label for="">Name</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            v-model="user.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="">Email</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            v-model="user.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="">Phone</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            v-model="user.phone"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-warning">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/users/${this.$route.params.id}/edit`;
    axios
      .get(apiURL)
      .then((res) => {
        this.user = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/users/${this.$route.params.id}`;

      axios.put(apiURL, this.user).then(() => {
        this.$router.push("/view");
        this.user = {
          name: "",
          email: "",
          phone: "",
        };
      }).catch(error => {
        console.log(error);
      });
    },
  },
};
</script>

<style></style>
