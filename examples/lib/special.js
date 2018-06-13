Number.prototype.toFixed = function(num){  
  return(parseInt(this * Math.pow( 10, num  ) + 0.5)/Math.pow(10,num)).toString();  
} 