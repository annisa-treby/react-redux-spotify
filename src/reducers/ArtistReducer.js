const initialState = {
        form: {
            id: "",
            name: "",
            gender:"",
            originPlace: "",
            debutYear: "",
        },
        artists: [],
}

function ArtistReducer(state=initialState, action) {

    const {type, payload} = action;

    switch (type) {
        case 'HANDLE_INPUT_CHANGES' :
            const {inputName, inputValue} = payload;
            const form = {...state.form}
            form[inputName] = inputValue

            return {...state, form:{...form}}

        case 'CREATE_ARTIST' :
            return {...state, artists: state.artists.concat([payload])}

        case 'UPDATE_ARTIST' :
            return {...state, artists: state.artists.map((artist)=>artist.id===payload.id ? payload : artist)}

        case 'RESET_FORM' :
            return {...state, form: {id: "", name: "", gender:"", originPlace: "", debutYear: ""}}

        case 'HANDLE_EDIT_BUTTON' :
            return {...state, form: state.artists.find((artist)=> artist.id === payload)}

        case 'HANDLE_DELETE_BUTTON' :
            return {...state, artists: state.artists.filter((artist)=>artist.id!==payload)}

        default :
            return {...state}
    }

}

export default ArtistReducer;