<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
    <transition :name="transitionName">
      <navigation>
        <router-view/>
      </navigation>

    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        transitionName: ''
      }
    },
    watch:{

    },
    created () {
      this.$navigation.on('forward', (to, from) => {
        this.transitionName = 'turn-on'
      })
      this.$navigation.on('back', (to, from) => {
        this.transitionName = 'turn-off'
      })
    }

  }
</script>

<style>
  .turn-on-enter {
    transform: translate(100%, 0);
  }
  .turn-on-leave-to {
    /* transform: translate3d(-20%, 0, 0); */
  }
  .turn-on-enter-active,
  .turn-on-leave-active {
    transition: transform .4s ease-in-out;
  }
  .turn-off-enter {
    /* transform: translate3d(-20%, 0, 0); */
  }
  .turn-off-leave-to {
    transform: translate(100%, 0);
  }
  .turn-off-enter-active,
  .turn-off-leave-active {
    transition: transform .4s ease-in-out;
  }
  .turn-off-leave-active {
    z-index: 2;
  }
  .layui-m-layer{
    transition: 0.3s all;
  }
  #app>div{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    background-color: #fff;
  }
</style>
