<template>
  <div>
    <div class="container text-center">
      <p class='text-h4'>Please enter password to access this page.</p>

      <div class="row">
        <div class="col-md-6 offset-md-3">
          <form v-on:submit.prevent="validateBeforeSubmit">
            <div class="form-group text-left">
        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>
            </div>
            <div class="text-danger" v-if="error"><p>Incorrect password.</p></div>
            <v-btn color="success" type="submit">Submit</v-btn>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storageHelper from 'storage-helper'
export default {
  data () {
    return {
      error: null,
      password: null,
      show1: false,
    }
  },
  methods: {
    validateBeforeSubmit () {
      if (this.password === 'karasuno') {
        this.error = false
        storageHelper.setItem('user-password', this.password)
        this.$router.push('/')
      } else {
        this.error = true
      }
    }
  }
}
</script>