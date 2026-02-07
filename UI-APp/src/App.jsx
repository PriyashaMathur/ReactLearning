import React from 'react'
import Header from './assets/components/header/header'
import Left from './assets/components/LeftContent/left'
import Card from './assets/components/Cards/card'
import './App.css'
const App = () => {
  const details=[
    {
      content:'Prime customers that have access to bank credit and are satisfied with the current product.',
      butt:'Satisfied',
      background:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      content:'Prime customers that have access to bank credit and are satisfied with the current Service.',
      butt:'Undeserved',
      background:'https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      content:'Customers from prime ans sub-prime segments with no access to bank credit.',
      butt:'UnderBanked',
      background:'https://images.unsplash.com/photo-1618488220787-aaee29f8871f?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      content:'Customers from prime ans sub-prime segments with no access to bank credit.',
      butt:'UnderBanked',
      background:'https://images.unsplash.com/photo-1618488220787-aaee29f8871f?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      content:'Customers from prime ans sub-prime segments with no access to bank credit.',
      butt:'UnderBanked',
      background:'https://images.unsplash.com/photo-1618488220787-aaee29f8871f?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  return (
    <div className='parent'>
      <Header />
      <div className='sparent'>
        <Left />
        <div className='cards'>
          {details.map((item,index)=>(
            <Card key={index}
            index={index}    
            content={item.content}
            butt={item.butt}
            background={item.background}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
