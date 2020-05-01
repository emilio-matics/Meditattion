const container = [{text:"first item"}];


const Labels = (state = container, action) => {
    switch (action.type) {
        case 'ADD_LABEL':
            return Object.assign({}, state, {
                container: state.container.concat(action.payload)
            });
        case 'DELETE_LABEL':
            return state;

        default:
            return state
    }
}

export default Labels