console.log("hello")
for(let i=0 ; i<=5 ;i++){
    console.log("Hey im js");
}
console.log("for loop");
for(let b =10 ; b>0; b--){
    console.log(b)
}
console.log("break statement");
for(let c=1; c<=6 ; c++){
  if(c==4){
    break
  }

  else{
    console.log(c)
  }
}

console.log("continue statement");
for(let c=1; c<=6 ; c++){
    if(c==4){
      continue;//skips 4 as continue is used to skip the current iteration
    }
  
    else{
      console.log(c)
    }
  }
console.log("while loop");
let i=1;
  while(i<=10){
    console.log(i)
    i++;
  }
console.log("do while loop");
let j=1;
  do{
    console.log(j)
    j++;
  }while(j<=10)


let firstname="Chahat";
let lastname="Jain";

console.log(firstname + " " + lastname);
console.log(typeof(firstname));

let name= `Chahat
surname is
Jain`;
// console.log(name);
// let ans=`${firstname}  ${lastname}`;
// console.log(ans)

console.log(firstname.toUpperCase());
let str="Hello World";
console.log(str.substring(0,8));

// SPIT FUNCTION

let sentence="Hello, I am Chahat Jain";
let word= (sentence.split(" "));
console.log(word);

//BACKSLASH PRINTING WITH INVERTED COMMAS

let sen="Hello, I am \"Chahat\" Jain";
let w= (sen.split(" "));
console.log(w);
//joining the elements
console.log(w.join(','))