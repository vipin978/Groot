import React from 'react';

const Radio = (props) => {
  if (props.name === null){
    return (<p></p>)
  }
  return (
    <form>
    <label class=" fw6 lh-copy " for="cars">Gender  :  </label>
      <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male     </label>
      <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label>
    </form>
      )
  }

export default Radio
