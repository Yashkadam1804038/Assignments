function f1(){
    //we can access outer var in inner function but vicevera not possible
    const outer="Outer var"
    //scope limited to outer function
   function innerf1(param)  //param=innerf2 (function alias)
    {
       
      console.log("inside inner function")
      param()
        console.log(`${outer}`)
    }
    

   
    function innerf2(){
        console.log("inside innerf2")
    }
    
   
   // function alias= we can create new reference with exisitng reference
 /*   const myinnerf2=innerf2
    console.log(myinnerf2)
    myinnerf2() */


  innerf1(innerf2)


}
f1()