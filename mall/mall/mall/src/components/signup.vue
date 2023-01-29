<template>
  <div>
    <div class="container1">
      <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="demo-ruleForm"
      >
      <el-form-item label="" prop="nickname">
        <el-input v-model="form.nickname"
          prefix-icon="el-icon-user"
          placeholder="请设置昵称"
          ></el-input>
      </el-form-item>

      <el-form-item label="" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
          clearable show-password
          placeholder="请设置密码"
          prefix-icon="el-icon-star-off"
        ></el-input>
      </el-form-item>
        <el-form-item label="" prop="checkPass">
        <el-input
          type="password"
          v-model="form.checkPass"
          autocomplete="off"
          clearable show-password
          placeholder="请确认密码"
          prefix-icon="el-icon-star-on"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')" icon="el-icon-s-claim">&nbsp; 注册 </el-button>
        <el-button @click="resetForm('form')" icon="el-icon-s-tools"> 重置 </el-button>
        <el-button @click="denglu()" icon="el-icon-s-promotion"> 去登陆 </el-button>
      </el-form-item>
    </el-form>
    </div>
    
    <div class="tail5">
      <div class="more3">
        <a href=""> 阿里巴巴集团 </a>|<a href=""> 阿里巴巴国际站 </a>|<a href=""> 阿里巴巴中国站 </a>|
        <a href=""> 全球速卖通 </a>|<a href=""> 淘宝网 </a>|<a href=""> 天猫 </a>|
        <a href=""> 聚划算 </a>|<a href=""> 一淘 </a>|<a href=""> 阿里妈妈 </a>|
        <a href=""> 飞猪 </a>|<a href=""> 虾米 </a>|<a href=""> 阿里云计算 </a>|
        <a href=""> 云OS </a>|<a href=""> 万网 </a>|<a href=""> 支付宝 </a>
      </div>
      <div class="more4">
        <a href=""> 关于淘宝 </a><a href=""> 合作伙伴 </a><a href=""> 营销中心 </a><a href=""> 廉正举报 </a>
        <a href=""> 联系客服 </a><a href=""> 开放平台 </a><a href=""> 诚征英才 </a><a href=""> 联系我们 </a>
        <a href=""> 网站地图 </a><a href=""> 法律声明及隐私政策 </a>© 2022 Taobao.com 版权所有 <br> 网络文化经营许可证：文网文[2010]040号 |
          增值电信业务经营许可证：浙B2-20080224-1 | 信息网络传播视听节目许可证：1109364号
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { mapMutations, mapState } from 'vuex'

export default {
  name:'register',
  data() {
      return{
        form:{
          nickname: '',
          password: '',
          checkPass:''
        },
      rules: {
        nickname:[
          {required: true,message: '请输入用户名',trigger: 'blur'},
        ],
        password:[
          {required: true,message: '请设置密码',trigger: 'blur'},
        ],
        checkPass:[
        {required: true,message: '请确认密码',trigger: 'blur'},
        ]
      }
    }
  },
  methods:{
    denglu(){
      router.push('/Login')
    },
    submitForm(){
      if(this.form.nickname == "" || this.form.password == "" || this.form.checkPass == ""){
        this.$notify({
          title: '警告',
          message: '用户名或密码不能为空',
          type: 'warning'
        });
      }else if(this.form.password != this.form.checkPass){
        this.$notify.error({
          title: '错误',
          message: '密码不一致，请检查密码',
        });
      }
      else{
        this.$store.commit('addUser',this.form)
        this.$notify({
            title: '成功',
            message: '注册成功',
            type: 'success'
        });
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed:{
    ...mapState(['isLogin'])
  }
}
</script>

<style>
.container1{
  position: relative;
  left: 580px;
  top: 240px;
  width: 415px;
  height: 370px;
  background-color: hsl(0, 0%, 100%,0);
}
.tail5{
  width: 1200px;
  height: 200px;
  position: relative;
  left: 260px;
  top: 210px;
}
.more3{
  width: 1100px;
  height: 28px;
  padding: 8px;
  display: inline-block;
  border-bottom: 1px solid;
  border-top: 1px solid;
  word-spacing: 5px
}
.more3 a{
  text-decoration: none;
  color: hsla(214, 25%, 24%,.9);
  font-size: 13px;
  word-spacing: 5px;
}
.more3 a:hover{
  color: #FF7500;
}
.more4{
  color: hsla(215, 25%, 24%, 0.8);
  font-size: 10px;
  word-spacing: 10px;
  line-height: 25px;
}
.more4 a{
  text-decoration: none;
  color: hsla(214, 25%, 24%,.9);
  font-size: 13px;
  word-spacing: 5px;
}
.more4 a:hover{
  color: #FF7500;
}
</style>