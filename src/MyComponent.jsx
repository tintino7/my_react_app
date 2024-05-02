import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState('Guest')
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState('')
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('delivery')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlepaymentChange = (event) => {
        setPayment(event.target.value)
    }

    const handleShippingChange = (event) =>{
        setShipping(event.target.value)
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} placeholder='Name'/>
            <p>Name : {name}</p>

            <input type="number" value = {quantity} onChange={handleQuantityChange} placeholder={quantity} />
            <p>Quantity : {quantity}</p>

            <textarea name="name" id="name" cols="30" rows="10" value={comment} onChange={handleCommentChange}></textarea>
            <p>Comment : {comment}</p>

            <select name="select" id="selct" value={payment} onChange={handlepaymentChange}>
                <option value='hi'>Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Gift Card">Gift card</option>
            </select>
            <p>Payment : {payment}</p>

            <label>
                <input type="radio" value= 'delivery' checked={ shipping === 'delivery'} onChange={handleShippingChange}/>
                Delivery
            </label>
            <br />
            <label>
                <input type="radio" value= 'pickup' checked={ shipping === 'pickup'} onChange={handleShippingChange}/>
                Pickup
            </label>

            <p>Shipping : {shipping}</p>
        </div>
    )

}

export default MyComponent