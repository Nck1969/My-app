import React from "react";

import {
  YoutubeIconSvg,
  VectorStrokeRightSvg,
  VectorStrokeSvg,
  Video2Png,
  Video3Png,
  Video4Png,
  VolumeSvg,
  LoudSvg,
  FullSvg,
  PlayOnnSvg,
  PlaySvg,
  DurationSvg,
  Video1Png,
} from "../../../assets";

export default function Video() {
  return (
    <section className='video' id='video'>
      <div className='container'>
        <h2 className='h2-visiting'>Video journey</h2>
        <div className='video-art'>
          Enter and visit one of the most famous museums in the world and enjoy
          masterpieces such as Mona Lisa or Hammurabi's Code
        </div>
        <div className='block-video'>
          <div className='big-video'>
            <img src={Video1Png} className='big-video' alt='video' />
            <div className='black-block'>
              <div className='play-onn'>
                <img src={PlayOnnSvg} className='play-onn1' alt='play-on' />
              </div>
              <div className='play'>
                <img src={PlaySvg} alt='play' />
              </div>
              <div className='duration'>
                <img src={DurationSvg} className='duration1' alt='duration' />
              </div>
              <div className='volume'>
                <img src={VolumeSvg} className='volume1' alt='volume' />
              </div>
              <div className='loud'>
                <img src={LoudSvg} className='loud1' alt='loud' />
              </div>
              <div className='full'>
                <img src={FullSvg} className='full1' alt='full' />
              </div>
            </div>
          </div>
          <div className='slide-video'>
            <img src={Video2Png} className='slide-video' alt='video' />
            <div className='youtube-icon'>
              <img src={YoutubeIconSvg} alt='youtube' />
            </div>
          </div>
          <div className='slide-video'>
            <img src={Video3Png} className='slide-video' alt='video' />
            <div className='youtube-icon'>
              <img src={YoutubeIconSvg} alt='youtube' />
            </div>
          </div>
          <div className='slide-video'>
            <img src={Video4Png} className='slide-video' alt='video' />
            <div className='youtube-icon'>
              <img src={YoutubeIconSvg} alt='youtube' />
            </div>
          </div>
        </div>
        <div className='scroll'>
          <button className='vector-left'>
            <img src={VectorStrokeSvg} alt='vector' />
          </button>
          <label className='scroll-container'>
            <input type='radio' name='radio-scroll' />
            <span className='scroll-checkmark'></span>
          </label>
          <label className='scroll-container'>
            <input type='radio' name='radio-scroll' />
            <span className='scroll-checkmark'></span>
          </label>
          <label className='scroll-container'>
            <input type='radio' name='radio-scroll' />
            <span className='scroll-checkmark'></span>
          </label>
          <label className='scroll-container'>
            <input type='radio' name='radio-scroll' />
            <span className='scroll-checkmark'></span>
          </label>
          <label className='scroll-container'>
            <input type='radio' name='radio-scroll' />
            <span className='scroll-checkmark'></span>
          </label>
          <button className='vector-right'>
            <img src={VectorStrokeRightSvg} alt='vector' />
          </button>
        </div>
      </div>
    </section>
  );
}
