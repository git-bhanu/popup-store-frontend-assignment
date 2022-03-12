<template>
  <main class="cotainer">
      <component :is="addAction" />
      <Dropzone />
  </main>
</template>

<script>
import Dropzone from "@/components/ui/Dropzone.vue";
import TitleIcon from "@/components/ui/TitleIcon.vue";
import SearchAction from "@/components/actions/SearchAction.vue";
import ActionList from "@/components/actions/ActionList.vue";
import AddAction from "@/components/actions/AddAction.vue";
import TagCustomer from '@/components/actions/individual/TagCustomer.vue';
import MakeHttpsRequest from '@/components/actions/individual/MakeHttpsRequest.vue';
import { mapGetters } from "vuex";


export default {
  data() {
    return {
    }
  },
  components: {
    AddAction,
    Dropzone,
    TitleIcon,
    ActionList,
    SearchAction,
    TagCustomer,
    MakeHttpsRequest,
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