<template>
    <div class="button" :class="type" @click="click">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props : {
        type : {
            type: String,
            default: 'secondary'
        },
    },
    methods: {
        click(e) {
            this.$emit('buttonclick', e)
        }
    },
    emits: ['buttonclick']
}
</script>

<style lang="scss" scoped>
.button {
    width: 100%;
    background-color: $color-white;
    font-size: $normal;
    border-radius: $border-radius-small;
    border: 1px solid $color-light-gray;
    padding: 14px 10px;
    color: $color-text-normal;
    font-weight: $font-bold;
    text-align: center;
    cursor: pointer;
    @include easy-transition;
    margin: 0 5px;

    &:hover {
        background-color: $color-light-gray;
    }

    &.primary {
        background-color: $color-primary;
        color: $color-white;
        border-color: $color-primary;

        &:hover {
            background-color: rgba($color-primary, 0.8);
        }
    }
}
</style>