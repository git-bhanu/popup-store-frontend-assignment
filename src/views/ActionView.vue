<template>
  <main class="cotainer">
      <component :is="activeComponent" />
      <Dropzone />
  </main>
</template>

<script>
import Dropzone from "@/components/ui/Dropzone.vue";
import TitleIcon from "@/components/ui/TitleIcon.vue";
import SearchAction from "@/components/actions/SearchAction.vue";
import ActionList from "@/components/actions/ActionList.vue";
import AddAction from "@/components/actions/AddAction.vue";
import { mapActions, mapGetters } from "vuex";


export default {
  data() {
    return {
      activeComponent : 'AddAction'
    }
  },
  components: {
    AddAction,
    Dropzone,
    TitleIcon,
    ActionList,
    SearchAction,
  },
  computed: {
    ...mapGetters({
      selectedActions: 'actions/selectedActions',
      addAction: 'addAction',
    })
  },
  watch: {
    addAction(value) {
      if (value) {
        this.activeComponent = "SearchAction"
      } else {
        this.activeComponent = "AddAction"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/ActionView.scss';

</style>