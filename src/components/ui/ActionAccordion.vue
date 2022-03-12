<template>
    <div class="actionAccordion">
        <div class="actionAccordion__head" @click="toggle">
            <TitleIcon :icon="action.icon" :title="action.name" />
        </div>
        <Transition>
            <div class="actionAccordion__body" v-show="status">
                <slot>
                </slot>
            </div>
        </Transition>

    </div>
</template>

<script>

import TitleIcon from "./TitleIcon.vue"

export default {
    data() {
        return {
            status: false,
        }
    },
    props:{
        action : {
            required: true,
            type: Object,
        }
    },
    components: {
        TitleIcon,
    },
    methods: {
        toggle() {
            this.status = !this.status
        }
    }
}
</script>

<style lang="scss" scoped>
    .actionAccordion {
        border: 1px solid $color-dark-gray;
        border-radius: $border-radius-normal;
        margin-bottom: 20px;
        background-color: $color-white;

        &__head {
            padding: 25px;
            cursor: pointer;
        }

        &__body {
            border-top: 1px solid $color-dark-gray; 
            padding: 25px;
        }

    }

    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.2s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>