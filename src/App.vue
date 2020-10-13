<template>
  <div id="app">
      <Sidebar />
      <WrapperBody />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import WrapperBody from './components/WrapperBody'
export default {
  components: {Sidebar, WrapperBody}
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  outline: none
#app
  display: flex
  height: 100vh
  width: 100vw
  overflow: hidden
</style>
