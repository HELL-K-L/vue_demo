<template>
  <div class="home">
    <Child/>
    <p>{{count}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" :btnName="btnName" @ons="changeCount"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';
import Child from '@/components/Child';

export default {
  name: 'home',
  data() {
    return {
      btnName: '我是一个按钮',
      count: 0,
    };
  },
  components: {
    HelloWorld,
    Child,
  },
  methods: {
    changeCount() {
      this.count += 2;
    },
  },
};
</script>
