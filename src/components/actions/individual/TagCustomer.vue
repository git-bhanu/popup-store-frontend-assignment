<template>
    <Sidebar>
        <template #header>
          <TitleIcon :icon="'angle-left'" :title="'Tag Customer'" @iconclick="iconclick"/>
          <div @click="togglePopup">
            <font-awesome-icon :icon="['fas', 'ellipsis']" class="icon alt"/>
          </div>
            <ActionPopup @delete="handleDelete" @inactive="handleInactive" @close="closePopup" v-if="popup"/>
      </template>
        
    </Sidebar>
</template>

<script>
import TitleIcon from "@/components/ui/TitleIcon.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
import ActionPopup from "@/components/actions/ActionPopup.vue";

import { debounce } from "debounce";
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            popup: false,
        }
    },
    components: {
        TitleIcon,
        ActionPopup,
        Sidebar
    },
    mounted() {
    },
    methods : {
        ...mapActions({
            updateActionState: 'updateActionState',
            addAction: 'actions/addAction',
            deleteAction: 'actions/deleteAction',
            inactiveAction: 'actions/inactiveAction',
        }),
        handleDelete(e) {
            this.deleteAction(1);
            this.updateActionState('AddAction')
        },
        handleInactive(e) {
            this.inactiveAction(1)
            this.updateActionState('AddAction')
        },
        togglePopup() {
            this.popup = !this.popup
        },
        iconclick() {
            this.updateActionState('AddAction')
        },
        closePopup() {
            this.popup = false;
        }

    },
    computed: {
        ...mapGetters({
            actions: 'actions/actions',  
        }),
        nativeFilteredActions() {
            return this.filterActions.filter((action) => {
                return action.type === 'native';
            })
        },
        externalFilteredActions() {
            return this.filterActions.filter((action) => {
                return action.type === 'external';
            })
        }        
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/actions/SearchAction';
</style>