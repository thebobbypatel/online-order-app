import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;


const App = () => {
  const [ order, setOrder ] = useState()
  const [ name, setName ] = useState()
  const [ email, setEmail ] = useState()

  const handleOrderChange = (event) => {
    setOrder(event.target.value)
  }
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }


  const addOrder = () => {
    console.log('order placed')
  }







  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <h1 style={{color: "white", fontWeight: "bolder", fontSize: "40px"}}>Rocky Market</h1>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <div className="order-now">Order Now</div>
            <Row>
              <Col span={8}>
                <form class="order-form" onSubmit={addOrder}>
                  Name: <input className="input-small"
                      value={name}
                      onChange={handleNameChange}    
                  />
                  Email: <input className="input-small"
                      value={email}
                      onChange={handleEmailChange}    
                  />
                  Order: <input className="input-small"
                      value={order}
                      onChange={handleOrderChange}    
                  />
                  <button className="submit-button" type="submit">Place Order</button>
                </form>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made in React</Footer>
      </Layout>
    </div>
  );
}

export default App;
