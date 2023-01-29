<template>
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
</template>

<script>
export default {

}
</script>

<style>
.tail1{
    width: 1200px;
    height: 100px;
    border-radius: 30px 30px 0 0;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
.shouhou{
    display: flex;
    justify-content: space-evenly;
    background-color: #fff;
}
.tail3{
    width: 150px;
    height: 250px;
    font: 400 20px '优设标题黑';
    color: rgba(106, 106, 106, 0.9);
    position: relative;
    top: 10px;
}
.tail3 a{
    color: #00000089;
    text-decoration: none;
    font: 150 14px '优设标题黑';
}
.tail3 a:hover{
    border-bottom: 1px solid;
}
</style>