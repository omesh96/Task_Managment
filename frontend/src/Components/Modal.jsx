
import React, { useContext } from 'react'
import { RiCloseLine } from "react-icons/ri";
import { AuthContext } from '../Context/Context';
import "../Css/Modal.css"

const Modal = () => {
    const {state,dispatch,MODAL,LOGIN}=useContext(AuthContext)

  return (
   <div className="darkBg" onClick={()=> dispatch(MODAL(false))}>
     <div className="centered">
      <div className='modal'>
      {/* modal header */}
       <div className="modalHeader">
        <h5 className='heading'>Confirm</h5>
       </div>
       <button className='closeBtn'
         onClick={()=> dispatch(MODAL(false))}
        >
        {/* icon */}
        <RiCloseLine></RiCloseLine>
       </button>
       {/* modal content */}
       <div className="modalContent">
        Are You Really want to Log out ?
       </div>
       <div className="modalActions">
        <div className="actionsContainer">
          <button className='logOutBtn' onClick={()=>{
           dispatch(MODAL(false))
           dispatch(LOGIN)
            localStorage.clear()
            // navigate("/signin")
          }}>Log Out</button>
          <button className='cancelBtn' 
           onClick={()=>dispatch(MODAL(false))}
          >Cancel</button>
        </div>
       </div>
    </div>
  </div>
  </div>
  )
}

export default Modal