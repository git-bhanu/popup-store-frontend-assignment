export default {
    addAction(state, payload) {
        let data = state.actions.map( (item) => {
            let newItem = item
            if( payload.includes(String(item.id))) {
                newItem.selected = true
            } else {
                newItem.selected = false
            }
            return newItem
        })

        console.log(Array.from(data))
        state.actions = data
    }
}