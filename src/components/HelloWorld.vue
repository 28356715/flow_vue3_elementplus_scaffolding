<template>
  <div class="hello">
    <p>
      Nice to meet you here! Now you can start your Dapp development.
    </p>
    <h3>Connect Wallet</h3>
    <ul>
      <li><el-tag class="ml-2" type="info" size="large">address:{{userWalletAddress}}</el-tag></li>
      <li><el-button type="success"  @click="login">Connet Wallet</el-button></li>
      <li><el-button type="warning"  @click="logout">Log out</el-button></li>
    </ul>
    <h3>interact with flow</h3>
    <ul>
      <li><el-tag v-if="myFriend.length>0"  effect="light" type="success" class="mx-1" > {{myFriend}} </el-tag></li> <br/>
      <li>
      Say hello to <el-input v-model="name" class = "input" placeholder="Please input" style="width:40%"/>
      <el-button type="success"  @click="query">SayHi(query)</el-button>
      </li>
    </ul>
    
    <h3>Learn Flow</h3>
    <ul>
      <li><a href="https://developers.flow.com/" target="_blank" rel="noopener">Flow Developers</a></li>
      <li><a href="https://developers.flow.com/cadence/language/built-in-functions#unsaferandom" target="_blank" rel="noopener">Cadence</a></li>
      <li><a href="https://play.flow.com/local-project" target="_blank" rel="noopener">PlayGround</a></li>
      <li><a href="https://www.youtube.com/watch?v=VbUEZShd-6I" target="_blank" rel="noopener">Video Course</a></li>
      <li><a href="https://github.com/28356715/flow_vue3_marketplace_example" target="_blank" rel="noopener">Example</a></li>
    </ul>
    <h3>Flow Socials & Platforms</h3>
    <ul>
      <li><a href="https://github.com/onflow" target="_blank" rel="noopener">Github</a></li>
      <li><a href="https://www.youtube.com/channel/UCs9r5lqmYQsKCpLB9jKwocg" target="_blank" rel="noopener">Youtube</a></li>
      <li><a href="https://onflow.org/discord" target="_blank" rel="noopener">Discord</a></li>
      <li><a href="https://twitter.com/flow_blockchain" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://t.me/flow_blockchain" target="_blank" rel="noopener">Telegram</a></li>
    </ul>
    <h3>Front-end Developer Documentation</h3>
    <ul>
      <li><a href="https://cn.vuejs.org/guide/introduction.html" target="_blank" rel="noopener">Vue3</a></li>
      <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a></li>
      <li><a href="https://element-plus.gitee.io/en-US/component/button.html#basic-usage" target="_blank" rel="noopener">Element-Plus</a></li>
    </ul>
 
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getCurrentInstance } from 'vue'
import { SAYHI_SCRIPT } from "../flow/sayHi.script"
import { ElMessageBox } from 'element-plus'



var userWalletAddress = ref("")
const name = ref('')
const myFriend = ref('')


//用户信息
const globalConfig  = getCurrentInstance()!.appContext.config.globalProperties

const setUser = ((user)=>{
  userinfo.value = user
  userWalletAddress.value =  user.addr

})
const userinfo = ref(globalConfig.$fcl.currentUser.subscribe(setUser))

// 连接钱包
 const login = ( async ()=>{
       await globalConfig.$fcl.authenticate()
       await globalConfig.$fcl.currentUser.subscribe(setUser)
})
// 断开钱包
 const logout = ( async ()=>{
        await globalConfig.$fcl.unauthenticate()
        userWalletAddress.value =  ""
})
// 链上查询
const query = ( async ()=>{
            
  if (!name.value) {
          ElMessageBox.alert('Name cannot be empty~', {
            confirmButtonText: 'OK',
            type:'error',
          })
          return 
        }
  try{ 
       let res = await globalConfig.$fcl.query({
          cadence:SAYHI_SCRIPT,
          args:(arg,t)=>[
            arg(name.value,t.String),//String,
          ],
        })
        myFriend.value = res
      }catch(err){
        console.log("err==",err)
      }
})

</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.input{
  margin: 20px 5px 0 5px;
  font-size: larger;
}
.mx-1{
  font-size: larger;
}
</style>
