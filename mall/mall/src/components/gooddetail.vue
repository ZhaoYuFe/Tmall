<template>
  <div class="detail">
    <div class="head">
        <img src="https://img.alicdn.com/imgextra/i2/O1CN01a69z6z1hJklCkBqOU_!!6000000004257-2-tps-174-106.png" alt="" height="65">
        <input type="text" class="input6" id="sousuo" placeholder="搜索宝贝">
        <button class="btn7">搜天猫</button>
        <button class="btn7">搜本店</button>
    </div>
    <div class="bu6">
        <div class="header">
            <div class="img7">
                <img :src="goods[$route.params.id].imgURL" alt="" height="350 +'px'">
            </div>
            <div class="biaoti">
                {{ goods[$route.params.id].describle }}
            </div>
            <span class="jia">￥{{ goods[$route.params.id].price }}</span>
            <div class="jisuan">
               <el-input-number v-model="num" @change="handleChange" :min="1" :max="99" label="描述文字"></el-input-number>
               <div class="btn8">
                <button>立即购买</button><button @click="addItem">加入购物车</button>
               </div>
            </div>
            <!-- <div class="baobei">
                宝贝详细
            </div> -->
            <!-- <div class="cargo">
                <img src="https://img.alicdn.com/imgextra/i1/2212958866615/O1CN017HbH9Z1yjiiFs4BCt_!!2212958866615.jpg" alt="">
                <img src="https://img.alicdn.com/imgextra/i1/2212958866615/O1CN01VjYNXd1yjiiE0HtfN_!!2212958866615.jpg" alt="">
                <img src="https://img.alicdn.com/imgextra/i2/2212958866615/O1CN01um3MJA1yjii74J8UL_!!2212958866615.jpg" alt="">
                <img src="https://img.alicdn.com/imgextra/i3/2212958866615/O1CN01dbkLan1yjii8o2PqZ_!!2212958866615.jpg" alt="">
                <img src="https://img.alicdn.com/imgextra/i1/2212958866615/O1CN01tlJaHK1yjiiFs4uyw_!!2212958866615.jpg" alt="">
                <img src="https://gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar" alt="" height="600">
            </div> -->
        </div>
    </div>
    <div class="tail">
        <div class="tail1">
            <img src="../assets/tailpic.jpeg" alt="" height="100">
        </div> 
        <hr>
        <div class="shouhou">
            <div class="tail3">
                <b>购物指南</b><br>
                <a href="">免费注册</a><br>
                <a href="">开通支付宝</a><br>
                <a href="">支付宝充值</a><br>
            </div>
            <div class="tail3">
                <b>天猫保障</b><br>
                <a href="">发票保障</a><br>
                <a href="">售后规则</a><br>
                <a href="">物流时效保障</a><br>
            </div>
            <div class="tail3">
                <b>支付方式</b><br>
                <a href="">快捷支付</a><br>
                <a href="">信用卡</a><br>
                <a href="">余额宝</a><br>
                <a href="">蚂蚁花呗</a><br>
            </div>
            <div class="tail3">
                <b>商家服务</b><br>
                <a href="">天猫规则</a><br>
                <a href="">商家入驻</a><br>
                <a href="">商家中心</a><br>
                <a href="">天猫必修课</a><br>
                <a href="">喵言喵语</a><br>
                <a href="">平台服务协议</a><br>
            </div>
            <div class="tail3">
                <b>手机天猫</b>
                <img src="https://img.alicdn.com/tfscom/TB14MWoNhjaK1RjSZFAwu2dLFXa.png" alt="" height="150">
            </div>
        </div>
  </div>
  </div>
</template>

<script>
import tail from '@/components/taile.vue';
import { mapState,mapMutations } from 'vuex';

export default {
    name:'detail',
    components:{
        tail
    },
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      ...mapMutations({
        addItem:'addItem'
        // pushItemToCart
      })
    },
    computed:{
        ...mapState(['goods'])
    }
}
</script>

<style scoped>
.head{
    width: 100vw;
    height: 110px;
    background-color: #fff;
    position: relative;
}
.head img{
    position: relative;
    left: 200px;
    top: 20px;
}
.input6{
    width: 300px;
    height: 40px;
    border-radius: 30px;
    position: relative;
    left: 500px;
    border: none;
    background-color: #F3F3F3;
    padding-left: 44px;
    font: 200 14px '宋体';
}
.input6:focus{
    border: 1px solid #fff;
}
#sousuo{
    background-image:url('https://img.alicdn.com/imgextra/i2/O1CN01gdoY6h1caAtrjwYmU_!!6000000003616-2-tps-32-32.png');
    background-size: 15px;
    font-size: 2px;
    background-position: 15px;
    background-repeat:no-repeat;
    display: inline-block;
}
.btn7{
    width: 100px;
    height: 40px;
    border:1px solid #F3F3F3;
    border-radius: 20px;
    background: #fff;
    color: black;
    font: 200 16px '宋体';
    cursor: pointer;
    margin: 10px;
    position: relative;
    left: 550px;
}
.bu6{
    width: 100vw;
    height: 800px;
    background: linear-gradient(180deg,#E9DED8,#D7E9EA);
    display: flex;
    justify-content: center;
}
.header{
    width: 1100px;
    height: 600px;
    background-color: #fff;
    border-radius: 40px;
    margin-top: 30px;
}
.img7{
    position: relative;
    left: 40px;
    top: 80px;
}
.tail1{
    width: 100vw;
    overflow: visible;
}
.biaoti{
    width: 600px;
    position: relative;
    position: relative;
    top: -275px;
    left: 450px;
    font: 200 22px '雅黑';
}
.jiage{
    position: relative;
    top: 60px;
    left: -80px;
    font: 400 30px '雅黑';
}
.jia{
    font: 400 30px '雅黑';
    color: #FF9501;
    position: relative;
    left: 460px;
    top: -200px;
}
.cargo{
    position: relative;
    left: 180px;
    top: 60px;
    margin: 0;
}
.jisuan{
    width: 150px;
    height: 50px;
    position: relative;
    top: -145px;
    left: 450px;
}
.btn8{
    display: flex;
    justify-content: space-around;
    width: 300px;
    position: relative;
    top: 60px;
}
.btn8 button{
    width: 150px;
    height: 50px;
    border-radius: 25px 0 0 25px;
    border: none;
    background: linear-gradient(90deg,#FF7400,#FF4E00);
    color: #fff;
    font: 200 18px '优设标题黑';
    cursor: pointer;
    box-shadow: 0 1px 5px 2px hsla(27, 100%, 50%,.2),
                0 1px 5px 2px hsla(18, 100%, 50%,.2);
}
.btn8 button:nth-child(2){
    border-radius: 0 25px 25px 0;
    background: linear-gradient(90deg,#FFC900,#FF9501);
    box-shadow: 0 1px 5px 2px rgba(255, 149, 1,.3),
                0 1px 5px 2px rgba(255, 201, 0,.2);
}
.baobei{
    width: 100px;
    height: 50px;
    border-bottom: 4px solid #FF9501;
    font: 400 25px '雅黑';
    position: relative;
    left: 20px;
    cursor: pointer;
}
</style>