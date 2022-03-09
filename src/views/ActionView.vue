<template>
  <main class="cotainer">
    <Sidebar>
      <template #header>
        Header
      </template>
        Body
      <template #footer>
        Footer
      </template>  
    </Sidebar>
    
  </main>
</template>

<script>
import Sidebar from "@/components/ui/Sidebar.vue";

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/ActionView.scss';

</style>