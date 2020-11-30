<template>
  <!-- element-ui -->
  <div style="margin:0 auto">
<el-row v-for="(o, index) in 3" :key="o" :offset="index> 0 ? 3 : 0">
  <el-col :span="24" class="docList">
    <el-card :body-style="{ padding: '0px' }">
      <el-container direction="vertical">
    <el-row>
      <el-col :span="3"><div><img src="../assets/doc1.png" class="image"></div></el-col>
      <el-col :span="4">
        <p style="font-size:20px;padding:15px;color:orange">王医生</p>
        <p style="font-size:15px;color:gray">血液内科</p>
      </el-col>
      <el-col :span="2">
        <p style="font-size:15px;padding:16px 5px 16px 0px;color:black">主任医师</p>
      </el-col>
      <el-col :span="1"><el-divider direction="vertical" class="divider"></el-divider></el-col>
      <el-col :span="10">
        <div style="font-size:15px; padding:15px; text-align:left">
        擅长:血液病和放射病，造血干细胞移植诊治。
        </div>
      </el-col>
      <el-col :span="1"><el-divider direction="vertical" class="divider"></el-divider></el-col>
      <el-col :span="3"><div style="padding:25% 5% 25% 5%">
        <el-button type="primary" plain @click="$goRoute({name:'DoctorDetail'})">挂号</el-button>
      </div></el-col>
    </el-row>
      </el-container>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<style scoped>
  .divider {
    height:7.2em;
  }
  .docList {
    padding-left:20%;
    padding-right:20%;
  }
  .el-row {
    text-align: center;
    padding: 10px;
  }
  .el-col {
    text-align: center;
  }
  .image{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>
