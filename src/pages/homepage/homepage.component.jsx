import { React, useEffect, Profiler } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/slices/shop-slice';
import './homepage.style.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div className="homepage">
			<Profiler
				id="directory"
				onRender={(id, phase, acrualDuration) => {
					console.log({
						id,
						phase,
						acrualDuration,
					});
				}}
			>
				<Directory />
			</Profiler>
		</div>
	);
};
export default HomePage;
