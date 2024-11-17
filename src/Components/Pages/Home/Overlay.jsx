import React from 'react'
import "../../../assets/styles/Overlay.css"; 


export default function Overlay() {
  return (
<div className="overlay">
  <div className="popup">
    <img src="src/assets/images/alpha.png" alt="Alpha Image" className="popup-image" />
    <h2>Alpha Access Conditions Agreement</h2>
    <div className="popup-buttons">
      <button className="btn btn-light ">View the terms</button>
      <button className="btn btn-outline-light">Agree to terms</button>
    </div>
  </div>
</div>

  )
}
