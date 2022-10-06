
let ceaserCipher = (str) => {
    //Deciphered reference letters
    let decoded = {
      a: 'r', b: 'q', c: 'a',
      d: 's', e: 'p', f: 'b',
      g: 't', h: 'o', i: 'c',
      j: 'u', k: 'n', l: 'd',
      m: 'v', n: 'm', o: 'e',
      p: 'w', q: 'l', r: 'f',
      s: 'x', t: 'k', u: 'g',
      v: 'y', w: 'j', x: 'h',
      y: 'z', z: 'i'    
    }
    
    //convert the string to lowercase
    str = str.toLowerCase();
    
    //decipher the code
    let decipher = '';
    for(let i = 0 ; i < str.length; i++){
      decipher += decoded[str[i]];
    }
    
    //return the output
    return decipher;
  }

// program to create JavaScript object using object literal
const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

