import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BagActions } from '../store/BagSlice'
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";

const HomeItems = ({item}) => {

  const dispatch = useDispatch()
  const bagElement = useSelector(store => store.bag)
  const elementFound = bagElement.indexOf(item.id) >= 0;

  const HandleAddtoBag = () =>{
    dispatch(BagActions.addToBag(item.id))
  }

  const HandleRemovefromBag = () =>{
    dispatch(BagActions.removeFromBag(item.id))
  }

  return (
    <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? 
          <button type="button" class="btn btn-add-bag btn-danger" onClick={HandleRemovefromBag}><MdOutlineDeleteForever /> Remove from Bag</button> 
        : 
          <button type="button" class="btn btn-add-bag btn-success" onClick={HandleAddtoBag}> <MdAddShoppingCart /> Add to Bag</button>
        }
        
        
    </div>
  )
}

export default HomeItems