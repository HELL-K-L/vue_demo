<template>
  <p>点击次数: {{count}}</p>
</template>
<script>
import Event from './bus';

export default {
  name: 'Child',
  data() {
    return {
      count: 0,
    };
  },
  created() {
    Event.$on('ss', () => {
      ++this.count;
    });
  },
};
</script>