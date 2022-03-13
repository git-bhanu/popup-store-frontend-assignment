<template>
    <div class="tagCustomer__customer" 
    :style="{ 
        backgroundColor: (onlyShow ? 'white' : false),
        border: (onlyShow ? '1px solid rgba(227, 229, 232, 1)' : false)
      }">
        <div class="tagCustomer__name">
        <div class="tagCustomer__name__color" :style="{backgroundColor: customer.color }"></div>
            {{ customer.name }}
        </div>
        <font-awesome-icon :icon="['fas', 'trash-can']"
        v-if="!onlyShow"/>
    </div>    
</template>

<script>
export default {
    props: {
        customer: {
            required: true,
            type: Object,
        },
        onlyShow: {
            require: false,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.tagCustomer {
        &__customer {
        background-color: $color-lightest-gray;
        padding: 15px;
        border-radius: $border-radius-small;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        margin-bottom: 15px;
    }

    &__name {
        display: flex;
        align-items: center;

        &__color {
            width: 20px;
            height: 20px;
            border-radius: $border-radius-normal;
            margin-right: 10px;
        }
    }
}
</style>