/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';
import base64SoundToByteArray from '../../tambo/js/base64SoundToByteArray.js';
import WrappedAudioBuffer from '../../tambo/js/WrappedAudioBuffer.js';
import phetAudioContext from '../../tambo/js/phetAudioContext.js';

const soundURI = 'data:audio/mpeg;base64,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';
const soundByteArray = base64SoundToByteArray( phetAudioContext, soundURI );
const unlock = asyncLoader.createLock( soundURI );
const wrappedAudioBuffer = new WrappedAudioBuffer();

// safe way to unlock
let unlocked = false;
const safeUnlock = () => {
  if ( !unlocked ) {
    unlock();
    unlocked = true;
  }
};

const onDecodeSuccess = decodedAudio => {
  if ( wrappedAudioBuffer.audioBufferProperty.value === null ) {
    wrappedAudioBuffer.audioBufferProperty.set( decodedAudio );
    safeUnlock();
  }
};
const onDecodeError = decodeError => {
  console.warn( 'decode of audio data failed, using stubbed sound, error: ' + decodeError );
  wrappedAudioBuffer.audioBufferProperty.set( phetAudioContext.createBuffer( 1, 1, phetAudioContext.sampleRate ) );
  safeUnlock();
};
const decodePromise = phetAudioContext.decodeAudioData( soundByteArray.buffer, onDecodeSuccess, onDecodeError );
if ( decodePromise ) {
  decodePromise
    .then( decodedAudio => {
      if ( wrappedAudioBuffer.audioBufferProperty.value === null ) {
        wrappedAudioBuffer.audioBufferProperty.set( decodedAudio );
        safeUnlock();
      }
    } )
    .catch( e => {
      console.warn( 'promise rejection caught for audio decode, error = ' + e );
      safeUnlock();
    } );
}
export default wrappedAudioBuffer;