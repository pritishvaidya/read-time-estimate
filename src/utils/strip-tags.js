/**
 *  String#stripTags() -> String
 *
 *  Strip HTML tags string.
 *
 * */

function stripTags(string) {
  const pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>';
  const reg = new RegExp(pattern, 'gi');
  return string.replace(reg, '');
}

export default stripTags;
