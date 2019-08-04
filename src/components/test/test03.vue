<template>
  <div>

    <div @click="locaBack1">
      this is test03.vue page,click here back test02.vue page
    </div>
  </div>
</template>

<script>
    export default {
        name: "test03",
        methods : {

          locaBack1 : function () {
            this.$router.back()
          }
        }
    }
</script>

<style scoped>

</style>
