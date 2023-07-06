import React from 'react'
import PropTypes from 'prop-types'

const Item = ({item, index}) => {
  return (
    <>
        <div key='{index}'>
            <p>{item.category}</p>
            <img src={item.img}/>
        </div>
    </>
  )
}

Item.propTypes = {}

export default Item