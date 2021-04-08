import React from 'react';

const Checkmark = (props) => {
  return (
    <>
      <input type="checkbox"
          className="ok"
          defaultChecked={props.done}
          onChange={props.handleClick}
      />
    </>
  )
}

export default Checkmark;
