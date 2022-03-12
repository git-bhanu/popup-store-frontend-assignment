export default {
    addAction(state, payload) {
        let data = state.actions.map( (item) => {
            let newItem = item
            if( payload.includes(String(item.id))) {
                newItem.selected = true
            } else {
                newItem.selected = false
                newItem.inactive = false
            }
            return newItem
        })

        state.actions = data
    },
    deleteAction(state, payload) {
        let data = state.actions.map( (item) => {
            let newItem = item
            if( payload == item.id ) {
                newItem.selected = false
                newItem.inactive = false
            }
            return newItem
        })

        state.actions = data
    },    
    inactiveAction(state, payload) {
        let data = state.actions.map( (item) => {
            let newItem = item
            if( payload == item.id ) {
                newItem.inactive = true
            }
            return newItem
        })

        state.actions = data
    }

}