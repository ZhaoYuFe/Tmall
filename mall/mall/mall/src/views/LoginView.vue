<template>
  <div class="login">
    <div class="bu1"><img src="https://assets.alicdn.com/g/tm/login/3.0.2/img/logo.png" alt="" height="50"></div>
    <login />
  </div>
</template>

<script>
import login from '@/components/login.vue';

export default {
  name:'Login',
  components:{
    login
  }
}
</script>

<style>
.bu1{
  display: inline-block;
  width: 200px;
  height: 100px;
  position: relative;
  left: 100px;
  top: 20px;
}
</style>