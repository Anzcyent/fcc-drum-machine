import React from 'react'

const ChangeBank = ({ change, bank }) => {
  return (
    <div className="d-flex flex-column">
      <button onClick={change} className={`btn ${bank === "Bank 1" ? "btn-primary" : "btn-warning"} mt-3`}>{bank}</button>
    </div>
  )
}

export default ChangeBank