export function TasksReducer (state: any = [], {type, payload}) {
    switch (type) {
        case 'ADD_TASKS':
            return payload;
        case 'CREATE_TASK':
            return [...state, payload];
        case 'UPDATE_TASK':
            return state.map(task => {
                return task.token === payload.token ? Object.assign({}, task, payload): task;
            });
        case 'DELETE_TASK':
            return state.filter(task => {
                return task.token !== payload.token;
            });
        default:
            return state;
    }
}
