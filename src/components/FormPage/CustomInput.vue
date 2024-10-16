<template>
  <div style="display: flex; gap: 10px;">
    <Input :value="value1" @change="handleValue1Change" />
    <Input :value="value2" @change="handleValue2Change" />
    <span>{{ suffix }}</span>
  </div>
</template>

<script>
import { Input } from '@formily/element';

export default {
  components: {
    Input
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    onChange: {
      type: Function,
      default: () => {},
    },
    suffix: {
      type: String,
      default: "",
    },
  },
  name: "CustomInput",
  data() {
    return {
      value1: '',
      value2: '',
    };
  },
  methods: {
    handleValue1Change(newVal) {
      console.log('----- custom input handleValue1Change -----', newVal)
      this.onChange(newVal + ',' + this.value2)
    },
    handleValue2Change(newVal) {
      console.log('----- custom input handleValue2Change -----', newVal)
      this.onChange(this.value1 + ',' + newVal)
    }
  },
  watch: {
    value(newVal) {
      console.log('----- value -----', newVal)
      this.value1 = newVal.split(",")[0] || '';
      this.value2 = newVal.split(",")[1] || '';
    },
    value1(newVal) {
      console.log('----- value1 -----', newVal)
      this.onChange(newVal + ',' + this.value2)
    },
    value2(newVal) {
      this.onChange(this.value1 + ',' + newVal)
    }
  },
};
</script>
