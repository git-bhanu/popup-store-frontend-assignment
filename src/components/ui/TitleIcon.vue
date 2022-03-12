<template>
    <div class="TitleIcon" :style="{color: color}">
        <font-awesome-icon :icon="['fas', icon]" class="TitleIcon__icon" @click="click"/>
        <span class="TitleIcon__title">
            {{ title }}
        </span>
    </div>
</template>


<script>
export default {
    props : {
        icon : {
            required : true,
            type: String,
        },
        title : {
            required : true,
            type: String,
        },
        color : {
            default : 'rgba(71, 84, 97, 1)',
            type: String,
        }
    },
    methods: {
        click(e) {
            this.$emit('iconclick', e)
        }
    },
    emits: ['iconclick']
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/ui/TitleIcon.scss';
</style>