/**
 *  String#imageReadTime() -> { time, count }
 *
 *  Get Image Read Time from a string.
 *
 * */
import { IMAGE_READ_TIME, IMAGE_TAGS } from '../constants';

function imageCount(imageTags, string) {
  const combinedImageTags = imageTags.join('|');
  const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function imageReadTime(customImageTime = IMAGE_READ_TIME, tags = IMAGE_TAGS, string) {
  let seconds = 0;
  const count = imageCount(tags, string);

  if (count > 10) {
    seconds = ((count / 2) * (customImageTime + 3)) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    seconds = (count / 2) * (2 * customImageTime + (1 - count)); // n/2[2a+(n-1)d]
  }
  return {
    time: seconds / 60,
    count,
  };
}

export { imageCount };
export default imageReadTime;
