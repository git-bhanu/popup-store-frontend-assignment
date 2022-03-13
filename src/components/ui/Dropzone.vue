<template>
    <div class="dropzone" :style="{ backgroundColor : selectedActions.length == 0 ? 'white' : 'rgba(249, 249, 249, 1)'  }">
        <div class="dropzone__empty" v-if="selectedActions.length == 0">
            Your actions will<br>appear here
        </div>
        <div class="dropzone__body">
                <ActionAccordion  v-for="action in selectedActions" :key="action.id" :action="action">
                    <component :is="action.slug + 'Dropzone'" />
                </ActionAccordion>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ActionAccordion from './ActionAccordion.vue'

import TagCustomerDropzone from '../actions/individual/TagCustomerDropzone.vue'

export default {
    components:{
        ActionAccordion,
        TagCustomerDropzone,
    },
    computed : {
        ...mapGetters({
            selectedActions: 'actions/selectedActions',
        })
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/ui/Dropzone.scss';
</style>