import { React, useEffect } from 'react';
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
      <Directory />
    </div>
  );
};
export default HomePage;
