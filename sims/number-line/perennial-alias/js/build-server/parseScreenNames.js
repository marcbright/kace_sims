// Copyright 2021, University of Colorado Boulder

const axios = require( 'axios' );
const getFullStringMap = require( '../common/getFullStringMap' );
const loadJSON = require( '../common/loadJSON' );
const gitCheckout = require( '../common/gitCheckout' );

/**
 * NOTE: release branch NEEDS to be checked out for this to be called, since we'll need the dependencies.json file
 *
 * @param {string} simName
 * @param {string[]} locales - a list of locale codes
 * @returns {Promise.<{}>}
 */
const parseScreenNamesFromSimulation = async ( simName, locales ) => {

  const stringMap = await getFullStringMap( simName );
  const packageObject = await loadJSON( `../${simName}/package.json` );
  const screenNameKeys = packageObject.phet.screenNameKeys || [];

  const result = {};
  for ( const locale of locales ) {
    result[ locale ] = screenNameKeys.map( key => stringMap[ key ][ locale ] || stringMap[ key ][ locale.slice( 0, 2 ) ] || stringMap[ key ].en );
  }
  return result;
};

const parseScreenNamesAllSimulations = async () => {
  const url = 'https://phet.colorado.edu/services/metadata/1.3/simulations?format=json&type=html&summary';
  const projects = ( await axios.get( url ) ).data.projects;

  const screenNameObject = {};

  for ( let projectIndex = 0; projectIndex < projects.length; projectIndex++ ) {
    const project = projects[ projectIndex ];
    const simulation = project.simulations[ 0 ];
    const simName = simulation.name;
    const locales = Object.keys( simulation.localizedSimulations );
    await gitCheckout( simName, `${project.version.major}.${project.version.minor}` );
    screenNameObject[ simName ] = await parseScreenNamesFromSimulation( simName, locales );
    await gitCheckout( simName, 'master' );
  }

  return screenNameObject;
};

module.exports = {
  parseScreenNames: async ( simName, locales ) => parseScreenNamesFromSimulation( simName, locales ),
  parseScreenNamesAllSimulations: parseScreenNamesAllSimulations
};