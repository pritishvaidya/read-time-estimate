import { IMAGE_TAGS } from './constants';
import imageReadTime from './utils/image-read-time';
import wordsReadTime from './utils/words-read-time';
import stripTags from './utils/strip-tags';
import stripWhitespace from './utils/strip-whitespace';


function readTime(string, customImageTags = []) {
  const imageTags = IMAGE_TAGS.concat(customImageTags);
  const imageTime = imageReadTime(imageTags, string);
  const strippedString = stripTags(stripWhitespace(string));
  const wordsTime = wordsReadTime(strippedString);
  return imageTime + wordsTime;
}

export default readTime;
