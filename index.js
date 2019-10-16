// add solution here
function theBeatlesPlay(musician, instruments) {
  var array = [];
  for(var i = 0; i++; i < musician.length-1) {
    array.push(`${musician[i]} plays ${instruments[i]}`);
  }
  return array
}
