
export const actionType = {
    ADD_DEVELOPER: 'ADD_DEVELOPER',
    REMOVE_DEVELOPER: 'REMOVE_DEVELOPER'
}


export const DeveloperReducer = (state, action) => {
    switch (action.type) {
        case actionType.ADD_DEVELOPER:
            return [...state, {
                name:action.payload.name,
                food:action.payload.food,
                drink:action.payload.drink,
                language:action.payload.language,
                technique:action.payload.technique,
                id: Math.floor(100+(Math.random() * 100)) 
            }];
        case actionType.REMOVE_DEVELOPER :
            return state.filter(developer => developer.id !== action.payload.id)

            default :
            return state;
    }
}