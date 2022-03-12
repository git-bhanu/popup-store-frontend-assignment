<template>
    <div class="actions">
        <h2 class="actions__title">Assigned actions</h2>
        <p class="actions__description">The selected actions will run in the background when the user journey gets to this element</p>
    </div>    

    <div class="actionList">
        <SingleAction v-for="action in selectedActions" :key="action.id" :action="action"/>
        <button class="actionList__button" @click="updateActionState('SearchAction')">
        Add actions
        <font-awesome-icon :icon="['fas', 'plus']" class="icon alt"/>
        </button>
    </div>
</template>


<script>
import SingleAction from "@/components/actions/SingleAction.vue";

import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        SingleAction
    },
    methods: {
        ...mapActions({
        updateActionState: 'updateActionState'
        })        
    },
    computed: {
        ...mapGetters({
        selectedActions: 'actions/selectedActions',
        })        
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/actions/ActionList';

</style>