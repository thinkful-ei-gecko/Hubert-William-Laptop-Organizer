import React from 'react';
import Cost from './Cost';
import Total from './Total'

function Summary (props) {
  return (
    <section className="main__summary">
    <h2>Your cart</h2>
    <Cost 
      selected={props.selected}
      features={props.features}
    />
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        <Total 
          selected={props.selected}
          features={props.features}
        />
      </div>
    </div>
  </section>
  )
}

export default Summary;