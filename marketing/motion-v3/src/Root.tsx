import React from 'react';
import {Composition} from 'remotion';
import {CriolloAd} from './Video';
import {AdaptiveAd} from './Adaptive';
export const RemotionRoot: React.FC = () => <>
  <Composition id="CriolloVertical" component={CriolloAd} durationInFrames={540} fps={30} width={1080} height={1920} defaultProps={{}} />
  <Composition id="CriolloFeed" component={CriolloAd} durationInFrames={540} fps={30} width={1080} height={1350} defaultProps={{}} />
  <Composition id="CriolloSquare" component={AdaptiveAd} durationInFrames={540} fps={30} width={1080} height={1080} defaultProps={{mode:'square'}} />
  <Composition id="CriolloLandscape" component={AdaptiveAd} durationInFrames={540} fps={30} width={1920} height={1080} defaultProps={{mode:'landscape'}} />
</>;
