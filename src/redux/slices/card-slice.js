import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
	name: 'card',
	initialState: {
		value: {
			isOpen: false,
			carditems: [],
		},
	},
	reducers: {
		togglewindow: (state) => {
			state.value.isOpen = !state.value.isOpen;
		},
		addtocard: (state, action) => {
			const newitem = action.payload;
			const existingItem = state.value.carditems.find(
				(item) => item.id === newitem.id,
			);
			if (existingItem) {
				state.value.carditems = state.value.carditems.map((item) =>
					item.id === newitem.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			} else {
				state.value.carditems.push(newitem);
			}
		},
		subtocard: (state, action) => {
			const newitem = action.payload;
			const existingItem = state.value.carditems.find(
				(item) => item.id === newitem.id,
			);
			if (existingItem) {
				state.value.carditems = state.value.carditems.map((item) =>
					item.id === newitem.id
						? item.quantity
							? { ...item, quantity: item.quantity - 1 }
							: { ...item, quantity: 0 }
						: item,
				);
			}
		},
		removeitem: (state, action) => {
			const itemtoremove = action.payload;
			state.value.carditems = state.value.carditems.filter(
				(item) => item.id !== itemtoremove.id,
			);
		},
	},
});

export const { togglewindow, addtocard, removeitem, subtocard } =
	cardSlice.actions;
export default cardSlice.reducer;
