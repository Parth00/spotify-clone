export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER DEVELOPING
    token: 'BQAIgQKa4vo_1MkYDIApRzc3s9oXITUq88y73n5yItQXQ1J8g0lXVd9nkfV6TKPjdsLQcwZabQuqwH82sAJoBz1w081FZIQ8YkopPbgtFiQ_U8C1dojuIcuOaTS5p0lQxrWOiwbyFVv3xxV_jO3wiFkZRXBe'
    // token: null
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;