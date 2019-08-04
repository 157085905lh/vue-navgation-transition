<template>
  <div>
    <div @click="locaGo">
      this is test02.vue page,click here go test03.vue page
    </div>
    <div @click="locaBack">
      this is test02.vue page,click here back test01.vue page
    </div>
  </div>

</template>

<script>
    export default {
        name: "test02",
        methods : {
          locaGo : function () {
            this.$router.push({
              path : "/test03"
            })
          },
          locaBack : function () {
            this.$router.back();
          }
        }
    }
</script>

<style scoped>

</style>
