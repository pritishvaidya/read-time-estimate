import imageReadTime, { imageCount } from '../src/utils/image-read-time';
import stripTags from '../src/utils/strip-tags';
import stripWhitespace from '../src/utils/strip-whitespace';
import wordsReadTime, { wordsCount, otherLanguageReadTime } from '../src/utils/words-read-time';
import { CHINESE_KOREAN_READ_TIME, IMAGE_TAGS } from '../src/constants';

describe('Testing Utility functions', () => {
  describe('image-read-time utility method', () => {
    it('should be able to count nil image tags', () => {
      const testString = '';
      expect(imageCount(IMAGE_TAGS, testString)).toBe(0);
    });

    it('should be able to count image to be 2', () => {
      const testString = '<Image/><Image/>';
      expect(imageCount(IMAGE_TAGS, testString)).toBe(2);
    });

    it('should be able return read time if count is greater than 10', () => {
      const testString = '<Image/><Image/><Image/><Image/><Image/><img/><img/><img/><img/><img/><img/>';
      expect(imageReadTime(IMAGE_TAGS, testString)).toBeNumber();
    });

    it('should be able return read time if count is less than 10', () => {
      const testString = '<Image/><Image/><Image/>';
      expect(imageReadTime(IMAGE_TAGS, testString)).toBeNumber();
    });
  });

  describe('strip-whitespace utility method', () => {
    const testString = '  Test String  ';
    const outputString = 'Test String';
    it('should be able strip leading or trailing whitespace from a string', () => {
      expect(stripWhitespace(testString)).toBe(outputString);
    });
  });

  describe('strip-tags utility method', () => {
    const testString = '<div>Test String</div>';
    const outputString = 'Test String';
    it('should be able strip tags', () => {
      expect(stripTags(testString)).toBe(outputString);
    });
  });

  describe('words-read-time utility method', () => {
    it('should be able to count nil words', () => {
      const testString = '';
      expect(wordsCount(testString)).toBe(0);
    });

    it('should be able to count words count to be 2', () => {
      const testString = 'Test String';
      expect(wordsCount(testString)).toBe(2);
    });

    it('should be able to count other language characters', () => {
      const testString = 'Test String测试字符串';
      const outputString = 'Test String';
      expect(
        otherLanguageReadTime(testString),
      ).toEqual({ otherLanguageTime: 5 / CHINESE_KOREAN_READ_TIME, formattedString: outputString });
    });

    it('should be calculate words read time', () => {
      const testString = 'Test String';
      expect(
        wordsReadTime(testString),
      ).toBeNumber();
    });
  });
});
