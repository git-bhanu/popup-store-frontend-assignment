export default {
    selectedActions (state) {
        let actions = state.actions;
        let filteredActions = actions.filter((action) => {
            return action.selected;
        })
        return filteredActions;
    }
}