<template>
  <div class="login">
    <div class="bu2">
      <div class="container2">
      <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="demo-ruleForm"
      >
      <el-form-item label="" prop="nickname">
        <el-input v-model.number="form.nickname"
          prefix-icon="el-icon-user"
          placeholder="请输入昵称"
          ></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
          clearable show-password
          placeholder="请输入密码"
          prefix-icon="el-icon-star-off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginForm('form')" icon="el-icon-s-claim">&nbsp; 登录 </el-button>
        <el-button @click="resetForm('form')" icon="el-icon-s-tools"> 重置 </el-button>
        <el-button @click="zhuce()" icon="el-icon-s-promotion"> 去注册 </el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="bu9">
      <img src="https://ts1.cn.mm.bing.net/th/id/R-C.185c43adb5951380a766cd80bcc9f8d3?rik=F%2fm0Ro%2bMaRq56g&riu=http%3a%2f%2fpic.616pic.com%2fys_b_img%2f00%2f12%2f84%2fzp63k7fL8o.jpg&ehk=P3xWd%2flCTQOymf2MR%2bWV9X5q6NVPuG2PhCH0Tpe%2b03Q%3d&risl=&pid=ImgRaw&r=0" alt="">
    </div>
    </div>
    <div class="tail4">
      <span class="more1">
        <a href=""> 阿里巴巴集团 </a>|<a href=""> 阿里巴巴国际站 </a>|<a href=""> 阿里巴巴中国站 </a>|
        <a href=""> 全球速卖通 </a>|<a href=""> 淘宝网 </a>|<a href=""> 天猫 </a>|
        <a href=""> 聚划算 </a>|<a href=""> 一淘 </a>|<a href=""> 阿里妈妈 </a>|
        <a href=""> 飞猪 </a>|<a href=""> 虾米 </a>|<a href=""> 阿里云计算 </a>|
        <a href=""> 云OS </a>|<a href=""> 万网 </a>|<a href=""> 支付宝 </a>
      </span>
      <span class="more2">
        <a href=""> 关于淘宝 </a><a href=""> 合作伙伴 </a><a href=""> 营销中心 </a><a href=""> 廉正举报 </a>
        <a href=""> 联系客服 </a><a href=""> 开放平台 </a><a href=""> 诚征英才 </a><a href=""> 联系我们 </a>
        <a href=""> 网站地图 </a><a href=""> 隐私权政策 </a><a href=""> 法律声明 </a><a href=""> 知识产权 </a> |
         © 2003-现在 Taobao.com 版权所有增值电信业务经营许可证：浙B2-20080224 | 增值电信业务经营许可证（跨地区）： B2-20150210 |
         浙网文（2019）1033-086号 | 浙江省网络食品销售第三方平台提供者备案：浙网食A33010001互联网药品信息服务资格证书（浙）-经营性-2018-0010 |
         短消息类服务接入代码使用证书：号【2016】00154-A01  信息网络传播视听许可证：1109364号 | 出版物网络交易平台服务经营备案号：新出发浙备字第002号=浙公网安备 33010002000078号 |
         浙B2-20080224-1 | 广播电视节目制作经营许可证（浙）字第01012号 | 市场名称登记证：工商网市字3301004120号 | 医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00004号
      </span>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { mapState } from 'vuex';

export default {
    name:'login',
    data() {
      return{
        form:{
          nickname: '',
          password: '',
        },
      rules: {
        nickname:[
          {required: true,message: '请输入用户名',trigger: 'blur'},
        ],
        password:[
          {required: true,message: '请设置密码',trigger: 'blur'},
      ]
      }
    }
  },
    methods:{
      zhuce(){
        router.push('/Register')
      },
      loginForm(){
        let isLogin = false;
        if(this.form.nickname == '' || this.form.password == ''){
          this.$notify({
          title: '警告',
          message: '用户名或密码不能为空',
          type: 'warning'
        });
        }
        else if(this.form.nickname == this.nickname && this.form.password == this.password){
          this.$notify({
          title: '成功',
          message: '登录成功',
          type: 'success'
        });
          isLogin = true;
        if (isLogin === true) {
            this.$router.push({
              path: "/",
              query: {
                username: this.username,
              },
            });
        }
        console.log(this.state)
        console.log(isLogin)
      }
      else{
        this.$notify.error({
          title: '错误',
          message: '密码错误或用户不存在'
        });
        isLogin = false;
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
    },
    computed:{
      ...mapState(['nickname','password','isLogin'])
    },
}
</script>

<style>
.bu2{
  height: 600px;
  width: 100vw;
  background: #F6F6F6;;
  background-size: 1450px 590px;
}
.bu9{
  position: relative;
  left: 540px;
  top: -300px;
}
.container2{
  width: 415px;
  height: 370px;
  background-color: hsl(0, 0%, 100%,0);
  position: relative;
  right: -455px;
  top: 240px;
}
.tail4{
  width: 1200px;
  height: 200px;
  position: relative;
  left: 100px;
  top: 80px;
}
.more1{
  width: 1200px;
  height: 28px;
  padding: 8px;
  display: inline-block;
  border-bottom: 1px solid;
  border-top: 1px solid;
}
.more1 a{
  text-decoration: none;
  color: hsla(214, 25%, 24%,.9);
  font-size: 13px;
  word-spacing: 5px;
}
.more1 a:hover{
  color: #FF7500;
}
.more2{
  color: hsla(215, 25%, 24%, 0.8);
  font-size: 10px;
  word-spacing: 5px;
}
.more2 a{
  text-decoration: none;
  color: hsla(214, 25%, 24%,.9);
  font-size: 13px;
  word-spacing: 5px;
}
.more2 a:hover{
  color: #FF7500;
}
</style>