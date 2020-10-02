import React from 'react'

const EditOrder = ({ getOrder, trackOrder, handleTrackOrderChange }) => {
    return (
        <>
           <div className="order-now">Edit Order</div>
                <form class="order-form" onSubmit={getOrder}>
                  Order Id: <input className="input-small"
                      value={trackOrder}
                      onChange={handleTrackOrderChange}    
                  />
                  <button className="submit-button" type="submit">Track Order</button>
                </form>
        </>
    )
}

export default EditOrder