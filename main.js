let str = `
010-1234-5678.
the1234@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccdddd
`

// .은 js에서 특정한 기능으로 작동하기 때문에 
// ＼(백슬래시)기호를 넣어 일반적인 문자로 해석되게 하기위에 앞에 넣는다.
// $ - 줄(Line)의 끝에서 일치, /xyz$/
console.log(str.match(/\.$/gi))
