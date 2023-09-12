/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1,str2)
{
  //split will split the string in array then sort it then again join it using joi("") function to string back
  if(str1.split('').sort().join("")===str2.split('').sort().join("")){
    return true;
  }else{
    return false;
  }
}
var s="rasp"
var t="sarpee"
var ans=isAnagram(s,t)
console.log(ans)
