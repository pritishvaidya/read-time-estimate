# read-time-estimate [![Build Status](https://travis-ci.com/pritishvaidya/read-time-estimate.svg?branch=master)](https://travis-ci.com/pritishvaidya/read-time-estimate) [![Maintainability](https://api.codeclimate.com/v1/badges/c5858d4d925014c4c1a7/maintainability)](https://codeclimate.com/github/pritishvaidya/read-time-estimate/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/c5858d4d925014c4c1a7/test_coverage)](https://codeclimate.com/github/pritishvaidya/read-time-estimate/test_coverage) [![npm version](https://badge.fury.io/js/read-time-estimate.svg)](https://badge.fury.io/js/read-time-estimate) [![npm downloads](https://img.shields.io/npm/dt/read-time-estimate.svg)](https://npm-stat.com/charts.html?package=read-time-estimate&from=2018-02-17&to=2018-12-28)

> A more accurate Medium like read time estimate with images in progression and Chinese / Japanese / Korean character support.

## Features
- Calculates read time of images in decreasing progression with ability to provide custom image tags
- Calculates read time of the Chinese / Japanese / Korean characters separately
- Removes unwanted html tags to calculate read time more efficiently

## Install

```
$ npm i read-time-estimate --save
```

## Usage

```js
const readTimeEstimate = require('read-time-estimate');

const string = `<img src="test.png"/><div class="wrapper">
    This is a sample read time estimate with 中文/日文/韩文 text </div>`
                
const {
    humanizedDuration, // 'less than a minute'
    duration, // 0.23272727272727273
    totalImages, // 1
    totalWords, // 9
    otherLanguageTime, // 0.012
    otherLanguageTimeCharacters, // 6
} = readTimeEstimate(string, 275, 12, 500, ['img', 'Image'])
```

### Input

| Variable  | Defaults | Description  |
| :------------ | ---------------:| :---------------|
| string | required | Input String |
| customWordTime | 275 | Speed of reading the text in Words per Minute |
| customImageTime | 12 | Speed of reading the image in seconds |
| chineseKoreanReadTime | 500 | Speed of reading the Chinese / Korean / Japanese characters in Characters per Minute |
| imageTags | `['img', 'Image']` | Custom Image tags to parse in the input string |


### Output

| Variable  | Description  |
| :------------ | :---------------|
| humanizedDuration | Humanized Duration for the input string |
| duration | Actual Duration of the input string (in minutes) |
| totalWords | Number of words in the input string |
| wordTime | Read Time of the words in the input string |
| totalImages | Number of images in input string |
| imageTime | Read Time of the images in the input string |
| otherLanguageTimeCharacters | Chinese / Japanese / Korean language characters count |
| otherLanguageTime | Read Time of the Chinese / Japanese / Korean in the input string |

### References 

#### Medium
 - [Help](https://help.medium.com/hc/en-us/articles/214991667-Read-time)
 - [Blog](https://blog.medium.com/read-time-and-you-bc2048ab620c)

## Contribution

 - [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.

## Questions

 Feel free to [contact me](mailto:pritishvaidya94@gmail.co) or [create an issue](https://github.com/pritishvaidya/read-time-estimate/issues/new)
