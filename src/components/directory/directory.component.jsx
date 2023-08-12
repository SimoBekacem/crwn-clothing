import React from 'react';
import { useSelector } from 'react-redux';

import './directory.sytle.scss';

import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
    const sections = useSelector(state => state.directory.value.sections);
    return(
        <div className='directory-menu'>
            {
                sections.map(item => {
                    return(<MenuItem 
                        key={item.id}
                        {...item}
                    />)
                })
            }
        </div>
    )
}
export default Directory;
