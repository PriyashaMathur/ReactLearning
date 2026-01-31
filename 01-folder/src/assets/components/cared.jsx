import React from 'react'

const Cared = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi reiciendis numquam magnam? Suscipit sequi consequuntur recusandae, ullam assumenda ab!</p>
    </div>

  )
}

export default Cared