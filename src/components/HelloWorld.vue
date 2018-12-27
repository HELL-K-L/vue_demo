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
import axios from "axios";

export default {
  name: "ddd",
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  mounted() {
    this.getHomeData();
  },
  methods: {
    getHomeData() {
      axios.get("/API/kylin", { params: { ID: 12 } }).then(res => {
        console.log(res);
      });
    },
    gohome() {
      console.log(this.$route.path);
      this.$router.push("/about");
    }
  }
};
</script>


