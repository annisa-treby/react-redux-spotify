const initialState = {
    form: {
        id: "",
        name: "",
        releaseYear: "",
    },
    albums: [],
};

function AlbumReducer(state=initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case 'HANDLE_INPUT_CHANGES' :
            const {inputName, inputValue} = payload;
            const form = {...state.form}
            form[inputName]=inputValue;

            return {...state, form:{...form}}

        case 'CREATE_ALBUM' :
            return {...state, albums: state.albums.concat([payload])}

        case 'UPDATE_ALBUM' :
            return {...state, albums: state.albums.map((album)=>album.id===payload.id ? payload : album)}

        case 'RESET_FORM' :
            return {...state, form: {id: "", name: "", releaseYear: ""}}

        case 'HANDLE_DELETE_BUTTON' :
            return {...state, albums: state.albums.filter((album)=>album.id !== payload)}

        case 'HANDLE_EDIT_BUTTON' :
            return {...state, form: state.albums.find((album)=>album.id===payload)}

        default :
            return {...state}
    }
}

export default AlbumReducer