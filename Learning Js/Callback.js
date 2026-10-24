/**
 Strings
Easy–Medium

Given a string, find the first character that appears exactly once.

Example 1
firstUniqueChar("aabbcddex")
// "c"


Example 2
firstUniqueChar("aabbcc")
// null


Example 3
firstUniqueChar("swiss")
// "w"



Requirements
- Write firstUniqueChar(str).
- Return the character, or null if every character repeats.
- Preserve the original order of the string.
- Try solving it without using .find() on your first attempt.
 */


const name ='aabiollb';


function firstUniqueChar(name){
  for (const char of name ) {
  const regex = new RegExp(char, 'g');
  const occurrences = name.match(regex);
  if(occurrences.length ==1){
    return char;
  }
}
return null;
}
console.log(firstUniqueChar(name));