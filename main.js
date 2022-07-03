const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccdddd
`

console.log(
  // 한 개 이상 반복되는 임의의 문자를 @기준 앞쪽으로 일치시킨다.
  str.match(/(?<=@).{1,}/g)
)
