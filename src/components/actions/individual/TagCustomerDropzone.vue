<template>
    <div class="tagCustomer">
        <div class="tagCustomer__allCustomer" v-show="tagCustomers.length > 0">
            <SingleCustomer v-for="( customer, index) in tagCustomers" :key="index" 
            :customer="customer" 
            :onlyShow="true">
            </SingleCustomer>
        </div>
        <div v-show="tagCustomers.length == 0">
            No Customers
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SingleCustomer from "./SingleCustomer.vue";

export default {
    data() {
        return {
            popup: false,
            value: '',
        }
    },
    components: {
        SingleCustomer,
    },
    computed: {
        ...mapGetters({
            tagCustomers: 'actions/tagCustomers' 
        }),
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/actions/TagCustomer';
</style>