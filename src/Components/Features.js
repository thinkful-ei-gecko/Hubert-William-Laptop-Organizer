import React from 'react';
import Options from './Options';

function Features(props) {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Options
            features={props.features}
            selected={props.selected}
            updateFeature={props.updateFeature}
        />
      </form>
    )
}

export default Features;