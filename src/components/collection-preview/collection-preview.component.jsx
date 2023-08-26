import React from 'react';

import { useNavigate } from 'react-router-dom';
import './collection-preview.style.scss';
import CollectionItem from '../colletion-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
	const navigate = useNavigate();
	return (
		<div className="collection-preview">
			<h1
				className="title"
				onClick={() => {
					navigate(`/shop/${title.toLowerCase()}`);
				}}
			>
				{title.toUpperCase()}
			</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => {
						return <CollectionItem key={item.id} {...item} />;
					})}
			</div>
		</div>
	);
};
export default CollectionPreview;
