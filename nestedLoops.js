// Write your code below

let bobsFollowers = ['Mico', 'Bob', 'AJ', 'CJ'];
let tinasFollowers = ['Bob', 'Mico', 'Nathan'];
let mutualFollowers = [];

for (let b = 0; b < bobsFollowers.length; b++){
  for(let t = 0; t < tinasFollowers.length; t++){
    if(bobsFollowers[b] === tinasFollowers[t]){
        //push result to mutualFollowers
      mutualFollowers.push(bobsFollowers[b]);
    }
  }
};
//print result
console.log(mutualFollowers);