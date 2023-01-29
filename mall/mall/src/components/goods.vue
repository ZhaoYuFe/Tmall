<template>
  <div class="goods">
    <div class="cai">猜你喜欢</div><div class="tui">个性推荐</div>
    <div class="chaoshi">
        <router-link to="/Detail/0" target="_blank"><div>
          <span class="img6"><img src="https://gw.alicdn.com/bao/uploaded/i4/2212958866615/O1CN01L9hWOw1yjikyuVWT5_!!0-item_pic.jpg_300x300q90.jpg_.webp" alt=""></span>
          <span class="wenzi">《时间机器》[英]威尔斯著作读客正版外国科幻小说</span>
          <span class="jiage">¥11.4</span></div></router-link>
        <router-link to="/Detail/1" target="_blank"><div>
          <span class="img6"><img src="https://gw.alicdn.com/bao/uploaded/i3/2211057467238/O1CN01WvBSYt23L3T1aCUpg_!!0-item_pic.jpg_300x300q90.jpg_.webp" alt=""></span>
          <span class="wenzi">『猫亲王』日程本周行程每日随身时间管理自律学习</span>
          <span class="jiage">¥17.9</span></div></router-link>
        <router-link to="/Detail/2" target="_blank"><div>
          <span class="img6"><img src="https://gw.alicdn.com/bao/uploaded/i2/130172767/O1CN017FPsI61WJKTafHrsF_!!0-saturn_solar.jpg_300x300q90.jpg_.webp" alt=""></span>
          <span class="wenzi">高漫M6数位板手绘板电子绘图写字输入电脑绘画板</span>
          <span class="jiage">¥168</span></div></router-link>
        <router-link to="/Detail/3" target="_blank"><div>
          <span class="img6"><img src="https://gw.alicdn.com/bao/uploaded/i4/2200779309835/O1CN01ei74gu2MWTuYw7Wx0_!!0-item_pic.jpg_300x300q90.jpg_.webp" alt=""></span>
          <span class="wenzi">『Montilord』刷题便签本 可撕 无粘性留言计划待办</span>
          <span class="jiage">¥20</span></div></router-link>
        <router-link to="/Detail/4" target="_blank"><div>
          <span class="img6"><img src="https://gd4.alicdn.com/imgextra/i3/0/O1CN01g1COwp1neGHX66vsh_!!0-item_pic.jpg" alt=""></span>
          <span class="wenzi">PoemsForYou 为你写诗可撕和纸贴纸手账文字素材</span>
          <span class="jiage">¥16</span></div></router-link>
        <router-link to="/Detail/5" target="_blank"><div>
          <span class="img6"><img src="https://gw.alicdn.com/imgextra/i2/1049653664/O1CN01HtHrty1cw9vFE1uDy_!!0-item_pic.jpg_Q75.jpg_.webp" alt=""></span>
          <span class="wenzi">死在火星上（中国科幻奖——银河奖获奖作品</span>
          <span class="jiage">¥49</span></div></router-link>
        <router-link to="/Detail/6" target="_blank"><div>
          <span class="img6"><img src="https://gw.alicdn.com/imgextra/i3/1049653664/O1CN01o7BGhN1cw9xnmAVcW_!!0-item_pic.jpg_Q75.jpg_.webp" alt=""></span>
          <span class="wenzi">全频带阻塞干扰（三体作者刘慈欣王晋康何夕等著）</span>
          <span class="jiage">¥24</span></div></router-link>
        <router-link to="/Detail/7" target="_blank"><div>
          <span class="img6"><img src="https://gd3.alicdn.com/imgextra/i2/0/O1CN01RLkTnP1neGHQiBtY7_!!0-item_pic.jpg_400x400.jpg" alt=""></span>
          <span class="wenzi">PoemsForYou为你写诗原创手账便签本学生用可撕</span>
          <span class="jiage">¥14</span></div></router-link>
        <router-link to="/Detail/8" target="_blank"><div>
          <span class="img6"><img src="https://gw.alicdn.com/imgextra/i2/2212347307969/O1CN01j2MacS28jr3cIPqfp_!!0-item_pic.jpg_Q75.jpg_.webp" alt=""></span>
          <span class="wenzi">超级植物联邦走马种子诗集发芽盆栽绿植创意观察礼物</span>
          <span class="jiage">¥39</span></div></router-link>
        <router-link to="/Detail/9" target="_blank"><div>
          <span class="img6"><img src="https://gw.alicdn.com/bao/uploaded/i4/485765581/O1CN010DvaNT1r69CkXcV2Z_!!0-item_pic.jpg_300x300q90.jpg_.webp" alt=""></span>
          <span class="wenzi">流浪地球 雨果奖得主刘慈欣作品 全新设计珍藏版</span>
          <span class="jiage">¥31</span></div></router-link>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>
.cai{
  position: relative;
  top: -230px;
  left: 20px;
  font: 200 25px '宋体';
}
.tui{
  position: relative;
  top: -254px;
  left: 130px;
  font: 200 15px '宋体';
  background-color: #FF0036;
  border-radius: 20px;
  color: #fff;
  width: 65px;
  padding: 2px;
}
.chaoshi{
  display: grid;
  grid-gap: 10px;
  position: relative;
  top: -220px;
  left: 12px;
  height: 500px;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
}
.chaoshi a{
  text-decoration: none;
  color: black;
}
.chaoshi div{
  background-color: #F7F9FA;
  width: 210px;
  height: 300px;
  border-radius: 15px;
  transition: 0.8s;
  border: 1px solid #fff;
}
.chaoshi div:hover{
  border: 1px solid #FF7500;
  box-shadow: 0 1px 2px 1px rgba(255, 117, 0,.2),
              0 1px 2px 2px rgba(128, 128, 128,.1);
  cursor: pointer;
}
.img6{
  width: 185px;
  height: 185px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  top: 10px;
  left: 12px;
}
.wenzi{
  display: block;
  position: relative;
  top: 10px;
  font: 200 15px '宋体';
  transition: 0.1s;
  padding: 15px;
}
.wenzi:hover{
  color: #FF7500;
}
.jiage{
  position: relative;
  top: 15px;
  left: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 25px;
  color: #FF7500;
}
</style>