import imageReadTime from './utils/image-read-time';
import wordsReadTime from './utils/words-read-time';
import stripTags from './utils/strip-tags';
import stripWhitespace from './utils/strip-whitespace';


function readTime(
  string,
  customWordTime,
  customImageTime,
  chineseKoreanReadTime,
  imageTags,
) {
  const imageTime = imageReadTime(customImageTime, imageTags, string);
  const strippedString = stripTags(stripWhitespace(string));
  const wordsTime = wordsReadTime(strippedString, customWordTime);
  return imageTime + wordsTime;
}

export default readTime;
