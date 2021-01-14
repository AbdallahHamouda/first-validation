import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    price:70,
    uName:'yourname',
    btn: false,
    errlist:[],
    err1:"",
    pnum:"",
    edate:"",
    cvc:"",
    cnum:""
  },
  getters:{
  },
  mutations:{
    cheking(state){
      state.errlist=[];
      if (state.uName.length<5){
        this.state.errlist.push("the username can't be less than 5 words")
      }
      if (state.pnum.length<10){
        this.state.errlist.push("the phone number can't be less than 10 numbers")
      }
      if (state.cnum.length<16){
        this.state.errlist.push("the credit card number can't be less than 16 numbers")
      }
      if (state.cnum.length>16){
        this.state.errlist.push("the credit card number can't be more than 16 numbers")
      }
      if (state.cvc.length<3){
        this.state.errlist.push("the cvc can't be less than 3 numbers")
      }
      if (state.cvc.length>3){
        this.state.errlist.push("the cvc can't be more than 3 numbers")
      }
      if(state.cvc.length == 3  && state.cnum.length == 16 && state.pnum.length == 10){
        this.state.btn = !this.state.btn
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
