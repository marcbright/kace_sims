// Copyright 2020-2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import twixt from './twixt.js';

type StringsType = {
  'twixt': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'animationStringProperty': LinkableProperty<string>;
    'dampedMotionStringProperty': LinkableProperty<string>;
    'transitionsStringProperty': LinkableProperty<string>;
  }
};

const TwixtStrings = getStringModule( 'TWIXT' ) as StringsType;

twixt.register( 'TwixtStrings', TwixtStrings );

export default TwixtStrings;
