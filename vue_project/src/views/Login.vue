<template>
  <div>
    <form v-if="! isReg">
      <div class="header">欢迎登录</div>
      <div class="form">
        <label>用户名</label>
        <input type="text" v-model="name">
      </div>
      <div class="form">
        <label>密码</label>
        <input type="password" v-model="password">
      </div>
      <div class="button">
        <button type="button" class="first" @click="login">登录</button>
        <button type="button" class="second" @click="reg">注册</button>
      </div>
    </form>
    <form v-else>
      <div class="header">请输入以下信息</div>
      <div class="form">
        <label>用户名</label>
        <input type="text" v-model="name">
      </div>
      <div class="form">
        <label>密码</label>
        <input type="password" v-model="password">
      </div>
      <div class="form">
        <label>确认密码</label>
        <input type="password" v-model="repeat">
      </div>
      <div class="button">
        <button type="button" class="first" @click="addUser">确定</button>
        <button type="button" class="second" @click="cancel">取消</button>
      </div>
    </form>
  </div>
</template>

<script>

  import store from '@/store'
  export default {
    name: 'Login',
    data(){
      return {
        isReg:false,
        name: '',
        password: '',
        repeat: ''
      }
    },
    mounted(){
      store.commit('getLocalUsers')
    },
    computed: {
      users() {
        return store.state.users
      },
      checkUser() {
        return this.users.find( user => user.name === this.name && user.password === this.password)
      }
    },
    methods:{
      login () {
        if(this.name === '' || this.password === ''){
          alert('请输入用户名和密码')
        } else if(this.checkUser) {
          sessionStorage.setItem('currentUser',this.checkUser.name)
          this.name=''
          this.password=''
          this.$router.push('/home/user')
        }else{
          alert("用户名或密码不正确！！")
        }
      },
      reg () {
        this.name=''
        this.password=''
        this.isReg=true
      },
      addUser (){
        if (this.name === '' || this.password === '' || this.repeat === '') {
          alert('请输入用户名和密码')
        } else if(this.checkUser){
          alert('用户已存在')
        }else if(this.password !== this.repeat){
          alert("两次输入的密码不一致！！！")
        }else{
          store.commit('addUser',{
            name:this.name,
            password:this.password
          })
          localStorage.setItem('users',JSON.stringify(store.state.users)) //存到本地
          this.name=''
          this.password=''
          this.repeat=''
          this.isReg=false
          alert('注册成功')
        }

      },
      cancel (){
        this.isReg=false
      }
    }
  }
</script>
<style scoped lang="scss">
  .header{
    margin: 25px;
    margin-left: 45px;
    font-weight: bold;
    font-size: 30px;
  }
  .form{
    display: flex;
    justify-content: flex-end;
    margin: 10px;
    margin-right: 15px;
    label{
      height: 30px;
      line-height:30px;
      margin-right: 10px;
    }
    input{
      width: 75%;
      height:30px;
      line-height:30px;
      border-radius: 7px;
      border: 1px solid #d5d5d5;
      padding: 0 10px;

    }
  }
  .button{
    display: flex;
    margin:30px 20px;
    button{
      flex: 1;
      margin: 5px;
      height: 35px;
      line-height: 35px;
      border-radius: 7px;
      border: 1px solid #42b983;
      cursor: pointer;
      &.first{
        background: #42b983;
        color: #fff;
      }
      &.second{
        background: #fff;
        color: #42b983;
      }
    }
  }
</style>
