<template>
    <button class="singleAction">
        <TitleIcon :title="action.name" :icon="action.icon"/>
    </button>
</template>

<script>

import TitleIcon from "@/components/ui/TitleIcon.vue";


export default {
    props: {
        action : {
            required: true,
            type: Object
        }
    },
    components : {
        TitleIcon,
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/components/actions/SingleAction';
</style>