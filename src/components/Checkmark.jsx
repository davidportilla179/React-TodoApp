import React from 'react';

const Checkmark = (props) => {
  return (
    <>
      <input type="checkbox"
          className="ok"
          defaultChecked={props.done}
          onClick={(e) => props.toggleDone(e, props.index)}
      />
    </>
  )
}

export default Checkmark;
