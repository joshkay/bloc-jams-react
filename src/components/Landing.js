import React from 'react';

import FeatureListing from './FeatureListing';
import PromoFooter from './PromoFooter/index';
import LandingImage from './LandingImage';

const Landing = () => (
  <section className="landing">
    <LandingImage
      img="/assets/images/stock_music_photo.jpg"
      imgAlt="Woman listening to music"
      imgText="Turn the music up!"
    />
    
    <div className="row">
      <FeatureListing 
        heading="Choose your music" 
        content="The world is full of music; why should you have to listen to music that someone else chose?"
        icon="musical-notes"
      />
      <FeatureListing 
        heading="Unlimited, streaming, ad-free" 
        content="No arbitrary limits. No distractions."
        icon="infinite"
      />
      <FeatureListing 
        heading="Mobile enabled" 
        content="Listen to your music on the go. This streaming service is available on all mobile platforms."
        icon="phone-portrait"
      />
    </div>

    <PromoFooter
      name="Josh Kay"
      nameURL="http://www.linkedin.com/in/joshmkay"
    />
  </section>
);

export default Landing;