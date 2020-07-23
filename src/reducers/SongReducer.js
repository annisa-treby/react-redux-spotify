const initialState = {
    form: {
        id: "",
        title: "",
        genre: "",
        album: "",
        artist: "",
        duration: "",
        releaseYear: "",
    },
    songs:[],
    keywords:"",
};

function SongReducer(state = initialState, action) {
        const {type, payload} = action;

        switch (type) {
            case 'CREATE_SONG' :
                return {...state, songs: state.songs.concat([payload])};

            case 'UPDATE_SONG' :
                return {...state, songs: state.songs.map((song)=> song.id === payload.id ? payload : song)};

            case 'RESET_FORM' :
                return {...state, form: {title: "", genre: "", album: "", artist: "", duration: "", releaseYear: ""}}

            case 'HANDLE_INPUT_CHANGES' :
                const {inputName, inputValue} = payload;
                const form = {...state.form}
                form[inputName] = inputValue
                return {...state, form:{...form}}

            case 'HANDLE_EDIT_BUTTON' :
                return {...state, form: state.songs.find((song)=>song.id===payload)}

            case 'HANDLE_DELETE_BUTTON' :
                return {...state, songs: state.songs.filter((song)=>song.id!== payload)}

            case 'SEARCH' :
                return {...state, keywords:payload}
            default:
                return {...state}
        }
}

export default SongReducer;