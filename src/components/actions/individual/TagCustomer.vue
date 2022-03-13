<template>
    <Sidebar>
        <template #header>
          <TitleIcon :icon="'angle-left'" :title="'Tag Customer'" @iconclick="iconclick"/>
          <div @click="togglePopup">
            <font-awesome-icon :icon="['fas', 'ellipsis']" class="icon alt"/>
          </div>
            <ActionPopup @delete="handleDelete" @inactive="handleInactive" @close="closePopup" v-if="popup"/>
        </template>

        <div class="tagCustomer">
            <div class="tagCustomer__addbar">
                <input type="text" @keyup.enter="addTagCustomerLocal" v-model="value" placeholder="Add Tag..." class="tagCustomer__addbar__input">
            </div>

            <div class="tagCustomer__allCustomer" v-show="tagCustomers.length > 0">
                <SingleCustomer v-for="( customer, index) in tagCustomers" 
                :key="index" 
                :customer="customer"
                :onlyShow="false"
                @click="removeCustomerLocal">
                </SingleCustomer>
            </div>

        </div>


    </Sidebar>
</template>

<script>
import TitleIcon from "@/components/ui/TitleIcon.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
import ActionPopup from "@/components/actions/ActionPopup.vue";

import { debounce } from "debounce";
import { mapActions, mapGetters } from 'vuex';
import SingleCustomer from "./SingleCustomer.vue";

export default {
    data() {
        return {
            popup: false,
            value: '',
        }
    },
    components: {
    TitleIcon,
    ActionPopup,
    Sidebar,
    SingleCustomer,
},
    mounted() {
    },
    methods : {
        ...mapActions({
            updateActionState: 'updateActionState',
            addAction: 'actions/addAction',
            deleteAction: 'actions/deleteAction',
            inactiveAction: 'actions/inactiveAction',
            addTagCustomer: 'actions/addTagCustomer',
            removeCustomer: 'actions/removeCustomer',
        }),
        handleDelete(e) {
            this.deleteAction(1);
            this.updateActionState('AddAction')
        },
        handleInactive(e) {
            this.inactiveAction(1)
            this.updateActionState('AddAction')
        },
        togglePopup() {
            this.popup = !this.popup
        },
        iconclick() {
            this.updateActionState('AddAction')
        },
        closePopup() {
            this.popup = false;
        },
        addTagCustomerLocal() {
            this.addTagCustomer({
                name : this.value,
                color: '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
            })
            this.value = '';
        },
        removeCustomerLocal(index) {
            this.removeCustomer(index)
        }
    },
    computed: {
        ...mapGetters({
            actions: 'actions/actions',
            tagCustomers: 'actions/tagCustomers' 
        }),    
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/actions/TagCustomer';
</style>