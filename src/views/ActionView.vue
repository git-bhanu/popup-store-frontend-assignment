<template>
  <main class="cotainer">
    <Sidebar>
      <template #header>
          <TitleIcon :icon="'bolt'" :title="'Action'" :color="'#F9B506'" />
          <div>
            <font-awesome-icon :icon="['fas', 'ellipsis']" class="icon alt"/>
          </div>

      </template>
        <ActionList/>
      <template #footer>
        Footer
      </template>
    </Sidebar>
    <Dropzone/>
  </main>
</template>

<script>
import Sidebar from "@/components/ui/Sidebar.vue";
import Dropzone from "@/components/ui/Dropzone.vue";
import TitleIcon from "@/components/ui/TitleIcon.vue";

import ActionList from "@/components/actions/ActionList.vue";
import { mapGetters } from "vuex";


export default {
  components: {
    Sidebar,
    Dropzone,
    TitleIcon,
    ActionList,
  },
  computed: {
    ...mapGetters({
      selectedActions: 'actions/selectedActions',
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/ActionView.scss';

</style>