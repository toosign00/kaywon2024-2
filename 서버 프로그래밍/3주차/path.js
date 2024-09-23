const path = require('path');

const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

console.log(`파일 절대 경로 : ${__filename}`);
// 파일 절대 경로 : /Users/toosign/Desktop/계원예대/2학년 2학기/서버 프로그래밍/3주 차/basic/path.js


//경로 추출하기
const dir = path.dirname(__filename); 
console.log(`경로만 : ${dir}`);


// 파일 이름 추출하기
const fn = path.basename(__filename); 
const fn2 = path.basename(__filename, '.js'); //확장자 제거
console.log(`파일 이름 : ${fn}`); //파일 이름 : path.js
console.log(`파일 이름 : ${fn2}`); //파일 이름 : path


// 파일 확장자 추출하기
const ext = path.extname(__filename);
console.log(`파일 확장자 : ${ext}`); //파일 확장자 : .js
console.log(path.basename(__filename, ext)); //path


// 경로 분해하기
const parsedPath = path.parse(__filename);
console.log(parsedPath);


// 경로 합치기
const joinedPath = path.format(parsedPath);
