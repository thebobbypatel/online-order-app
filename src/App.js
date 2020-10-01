import React, { useState, useEffect } from 'react';
import orderService from './services/orders'
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';



const { Header, Content, Footer } = Layout;


const App = () => {
  const [ newOrder, setNewOrder ] = useState()
  const [ newName, setNewName ] = useState()
  const [ newEmail, setNewEmail ] = useState()
  const [ trackOrder, setNewTrackOrder ] = useState()
  const [ orders, setOrders ] = useState([])
  const [ viewOrder, setViewOrder ] = useState([])
  const [ showOrderDetails, setShowOrderDetails ] = useState(false)
  const [ orderId, setOrderId ] = useState('')

  const hook = () => {
    orderService
        .getAll()
        .then(initialOrders => {
            setOrders(initialOrders)
        })
}

  useEffect(hook, [])

  const handleOrderChange = (event) => {
    setNewOrder(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setNewEmail(event.target.value)
  }
  const handleTrackOrderChange = (event) => {
    setNewTrackOrder(event.target.value)
  }


  const addOrder = (event) => {
    event.preventDefault()
    const orderObject = {
      name: newName,
      email: newEmail,
      order: newOrder,
      ready: false,
      pickedUp: false,
      date: new Date().toISOString(),
    }

    orderService
      .create(orderObject)
      .then(returnedOrder => {
        setOrderId(returnedOrder.id)
        setNewName('')
        setNewEmail('')
        setNewOrder('')
      })
  }
  
  const getOrder = (event) => {
    event.preventDefault()
    orderService
      .get(trackOrder)
      .then(returnedOrder => {
        setNewTrackOrder('')
        setViewOrder(returnedOrder)
        setShowOrderDetails(true)
        console.log('got return')
      })
    console.log('through GetOrder')
  }

  const ordersToShow = orders.filter(order => trackOrder === order.email)

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <h1 style={{color: "white", fontWeight: "bolder", fontSize: "40px"}}>Rocky Market</h1>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            
            <Row gutter={24}>
              <Col span={8}>
                <div className="order-now">Place Order</div>
                <form class="order-form" onSubmit={addOrder}>
                  Name: <input className="input-small"
                      value={newName}
                      onChange={handleNameChange}    
                  />
                  Email: <input className="input-small"
                      value={newEmail}
                      onChange={handleEmailChange}    
                  />
                  Order Items: <input className="input-small"
                      value={newOrder}
                      onChange={handleOrderChange}    
                  />
                  <button className="submit-button" type="submit">Place Order</button>
                </form>
                <p>Order Id of Order Placed: {orderId}</p>
              </Col>
              <Col span={8}>
                <div className="order-now">Edit Order</div>
                <form class="order-form" onSubmit={getOrder}>
                  Order Id: <input className="input-small"
                      value={trackOrder}
                      onChange={handleTrackOrderChange}    
                  />
                  <button className="submit-button" type="submit">Track Order</button>
                </form>
              </Col>
              {showOrderDetails ? 
                <Col span={8}>
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
                </Col>
                : 
                <Col span={8}>
                  <div className="order-now">Order Details</div>
                </Col>
              }
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made in React</Footer>
      </Layout>
    </div>
  );
}

export default App;
