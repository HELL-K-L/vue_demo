<template>
  <div>
    <img src="../assets/logo.png">
    <el-button @click="clickHandle">{{btnName}}</el-button>
    <el-button type="primary" @click="clickHandle1">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger" @click="gohome">危险按钮</el-button>
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios';
import { SOME_MUTATION } from '@/store/mutation-types';
import Event from './bus';

export default {
  mounted() {
    console.log(this.$store.state.count);
    // this.getHomeData();
  },
  props: ['btnName', 'msg'],
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
    clickHandle() {
      Event.$emit('ss');
    },
    clickHandle1() {
      this.$emit('ons');
    },
  },
};
</script>


