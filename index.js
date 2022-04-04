// code your solution here

function saturdayFun(fun='roller-skate'){
    return (`This Saturday, I want to ${fun}!`);
};
saturdayFun();
  function mondayWork(work="go to the office"){
      return(`This Monday, I will ${work}.`);
  };
  mondayWork();
  function wrapAdjective(symbol) { 
        const start= "You are";
        return function(wrappedText){
            return (`${start} ${symbol}${wrappedText}${symbol}!`);
        };
    };
wrapAdjective("%")("a dedicated programer");