<template>
    <div class="trolley">
        <div class="head">
            <img src="https://img.alicdn.com/imgextra/i2/O1CN01a69z6z1hJklCkBqOU_!!6000000004257-2-tps-174-106.png" alt="" height="65">
            <input type="text" class="input6" id="sousuo" placeholder="搜索宝贝"><button>搜索</button>
        </div>
        <div class="bu4">
            <div class="tou">
                购物车
                <button class="qingkong"><li class="el-icon-delete"></li> 清空购物车</button>
                <div class="zong">已选商品（不含运费）: 
                    <!-- {{ currecy() }} -->
                </div>
            </div>
            <div class="group">
                <ul class="items">
                    <div class="shangpin" v-for="good in goods" :key="good.id">
                        <input type="checkbox" class="xuan" :value="good" v-model="checkList"><img :src="good.imgURL" alt="" height="90">
                            <div class="ti">
                            {{ good.describle }}
                         </div>{{ good.price }}
                    <!-- <input type="checkbox" name="" id="" :value="cartItem.id" v-model="selectedItems">
                        <div class="SHANG">{{ cartItem.id }}</div> -->
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data(){
        return{
            liang:'1',
            number: 1,
        }
    },
    computed:{
        add(){
            return this.number++
        },
        total(){
            var sum = 0;
            for(let i = 0; i<this.cartItem.length;i++){
                sum+=parseFloat(this.cartItem[i].price)
                        *parseFloat(this.cartItem[i].count)
            }
            return sum
        },
        ...mapState(['goods'])
    },
    methods:{
        deleteCartItems(){
            this.selectedItems.forEach((id)=>{
            this.deleteCartItem(id)
            })
        }, 
        setQuantity(e,id){
            this.$store.commit('setQuantity',{id:id,quantity:e.target.value})
        },
        ...mapMutations(['addItem','deleteCartItem'])
    }

}
</script>

<style scoped>
.bu4{
    width: 1000px;
    height: 1200px;
    border-radius: 20px;
    background-color: #fff;
    position: relative;
    left: 190px;
    top: 20px;
}
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
    left: 600px;
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
.head button{
    width: 80px;
    height: 38px;
    border-radius: 19px;
    border: none;
    background: linear-gradient(90deg,#FF7400,#FF4E00);
    color: #fff;
    position: relative;
    left: 518px;
    top: 4px;
    font: 100 20px '宋体';
}
.tou{
    position: relative;
    top: 20px;
    font: 200 25px '宋体';
    border-bottom: 1px solid;
    padding-left: 30px;
    padding-bottom: 10px;
}
.zong{
    display: inline;
    position: relative;
    left: 380px;
}
.group{
    width: 900px;
    height: 500px;
    position: relative;
    left: 50px;
    top: 30px;
}
.qingkong{
    position: relative;
    left: 350px;
    width: 100px;
    height: 40px;
    background-color: #FFF;
    border: none;
}
.qingkong:hover{
    color: #FF4E00;
    cursor: pointer;
}
.shangpin{
    width: 800px;
    height: 100px;
    background-color: #F3F3F3;
    border-radius: 20px;
    margin: 10px;
    position: relative;
    top: 20px;
}
.shangpin img{
    position: relative;
    top: 6px;
    left: 13px;
}
.xuan{
    position: relative;
    top: -25px;
    left: 10px;
    height: 40px;
    width: 20px;
}
.ti{
    display: inline-block;
    position: relative;
    left: 25px;
    top: -30px;
    width: 400px;
    height: 50px;
}
.liang{
    display: inline-block;
    position: relative;
    top: -35px;
    width: 60px;
}

.danjia,
.zongjia{
    display: inline-block;
    position: relative;
    top: -35px;
    left: 25px;
}
.zongjia{
    display: inline-block;
    position: relative;
    left: 70px;
}
</style>