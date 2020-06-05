import React, { useState } from 'react'


function Modal(props) {
    const [show] = useState(props.show);
    const [message] = useState(props.message);
   

    return (
     <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main"><h1>{message}</h1></section>
    </div>
    )
}

export default Modal
