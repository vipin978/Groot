import React from 'react';

const Normal = (props) => {
  if (props.name === null){
    return (<p></p>)
  }
  return (
        <div class="mt3">
          <label class="db fw6 lh-copy f6" for="email-address">{props.name}</label>
          <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
        </div>
      )
  }

export default Normal
