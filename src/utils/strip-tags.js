/**
 *  String#stripTags() -> String
 *
 *  Strip HTML tags string.
 *
 * */

function stripTags(string) {
    return string.replace(/<\/?[a-z][^>]*>/gi, '');
}

export default stripTags;
