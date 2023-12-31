// Copyright 2020-2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import tambo from './tambo.js';

type StringsType = {
  'tambo': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'simLikeComponentsStringProperty': LinkableProperty<string>;
    'uiComponentsStringProperty': LinkableProperty<string>;
    'testingStringProperty': LinkableProperty<string>;
  }
};

const TamboStrings = getStringModule( 'TAMBO' ) as StringsType;

tambo.register( 'TamboStrings', TamboStrings );

export default TamboStrings;
