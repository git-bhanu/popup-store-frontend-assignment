<template>
    <div class="dropzone" :style="{ backgroundColor : selectedActions.length == 0 ? 'white' : 'rgba(249, 249, 249, 1)'  }">
        <div class="dropzone__empty" v-if="selectedActions.length == 0">
            Your actions will<br>appear here
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
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