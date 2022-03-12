<template>
  <main class="cotainer">
    <Sidebar>
      <template #header>
          <TitleIcon :icon="'bolt'" :title="'Action'" :color="'#F9B506'" />
          <div>
            <font-awesome-icon :icon="['fas', 'ellipsis']" class="icon alt"/>
          </div>

      </template>
        <div class="actions">
          <h2 class="actions__title">Assigned actions</h2>
          <p class="actions__description">The selected actions will run in the background when the user journey gets to this element</p>

          <button class="actions__button">
            Add actions
            <font-awesome-icon :icon="['fas', 'plus']" class="icon alt"/>
          </button>
        </div>


      <template #footer>
        Footer
      </template>
    </Sidebar>
    
  </main>
</template>

<script>
import Sidebar from "@/components/ui/Sidebar.vue";
import TitleIcon from "@/components/ui/TitleIcon.vue";


export default {
  components: {
    Sidebar,
    TitleIcon
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/ActionView.scss';

</style>