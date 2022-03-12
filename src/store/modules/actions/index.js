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
                    icon: 'tag',
                    selected: true,
                    type: 'native'
                },
                {
                    id: 2,
                    slug: 'tag_order',
                    name: 'Tag order',
                    icon: 'bolt',
                    selected: false,
                    type: 'native'
                },
                {
                    id: 3,
                    slug: 'send_email_notification',
                    name: 'Send email notification',
                    icon: 'envelope-open',
                    selected: true,   
                    type: 'native'
                },
                {
                    id: 4,
                    slug: 'select_digital_product',
                    name: 'Select digital product',
                    icon: 'bolt',
                    selected: false,
                    type: 'native'
                },
                {
                    id: 4,
                    slug: 'make_http_request',
                    name: 'Select digital product',
                    icon: 'bolt',
                    selected: false,
                    type: 'native'
                }

            ]
        }
    },
    mutations,
    actions,
    getters,
}