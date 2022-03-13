import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            actions : [
                {
                    id: 1,
                    slug: 'TagCustomer',
                    name: 'Tag customer',
                    icon: 'user-tag',
                    selected: false,
                    type: 'native',
                    inactive: false,
                },
                {
                    id: 2,
                    slug: '',
                    name: 'Tag order',
                    icon: 'tags',
                    selected: false,
                    type: 'native',
                    inactive: false,
                },
                {
                    id: 3,
                    slug: '',
                    name: 'Send email notification',
                    icon: 'envelope-open',
                    selected: false,   
                    inactive: false,
                    type: 'native',
                },
                {
                    id: 4,
                    slug: '',
                    name: 'Select digital product',
                    icon: 'file-invoice',
                    selected: false,
                    inactive: false,
                    type: 'native',
                },
                {
                    id: 5,
                    slug: 'MakeHttpsRequest',
                    name: 'Make HTTPS request',
                    icon: 'lock',
                    selected: false,
                    type: 'native',
                    inactive: false,
                },                
                {
                    id: 6,
                    slug: '',
                    name: 'Send data to Google Sheet',
                    icon: 'paper-plane',
                    selected: false,
                    type: 'external',
                    inactive: false,
                },
            ],
            tagCustomers: []
        }
    },
    mutations,
    actions,
    getters,
}