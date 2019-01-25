/**
 *  String#imageReadTime() -> Number
 *
 *  Get Image Read Time from a string.
 *
 * */
import { IMAGE_READ_TIME } from '../constants';

function imageCount(imageTags, string) {
  const combinedImageTags = imageTags.join('|');
  const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function imageReadTime(tags, string) {
  let readTime = 0;
  const count = imageCount(tags, string);

  if (count > 10) {
    readTime = ((count / 2) * (IMAGE_READ_TIME + 3)) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    const firstElement = (count / 2) * (2 * IMAGE_READ_TIME + (1 - count)); // n/2[2a+(n-1)d]
    readTime = (count / 2) * (firstElement + IMAGE_READ_TIME); // n/2(a+b)
  }
  return readTime;
}

export { imageCount };
export default imageReadTime;
