<template>
    <label class="selectSingleAction" :for="action.id">
        <TitleIcon :title="action.name" :icon="action.icon"/>
        <input type="checkbox" :name="action.id" :id="action.id" @change="raiseEvent" :data-id="action.id" :checked="checked">
    </label>
</template>
<script>

import TitleIcon from "@/components/ui/TitleIcon.vue";

export default {
    props: {
        action : {
            required: true,
            type: Object
        },
        checked : {
            type: Boolean,
            default: false,
        }
    },
    components : {
        TitleIcon,
    },
    methods: {
        raiseEvent(e) {
            this.$emit('checked', {
                value: e.target.checked,
                id: e.target.getAttribute('data-id')
            })
        }
    },
    emits: ['checked']
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/components/actions/SelectSingleAction';
</style>