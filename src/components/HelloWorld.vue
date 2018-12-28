<template>
  <div>
    <img src="../assets/logo.png">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger" @click="gohome">危险按钮</el-button>
  </div>
</template>

<script>
import axios from 'axios';
import { SOME_MUTATION } from '@/store/mutation-types';

export default {
  name: 'ddd',
  mounted() {
    console.log(this.$store.state.count);
    // this.getHomeData();
  },
  methods: {
    getHomeData() {
      axios.get('/API/kylin', { params: { ID: 12 } }).then(res => {
        console.log(res);
      });
    },
    gohome() {
      this.$router.push('/about');
      this.$store.commit({
        type: SOME_MUTATION,
        amount: 10,
      });
    },
  },
};
</script>


