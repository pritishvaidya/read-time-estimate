/**
 *  String#wordsReadTime() -> { characterTime, otherLanguageTime, wordTime, wordCount }
 *
 *  Get Words count from a string.
 *
 * */
import { WORDS_PER_MIN, CHINESE_KOREAN_READ_TIME } from '../constants';

function wordsCount(string) {
    return (string.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length;
}

function paragraphsCount(string) {
    return (string.match(/\n+/g) || []).length + 1;
}

function sentencesCount(string) {
    return (string.match(/[.?!…]+./g) || []).length + 1;
}

// Chinese / Japanese / Korean
function otherLanguageReadTime(string) {
  const pattern = '[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]';
  const reg = new RegExp(pattern, 'g');
  const count = (string.match(reg) || []).length;
  const time = count / CHINESE_KOREAN_READ_TIME;
  const formattedString = string.replace(reg, '');
  return {
    count,
    time,
    formattedString,
  };
}

function wordsReadTime(string, wordsPerMin = WORDS_PER_MIN) {
    const {
        count: charachterCount,
        time: otherLanguageTime,
        formattedString,
    } = otherLanguageReadTime(string);
    const wordCount = wordsCount(formattedString);
    const paragraphCount = paragraphsCount(formattedString);
    const sentenceCount = sentencesCount(formattedString);
    const wordTime = wordCount / wordsPerMin;
    return {
        charachterCount,
        otherLanguageTime,
        wordTime,
        wordCount,
        paragraphCount,
        sentenceCount,
    };
}

export { wordsCount, otherLanguageReadTime };
export default wordsReadTime;
