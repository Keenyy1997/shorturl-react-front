const DefaultWords = require('./en');

/**
 * @returns { DefaultWords.Words }
 */
export default function (lang='english') {
  
  let traductions = {};

  switch(lang) {
    
    case 'english': default:
      traductions = DefaultWords.Words;
    break;
  }

  return traductions;
}
