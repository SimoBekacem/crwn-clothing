import { createSlice } from '@reduxjs/toolkit';

const directorySlice = createSlice({
	name: 'directory',
	initialState: {
		value: {
			sections: [
				{
					title: 'hats',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1,
					linkUrl: 'crwn-clothing/shop/hats',
				},
				{
					title: 'jackets',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2,
					linkUrl: 'crwn-clothing/shop/jackets',
				},
				{
					title: 'sneakers',
					imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					id: 3,
					linkUrl: 'crwn-clothing/shop/sneakers',
				},
				{
					title: 'womens',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					size: 'large',
					id: 4,
					linkUrl: 'crwn-clothing/shop/womens',
				},
				{
					title: 'mens',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					size: 'large',
					id: 5,
					linkUrl: 'crwn-clothing/shop/mens',
				},
			],
		},
	},
});

export default directorySlice.reducer;
