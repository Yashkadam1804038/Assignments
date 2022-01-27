function c_to_f(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  
    console.log(`${cTemp} celcius in fahrenheit is ${cToFahr} `);
}

function f_to_c(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  console.log(`${fTemp} fahrenheit in celcius is ${fToCel} `);
} 
c_to_f(77);
f_to_c(89);
