/**
 * `FacebookAuthorizationError` error.
 *
 * FacebookAuthorizationError represents an error in response to an
 * authorization request on Facebook.  Note that these responses don't conform
 * to the OAuth 2.0 specification.
 *
 * References:
 *   - https://developers.facebook.com/docs/reference/api/errors/
 *
 * @constructor
 * @param {string} [message]
 * @param {number} [code]
 * @access public
 */
function FacebookAuthorizationError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, FacebookAuthorizationError);
  this.name = 'FacebookAuthorizationError';
  this.message = message;
  this.code = code;
  this.status = 500;
}

// Expose constructor.
module.exports = FacebookAuthorizationError;
