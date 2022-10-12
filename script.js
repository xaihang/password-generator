// Assignment Code
var generateBtn = document.querySelector("#generate");

var loweredCased = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';

var upperedCased = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';

var specialCharaters = '!,@,#,$,%,^,&,*,(,),_,-,+,=,?,>,<';

var numbers = '0,1,2,3,4,5,6,7,8,9';


//assignment criterias:
// 1. prompt user password criteria
//   a. password length 8 < 128 
//   b. type: lowered cased, uppered cased, sepcial characters, & numbers
// 2. validates user's input 
// 3. generate password based on user's allowed/selected criteria
// 4. display password on the page 

function generatePassword(){
  window.prompt()
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
