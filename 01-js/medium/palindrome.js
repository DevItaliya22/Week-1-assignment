/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function reverse(str)
{
  let ans=""
  for(let i=str.length-1;i>=0;i--)
  {
    if(!(str[i]!==' '||str[i]!==','||str[i]!=='?'||str[i]!=='!'))
      ans+=str[i]
  }
  return ans
}
function isPalindrome(str) 
{
  var str2=reverse(str.toLowerCase());
  var str3=""
  for(let i=0;i<str.length-1;i++)
  {
    if(!(str[i]!==' '||str[i]!==','||str[i]!=='?'||str[i]!=='!'))
      str3+=str[i]
  }

  return str3===str2
}
console.log(isPalindrome("abbbbb  ?? a"))
//module.exports = isPalindrome;
