/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;