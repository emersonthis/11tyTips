const settings = require( '../settings.js' )
const msg_s = `a useful collection`

module.exports =
{
  first__s: ( content_s ) =>
  {
    return `${settings.siteId}, ${msg_s}, ${content_s}`
  }
}