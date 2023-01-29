import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname:[],
    password:[],
    cartItems: [],
    goods:[
      {id:0,name:'时间机器',price:11.4 ,imgURL:require('../assets/商品/时间机器.webp'),describle:'《时间机器》[英]威尔斯著作读客正版外国科幻小说穿越时空的科幻想象从这本书开始七至九年级推荐阅读书单刘慈欣盛赞刘勇军译'},
      {id:1,name:'日程本',price:17.9,imgURL:require('../assets/商品/日程本.webp'),describle:'『猫亲王』每日计划本day planner周行程随身时间管理清单打卡效率自律学习生备考研工作小记事便携笔记本子月销 200+'},
      {id:2,name:'手绘板',price:168,imgURL:require('../assets/商品/手绘板.webp'),describle:'高漫M6数位板可连接手机手绘板电子绘图写字输入手写板电脑绘画板'},
      {id:3,name:'刷题便签本',price:20,imgURL:require('../assets/商品/刷题便签本.webp'),describle:'『Montilord』刷题便签本 可撕 无粘性留言计划待办事项效率考研高考司法考试必备厚天猫官方'}, 
      {id:4,name:'亚克力草',price:24,imgURL:require('../assets/商品/为你写诗.jpg'),describle:'PoemsForYou 为你写诗原创「Poems.」可撕和纸贴纸手账文字素材'},
      {id:5,name:'死在火星上',price:49,imgURL:require('../assets/商品/死在火星上.webp'),describle:'死在火星上（中国科幻奖——银河奖获奖作品，地球消失了，两个仅存的地球人分散在联合空间站和火星上，他们该如何生活下去？）'},
      {id:6,name:'全频带阻塞干扰',price:24,imgURL:require('../assets/商品/全频带阻塞干扰.webp'),describle:'全频带阻塞干扰（三体作者刘慈欣王晋康何夕等著）中国科幻名家典藏系列 三体流浪地球同名作者书中国原创科幻精品科幻小说书籍'},
      {id:7,name:'手账便签本',price:14,imgURL:require('../assets/商品/手账便签本.jpg'),describle:'PoemsForYou为你写诗原创手账便签本学生用可撕todolist女生礼物'},
      {id:8,name:'超级植物种子',price:39,imgURL:require('../assets/商品/超级植物种子.webp'),describle:'超级植物联邦走马种子诗集发芽盆栽绿植创意观察礼物新年'},
      {id:9,name:'流浪地球',price:31,imgURL:require('../assets/商品/流浪地球.webp'),describle:'流浪地球 中英双语版 雨果奖得主刘慈欣作品精选 全新设计珍藏版 科幻小说 磨铁图书 正版书籍'},
    ],
    count:0
  },
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        return total + item.unitPrice
      }, 0)
    },
    // 获取购物车中商品条目的数量
    cartSize: (state) => {
      return state.items.length
    }
  },
  mutations: {
    addUser(state, form) {
      state.nickname.push(form.nickname)
      state.password.push(form.password)
      console.log(this.state)
    },
    pushItemToCart(state, { id, name, price, unitPrice,quantity}) {
      let cartItem = state.items.find(item => item.id == id)
      if(cartItem ==null) 
        state.items.push({ id, name, price, unitPrice, quantity })
      else {
        cartItem.quantity ++
        cartItem.unitPrice=cartItem.price*cartItem.quantity
      }  
    },
    addItem(state){
      alert(state.goods)
    },
    // 设置商品数量
    setQuantity(state, { id, quantity }) {
      let cartItem = state.items.find(item => item.id == id)
      cartItem.quantity = quantity
      cartItem.unitPrice=cartItem.basePrice*cartItem.quantity
    },
    // 设置购物车的商品条目数组
    setCartItems(state, { items }) {
      state.items = items
    },
    clearCart(state){  //清空购物车
      state.items=[]   
    },
    // 删除购物车中的商品条目
    deleteCartItem(state, id){
      let index = state.items.findIndex(item => item.id == id);
      if(index > -1)
        state.items.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
