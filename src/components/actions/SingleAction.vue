<template>
    <button class="singleAction" 
    @click="action.slug != '' ? updateActionState(action.slug) : alert()"
    :class="{'inactive' : action.inactive}"
    >
        <TitleIcon :title="action.name" :icon="action.icon" :color=" action.inactive ? 'rgba(194, 204, 214, 1)' : 'rgba(71, 84, 97, 1)'" />
        <div v-if="action.inactive" class="singleAction__inactive">
            <font-awesome-icon :icon="['fas', 'circle']" />
            Inactive
        </div>
    </button>
</template>

<script>

import TitleIcon from "@/components/ui/TitleIcon.vue";
import { mapActions } from 'vuex';


export default {
    props: {
        action : {
            required: true,
            type: Object
        }
    },
    components : {
        TitleIcon,
    },
    methods : {
        ...mapActions({
            updateActionState: 'updateActionState',
        }),
        alert() {
            console.log('asd')
            window.alert('Design not for this action.')
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/components/actions/SingleAction';
</style>