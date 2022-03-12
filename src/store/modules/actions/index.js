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
                    slug: 'tag_customer',
                    name: 'Tag customer',
                    icon: 'user-tag',
                    selected: false,
                    type: 'native'
                },
                {
                    id: 2,
                    slug: 'tag_order',
                    name: 'Tag order',
                    icon: 'tags',
                    selected: false,
                    type: 'native'
                },
                {
                    id: 3,
                    slug: 'send_email_notification',
                    name: 'Send email notification',
                    icon: 'envelope-open',
                    selected: false,   
                    type: 'native'
                },
                {
                    id: 4,
                    slug: 'select_digital_product',
                    name: 'Select digital product',
                    icon: 'file-invoice',
                    selected: false,
                    type: 'native'
                },
                {
                    id: 5,
                    slug: 'make_https_request',
                    name: 'Make HTTPS request',
                    icon: 'lock',
                    selected: false,
                    type: 'native'
                },                
                {
                    id: 6,
                    slug: 'send_data_to_google_sheet',
                    name: 'Send data to Google Sheet',
                    icon: 'paper-plane',
                    selected: false,
                    type: 'external'
                },
            ]
        }
    },
    mutations,
    actions,
    getters,
}