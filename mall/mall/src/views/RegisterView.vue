<template>
  <div class="Register">
    <div class="bu3">
      <signup />
      <img src="https://ts1.cn.mm.bing.net/th/id/R-C.974831edca9a084e6ab363ebf6d709ab?rik=jQMobXhI9e2N6w&riu=http%3a%2f%2fpic.616pic.com%2fys_bnew_img%2f00%2f04%2f90%2fWvFN2I8Rsw.jpg&ehk=1108%2bZqcEllTmPe7sKuT6eiZVT12DH4wKNnCt3VokLg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" height="180">
    </div>
  </div>
</template>

<script>
import signup from '@/components/signup.vue';

export default {
  name:'Register',
  components:{
    signup
  }
}
</script>

<style>
.bu3{
  width: 100vw;
  height: 1000px;
  background: #F7F7F7;
  display: flex;
  justify-content: center;
}
.bu3 img{
  position: relative;
  left: -600px;
  top: 50px;
}
</style>