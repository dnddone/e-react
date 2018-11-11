export const ADD_ID = 'ADD_ID';
export const REMOVE_ID = 'REMOVE_ID';
export const TOGGLE_ID = 'TOGGLE_ID';
export const UPDATE_ID = 'UPDATE_ID';

export const updateID = (id, title) => {
	return { type: UPDATE_ID, payload: { id: id, title: title }}
};

export const addID = (id, title) => {
	return { type: ADD_ID, payload: { id: id, title: title }}
};

export const removeID = (id, title) => {
	return { type: REMOVE_ID, payload: { id: id, title: title }}
};