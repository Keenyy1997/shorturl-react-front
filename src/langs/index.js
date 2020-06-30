const { Words } = require('./en');

/**
 * @returns { Words }
 */
export default function (lang='english') {
  
  let traductions = {};

  switch(lang) {
    
    case 'english': default:
      traductions = Words;
    break;
  }

  return traductions;
}
