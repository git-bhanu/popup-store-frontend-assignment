<template>
    <Sidebar>
        <template #header>
          <TitleIcon :icon="'angle-left'" :title="'Add Actions'" @iconclick="iconclick"/>
          <div>
          </div>
      </template>

        <div class="searchAction">
            <div class="searchAction__searchbar">
                <input type="text" @input="debounceInput" placeholder="Search actions..." class="searchAction__searchbar__input">
            </div>

            <div class="searchAction__allActions" v-show="filterActions.length > 0">
                <div class="searchAction__allActions__Group" v-show="nativeFilteredActions.length > 0">
                    <p class="searchAction__allActions__Group__title">Native Popup actions</p>
                    <SelectSingleAction v-for="action in nativeFilteredActions" :key="action.id" :action="action" :checked="action.selected"
                    @checked="handleChecked">
                    </SelectSingleAction>
                </div>

                <div class="searchAction__allActions__Group" v-show="externalFilteredActions.length > 0">
                    <p class="searchAction__allActions__Group__title">Integrations with other apps</p>
                    <SelectSingleAction v-for="action in externalFilteredActions" :key="action.id" :action="action" :checked="action.selected" 
                    @checked="handleChecked">
                    </SelectSingleAction>
                </div>
            </div>

            <div v-show="filterActions.length === 0">
                <p>No results found.</p>
            </div>
        </div>

        <template #footer v-if="selectedActions.length > 0">
            <Button @buttonclick="iconclick">
                Cancel
            </Button>
            <Button :type="'primary'" @buttonclick="confirm">
                Confirm
            </Button>
        </template>       
    </Sidebar>
</template>

<script>
import SelectSingleAction from "@/components/actions/SelectSingleAction.vue"
import TitleIcon from "@/components/ui/TitleIcon.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
import Button from "@/components/ui/Button.vue";

import { debounce } from "debounce";
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            search: '',
            filterActions: [],
            selectedActions : [],
        }
    },
    components: {
    SelectSingleAction,
    Sidebar,
    TitleIcon,
    Button
},
    mounted() {
        this.filterActions = this.actions
        this.filterActions.forEach(element => {
            if(element.selected) {
                this.selectedActions.push(String(element.id))
            }
        });
    },
    methods : {
        ...mapActions({
            updateActionState: 'updateActionState',
            addAction: 'actions/addAction'
        }),
        filteredActions(payload) {
            let text = payload.toLowerCase().split(' ');
            this.filterActions = this.actions.filter(function(item) {
            return text.every(function(el) {
                return item.name.toLowerCase().indexOf(el) > -1;
                });
            });
            
        },
        debounceInput: debounce(function (e) {
            this.filteredActions(e.target.value)
        }, 300),
        iconclick(e) {
            this.updateActionState('AddAction')
        },
        confirm() {
            this.addAction(this.selectedActions)
            this.updateActionState('AddAction')
        },
        handleChecked(e) {
            if (this.selectedActions.includes(e.id)) {
                this.selectedActions.splice(this.selectedActions.indexOf(e.id), 1)
            } else {
                this.selectedActions.push(e.id)
            }
        }
    },
    computed: {
        ...mapGetters({
            actions: 'actions/actions',  
        }),
        nativeFilteredActions() {
            return this.filterActions.filter((action) => {
                return action.type === 'native';
            })
        },
        externalFilteredActions() {
            return this.filterActions.filter((action) => {
                return action.type === 'external';
            })
        }        
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/actions/SearchAction';
</style>