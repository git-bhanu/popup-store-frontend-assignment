<template>
    <ul class="actionPopup" v-click-away="onClickAway">
        <li class="actionPopup__item actionPopup__inactive" @click="raiseInactive">
        <font-awesome-icon :icon="['fas', 'toggle-off']" class="actionPopup__icon"  />
            Make inactive
        </li>
        <li class="actionPopup__item actionPopup__delete"  @click="raisedelete">
        <font-awesome-icon :icon="['fas', 'trash-can']" class="actionPopup__icon"  />
            Delete action
        </li>
    </ul>
</template>

<script>
export default {
    emits: [
        'delete', 'inactive', 'close'
    ],
    methods : {
        raiseInactive() {
            this.$emit('inactive')
        },
        raisedelete() {
            this.$emit('delete')
        },
        onClickAway() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
    .actionPopup {
        position: absolute;
        background-color: $color-white;
        border-radius: $border-radius-normal;
        box-shadow: $shadow-normal;
        cursor: pointer;
        @include easy-transition;
        overflow: hidden;
        right: 20px;
        top: 50px;

        &__item {
            @include bold-text;
            padding: 12px 20px;
            display: flex;
            align-items: center;

            &:hover {
                background-color: $color-lightest-gray;
            }            
        }

        &__delete {
            color: $color-delete;
        }
        
        &__icon {
            width: 30px;  
        }
    }
</style>