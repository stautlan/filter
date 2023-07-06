import React, { useState, useMemo, Children } from 'react'
import PropTypes from 'prop-types'

const Toolbar = ({filters, selected, onSelectFilter}) => {

    const state = (prevState) => {
      selected = prevState.item;
      onSelectFilter(selected);
    }

  return (
    <>
        {filters.map((item, index) => (<button key={index} onClick={() => state({item})}>
          {item}
        </button>))}
    </>
  )
}

Toolbar.propTypes = {}

export default Toolbar