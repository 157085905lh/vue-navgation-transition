<template>
	<div @click="locaGo">
    <p>this is test01.vue page,click here go test02.vue page</p>

  </div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
    methods : {
      locaGo : function () {
        this.$router.push({
          path : "/test02"
        })
      }
    }
	}
</script>

<style>

</style>
