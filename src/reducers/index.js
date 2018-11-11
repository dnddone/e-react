import { ADD_ID, REMOVE_ID, UPDATE_ID } from '../actions';

const initialState = {
	id: '1111',
	title: 'Danze',
	status: ''
}

function reducer(state = initialState, action) {	
	switch (action.type) {
		case UPDATE_ID:
				return { id: action.payload.id, title: action.payload.title }
		
		case REMOVE_ID:
				return { id: action.payload.id, title: action.payload.title, status: false }

		case ADD_ID:
				return { id: action.payload.id, title: action.payload.title, status: true }

		default:
				return state;
	}
}

export default reducer;