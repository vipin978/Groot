import React from 'react';

const DropDown = (props) => {

  const createCard = (obj,idx) => {
    return  <option value="yes">{props.list[idx]}</option>
  }

  if (props.name === null){
    return (<p></p>)
  }
  return (
    <form>
    <label class=" fw6 lh-copy " for="cars">{props.name}  </label>
    <select id="cars" name="cars">
      {props.list.map(createCard)}
    </select>
    </form>
    )
  }

export default DropDown
