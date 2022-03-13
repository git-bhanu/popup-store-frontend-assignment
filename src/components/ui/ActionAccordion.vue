<template>
    <div class="actionAccordion" :class="{ 'actionAccordion--active' : isActiveComponent }">
        <div class="actionAccordion__head" @click="toggle">
            <TitleIcon :icon="action.icon" :title="action.name" :color=" action.inactive ? 'rgba(194, 204, 214, 1)' : 'rgba(71, 84, 97, 1)'"/>
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
import { mapGetters } from 'vuex'

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
            if(this.action.inactive) {
                alert('Can not open inactive action')
                return
            }
            this.status = !this.status
        }
    },
    watch: {
       addAction(val) {
           if (this.addAction === this.action.slug) {
               this.status = true;
           }
       },
       action(val) {
           if(val.inactive) {
               this.status = false
           }
       }
    },
    computed: {
        ...mapGetters({
            addAction: 'addAction'
        }),
        isActiveComponent() {
            return this.addAction === this.action.slug
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

        &.actionAccordion--active {
            @include primary-outline
        }

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