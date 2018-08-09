/* Алгоритмы <3 <3
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфными если все их символы
s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/

const solution = (arr) => {
    const firstString = arr[0];
    const secondString = arr[1];

    if (firstString.length !== secondString.length) return false;

    const letterMap = {};

    for (var i = 0; i < firstString.length; i++) {
        var letterA = firstString[i],
            letterB = secondString[i];
     
        if (letterMap[letterA] === undefined) {
          letterMap[letterA] = letterB;
        } else if (letterMap[letterA] !== letterB) {
          return false;
        }
      }
      return true;
};

console.log(solution(["egg", "add"]));
console.log(solution(["foo", "bar"]));
console.log(solution(["paper", "title"]));
console.log(solution(["ca", "ab"]));
console.log(solution(["aa", "bb"]));
console.log(solution(["aedor", "eiruw"]));