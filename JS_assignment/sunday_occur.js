for(var y=2014;y<=2050;y++)
{
    var c=new Date(y,0,1)
    if(c.getDay()===0)
     console.log(`1st jan is sunday on ${y}`)
    
}