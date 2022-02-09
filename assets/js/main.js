// -----lev1_1-----
console.log('-----lev1_1-----');

let firstName = 'Max';
let lastName = 'Mustermann';

console.log(firstName.length);
console.log(lastName.length);

let fullName = firstName + lastName;

console.log(firstName.length + lastName.length);


// -----lev1_2-----
console.log('-----lev1_2-----');

const txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.';

console.log(txt.indexOf('h'));
console.log(txt.indexOf('Earth'));
console.log(txt.indexOf('Moon'));


// -----lev1_3-----
console.log('-----lev1_3-----');

var txt2 = 'Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.';

console.log(txt2.search(';'));
console.log(txt2.search('green'));
console.log(txt2.search('blue')); // sensitive
console.log(txt2.search(/blue/i));  // insensitive


// -----lev1_7-----

const text = 'Sam is good at codingschool';

let newText = text.replace('good at codingschool', 'bad at school')
document.write(newText + '<br>');

let newText2 = text.replace('codingschool', 'school')
document.write(newText2 + '<br>');

let newText3 = text.replace('codingschool', 'tennis')
document.write(newText3 + '<br>');


// -----lev1_8-----

const line = 'Sam is going to codingschool';

let newLine = line.replace('codingschool', 'school');

let newLine2 = newLine.toUpperCase(newLine);
document.write(newLine2 + '<br>');

let newLine3 = newLine.toLowerCase(newLine);
document.write(newLine3 + '<br>');

let newLine4 = [];
newLine.split(' ').forEach((word, index) => {
  if(index === 0 || index === 4) {
    newLine4.push(word.toUpperCase());
  } else {
    newLine4.push(word.toLocaleLowerCase());
  }
});

document.write(newLine4.join(' ') + '<br>');

let newLine5 = [];
newLine.split(' ').forEach((word, index) => {
  if(index === 1 || index === 2 || index === 3) {
    newLine5.push(word.toUpperCase());
  } else {
    newLine5.push(word.toLocaleLowerCase());
  }
});

document.write(newLine5.join(' ') + '<br>');

let newLine6 = [];
newLine.split(' ').forEach((word) => {
    newLine6.push(word.charAt(0).toUpperCase() + word.substring(1, word.length));
});

document.write(newLine6.join(' ') + '<br>');
