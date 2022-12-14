const INIT_STATE = {
	carts: [],
}

const cartReducer = (state = INIT_STATE, action) => {

	switch (action.type) {
		case "ADD_CART": {
			return {
				...state,
				carts: [...state.carts, action.payload]
			}
		}
		case "RMV_CART": {

			const data = state.carts.filter((e) => e.id !== action.payload);
			console.log({data, payload: action.payload})
			return {
				...state,
				carts: data,
			}
		}

		default:
			return state
	}

}

export default cartReducer;
