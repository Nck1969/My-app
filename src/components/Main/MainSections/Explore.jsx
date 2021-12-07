import React from "react";

import { PicExplorePng, PicExploreHalfPng, SliderSvg } from "../../../assets";

export default function Explore() {
  return (
    <section className='explore' id='explore'>
      <div className='container'>
        <div className='picture-explore'>
          <h6 className='explore-title'>Picture explore</h6>
          <div className='explore-line'></div>
          <p className='explore-txt'>
            Las Meninas is a 1656 painting by Diego Velázquez, the leading{" "}
            <br />
            artist of the Spanish Golden Age.
          </p>
          <p className='explore-txt'>
            It was cleaned in 1984 to remove a <span>"yellow veil"</span> of
            dust that had gathered since the previous restoration in the 19th
            century.
          </p>
          <p className='explore-txt1'>
            The cleaning provoked furious protests, not because the picture had
            been damaged in any way, but because it looked different.
          </p>
        </div>
        <picture className='pic-explore'>
          <img src={PicExplorePng} alt='explore' />
        </picture>
        <picture className='pic-explore-half'>
          <img src={PicExploreHalfPng} alt='explore' />
        </picture>
        <div className='slider'>
          <img src={SliderSvg} alt='slider' />
        </div>
      </div>
    </section>
  );
}
