import React from 'react';
import slugify from 'slugify';

function Options (props) {

     const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

     //features = [processor, operating system, video card, display]
     //feature = processor
     //featureHash = [processor-0, operating system-1, video card-2, display-3]
     //item =  {name: '17th Generation Intel Core HB (7 Core with donut spare)',cost: 700}
     //options = ["name":"15.6"-UHD-(3840-x-2160)-60Hz-Bright-Lights-and-Knobs""cost":1500, ...]
     //itemHash = "name":"15.6"-UHD-(3840-x-2160)-60Hz-Bright-Lights-and-Knobs""cost":1500


     const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item)); 
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === props.selected[feature].name}
                onChange={e => props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
        //This completes the option const (lines 21-38)....


        //This is the features const (lines 19-51)...WE WANT TO RETURN THIS AT THE END OF THE FUNCTION!!!
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });
      return features;
}

export default Options;