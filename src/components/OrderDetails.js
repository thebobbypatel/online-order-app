import React from 'react'

const OrderDetails = ({ viewOrder }) => {
    return (
        <>
            <div className="order-now">Order Details</div>
                <div>
                    <div>
                    <p>Name: {viewOrder.name}</p>
                    <p>Date Placed: {viewOrder.date.substring(0,10)}</p>
                    <p>Time Placed: {viewOrder.date.substring(11,16)}</p>
                    <p>Order Items: {viewOrder.order}</p>
                    <p>Ready for Pick Up? {viewOrder.ready ? 'Yes' : 'No'}</p>
                    <p>Customer has Picked Up? {viewOrder.pickedUp ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </>
    )
}

export default OrderDetails