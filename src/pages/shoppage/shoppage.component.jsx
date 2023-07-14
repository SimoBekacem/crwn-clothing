import React, { Component } from 'react'

import SHOP_DATA from './SHOP_DATA';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(props){
        super(props);
        
        this.state ={
                collections: SHOP_DATA
            };
    }
    render(){
        return(
            <div>
                {
                    this.state.collections.map(item => {
                        return(
                            <CollectionPreview title={item.title} items={item.items}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default ShopPage;
