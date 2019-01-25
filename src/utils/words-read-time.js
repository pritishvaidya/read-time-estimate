/**
 *  String#wordsReadTime() -> Number
 *
 *  Get Words count from a string.
 *
 * */
import { WORDS_PER_MIN, CHINESE_KOREAN_READ_TIME } from '../constants';

function wordsCount(string) {
  const pattern = '\\w+';
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

// Chinese / Japanese / Korean
function otherLanguageReadTime(string) {
  const pattern = '[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]';
  const reg = new RegExp(pattern, 'g');
  const characterLength = (string.match(reg) || []).length;
  const otherLanguageTime = characterLength / CHINESE_KOREAN_READ_TIME;
  const formattedString = string.replace(reg, '');
  return {
    otherLanguageTime,
    formattedString,
  };
}

function wordsReadTime(string, wordsPerMin = WORDS_PER_MIN) {
  const { otherLanguageTime, formattedString } = otherLanguageReadTime(string);
  const count = wordsCount(formattedString);
  const wordTime = count / wordsPerMin;
  return otherLanguageTime + wordTime;
}

export { wordsCount, otherLanguageReadTime };
export default wordsReadTime;
