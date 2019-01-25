/**
 *  String#stripWhitespace() -> String
 *
 *  Strip HTML tags string.
 *
 * */

function stripWhitespace(string) {
  return string.replace(/^\s+/, '').replace(/\s+$/, '');
}

export default stripWhitespace;
