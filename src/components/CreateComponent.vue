<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1>Create</h1>
      <form @submit.prevent="handleSubmitForm" >
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
          <button type="submit" class="btn btn-success">Create</button>
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
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/users";

      axios.post(apiURL, this.user).then(() => {
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
