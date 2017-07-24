# xhelper

### Installattion
```javascript
npm install xhelper --save
```

### Backend Usage
```javascript
const xhelper = require('xhelper');
```

### Frontend Usage
```html
<script src="./node_modules/xhelper/xhelper.min.js"></script>
```

| Function Name  | Description |
| ---------------|-------------|
| containsObject | Checks if the array contains a certain object|
| ceil | Ceil the given number |
| floor | Floor the given number |
| round | Round the given number |
| truncate | Truncate the given number |
| escapeRegex | Escape Regex input |
| unspace | Remove spaces from the string |
| toBoolean | Converts the string to boolean value |
| isUndefined | Checks if object is undefined |
| isNull | Checks if object is null |
| deg2rad | Converts degree angle to radiant |
| validateEmail | Validates the given email address |
| leadingZeroes | Adds leading zeroes to the string untill it matches the given characters length |
| commaSeparateNumber | Adds commas to the number at thousands, millions, ... |
| getLastMidnight | Gets the last midnight timestamp according to the user date |
| getCurrentMonthFirstDay | Gets the last midnight of the first day of the month's timestamp according to the user date |
| ceilToMinute | Round number of seconds to the nearest greater number of minutes |