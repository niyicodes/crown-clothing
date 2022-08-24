import React from 'react'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview'
import SHOP_DATA from './Shop.data'


class ShopPage extends React.Component{
 constructor(props){
  super(props)
   this.state = {
      collections: SHOP_DATA
   };
 }

 render(){
  const {collections} = this.state;
  return (
    <div className="shop-page">
      {
      collections.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))
      }
    </div>
  )
 }
}

export default ShopPage;

