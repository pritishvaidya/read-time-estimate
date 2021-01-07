# read-time-estimate [![Build Status](https://travis-ci.com/pritishvaidya/read-time-estimate.svg?branch=master)](https://travis-ci.com/pritishvaidya/read-time-estimate) [![CodeFactor](https://www.codefactor.io/repository/github/pritishvaidya/read-time-estimate/badge/master)](https://www.codefactor.io/repository/github/pritishvaidya/read-time-estimate/overview/master) [![Maintainability](https://api.codeclimate.com/v1/badges/c5858d4d925014c4c1a7/maintainability)](https://codeclimate.com/github/pritishvaidya/read-time-estimate/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/c5858d4d925014c4c1a7/test_coverage)](https://codeclimate.com/github/pritishvaidya/read-time-estimate/test_coverage) [![npm version](https://badge.fury.io/js/read-time-estimate.svg)](https://badge.fury.io/js/read-time-estimate) [![npm downloads](https://img.shields.io/npm/dt/read-time-estimate.svg)](https://npm-stat.com/charts.html?package=read-time-estimate&from=2018-02-17&to=2018-12-28)

> A more accurate Medium like read time estimate with images in progression and Chinese / Japanese / Korean character support.

## Features
- Calculates read time of images in decreasing progression with ability to provide custom image tags (Example - 12 seconds for the first image, 11 for the second, until images counted at 3 seconds)
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
    totalWords, // 9
    wordTime, // 0.03272727272727273
    totalImages, // 1
    imageTime, //  0.2
    otherLanguageTimeCharacters, // 6
    otherLanguageTime, // 0.012
} = readTimeEstimate(string, 275, 12, 500, ['img', 'Image'])
```

### Input

| Variable  | Defaults | Type | Description  |
| :------------ | ---------------:|---------------:|:---------------|
| string | required | string | Input String |
| customWordTime | 275 | number | Speed of reading the text in Words per Minute |
| customImageTime | 12 | number | Speed of reading the image in seconds |
| chineseKoreanReadTime | 500 | number | Speed of reading the Chinese / Korean / Japanese characters in Characters per Minute |
| imageTags | `['img', 'Image']` | array | Custom Image tags to parse in the input string |


### Output

| Variable  | Type | Description  |
| :------------ | ---------------: | :---------------|
| humanizedDuration | string | Humanized Duration for the input string |
| duration | number | Actual Duration of the input string (in minutes) |
| totalWords | number | Number of words in the input string |
| wordTime | number | Read Time of the words in the input string (in minutes) |
| totalImages | number | Number of images in input string |
| imageTime | number | Read Time of the images in the input string (in minutes) |
| otherLanguageTimeCharacters | number | Chinese / Japanese / Korean language characters count |
| otherLanguageTime | number | Read Time of the Chinese / Japanese / Korean in the input string (in minutes) |

## Gatsby Plugin
[gatsby-read-time-estimate](https://github.com/pritishvaidya/gatsby-read-time-estimate)


### References 

#### Medium
 - [Help](https://help.medium.com/hc/en-us/articles/214991667-Read-time)
 - [Blog](https://blog.medium.com/read-time-and-you-bc2048ab620c)

## Contribution

 - [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.

## Questions

 Feel free to [contact me](mailto:pritishvaidya94@gmail.com) or [create an issue](https://github.com/pritishvaidya/read-time-estimate/issues/new)
