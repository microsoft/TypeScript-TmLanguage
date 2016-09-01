for(var j=0; (j<rows && l<num); j++) {
  for(var k = 0; (k<cols && l<num); k++){
    output.push( {h, w, x: k*w, y: h*j, file: file.file});
    l++;
  }
}