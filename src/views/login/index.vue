<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input 
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"/>
      </el-form-item>
  

    </el-form>
  </div>
</template>
<script>

export default ({
  data(){
    return {
      loginForm:{
        username: 'admin',
        password: '111111'
      },
      rules:[]
    }
  }
})
</script>
<style lang="sass" scoped>

</style>