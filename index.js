module.exports = function(num){
  var data = [[5,'buzz'],[3,'fizz'],[15,'fizzbuzz']]
  var result = num
  data.forEach(function(data){
    if( num % data[0] == 0 ){
      result = data[1]
    }
  })
  return result
}
