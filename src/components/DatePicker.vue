<template>
  <VueDatePicker v-model="date" :format="format"></VueDatePicker>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
    };
  },
  methods:{
  	format(){
  	const date = new Date()
  	const day = date.getDate();
  	const month = date.getMonth() + 1;
  	const year = date.getFullYear();
  	console.log(`${day}/${month}/${year}`)

  	return `${day}/${month}/${year}`;
	}
  }
}
</script>