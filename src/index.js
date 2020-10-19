module.exports = function toReadable (number) {
  const stringNum = number.toString();
  let hrn = ''
  
  for (let i = stringNum.length - 1; i >= 0; i--) {
    if (i === stringNum.length - 1)  {
      switch (stringNum.charAt(i)) {
        case '0':
          hrn += stringNum.length === 1 ? 'zero' : '';
          break;
        case '1':
          hrn += 'one';
          break;
        case '2':
          hrn += 'two';
          break;
        case '3':
          hrn += 'three';
          break;
        case '4':
          hrn += 'four';
          break;
        case '5':
          hrn += 'five';
          break;
        case '6':
          hrn += 'six';
          break;
        case '7':
          hrn += 'seven';
          break;
        case '8':
          hrn += 'eight';
          break;
        case '9':
          hrn += 'nine';
          break;
        default:
          return;      
      }
    }
    if (i === stringNum.length - 2)  {
      switch (stringNum.charAt(i)) {
        case '0':
          hrn += '';
          break;
        case '1':
          switch (stringNum.charAt(i + 1)) {
            case '0': 
              hrn = 'ten';
              break;
            case '1':
              hrn = 'eleven';
              break;
            case '2': 
              hrn = 'twelve';
              break;
            case '3':
              hrn = 'thirteen';
              break;
            case '4': 
              hrn = 'fourteen';
              break;
            case '5':
              hrn = 'fifteen';
              break;
            case '6': 
              hrn = 'sixteen';
              break;
            case '7':
              hrn = 'seventeen';
              break;
            case '8':
              hrn = 'eighteen';
              break;
            case '9':
              hrn = 'nineteen';
              break;
            default:
              return;
          }
          break;
        case '2':
          hrn += '  twenty';
          break;
        case '3':
          hrn += '  thirty';
          break;
        case '4':
          hrn += '  forty';
          break;
        case '5':
          hrn += '  fifty';
          break;
        case '6':
          hrn += '  sixty';
          break;
        case '7':
          hrn += '  seventy';
          break;
        case '8':
          hrn += '  eighty';
          break;
        case '9':
          hrn += '  ninety';
          break;
        default:
          return;      
      }
    }
    if (i === stringNum.length - 3)  {
      switch (stringNum.charAt(i)) {
        case '0':
          hrn += '';
          break;
        case '1':
          hrn += '  one hundred';
          break;
        case '2':
          hrn += '  two hundred';
          break;
        case '3':
          hrn += '  three hundred';
          break;
        case '4':
          hrn += '  four hundred';
          break;
        case '5':
          hrn += '  five hundred';
          break;
        case '6':
          hrn += '  six hundred';
          break;
        case '7':
          hrn += '  seven hundred';
          break;
        case '8':
          hrn += '  eight hundred';
          break;
        case '9':
          hrn += '  nine hundred';
          break;
        default:
          return;      
      }
    }
  }
  return hrn.split('  ').reverse().join(' ').trim();
}
