export default {
    selectedActions (state) {
        let actions = state.actions;
        let filteredActions = actions.filter((action) => {
            return action.selected;
        })
        return filteredActions;
    },
    actions (state) {
        return state.actions
    },
    tagCustomers(state) {
        return state.tagCustomers
    }
}