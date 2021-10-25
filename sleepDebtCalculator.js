const getSleepHours  = day => {
    if (day === 'monday') {
       return 8;
     } else if(day === 'tuesday') {
       return 7;
     }else if(day === 'wednesday') {
       return 6;
     }else if(day === 'thursday') {
       return 8;
     }else if(day === 'friday') {
       return 8;
     }else if(day === 'saturday') {
       return 7;
     }else if(day === 'sunday') {
       return 7;
     }else{
       return 'Error!!'
     }
   };
   const getActualSleepHours = () => 
     getSleepHours('monday')+ 
     getSleepHours('tuesday')+ 
     getSleepHours('wednesday')+ 
     getSleepHours('thursday')+ 
     getSleepHours('friday')+ 
     getSleepHours('saturday')+ 
     getSleepHours('sunday');
   
   console.log(getSleepHours('tuesday')); 
   console.log(getActualSleepHours()); 
   
   const getIdealSleepHours = () => {
     const idealHours = 8;
     return idealHours * 7;
   };
   
   const calculateSleepDebt = () => {
       const actualSleepHours = getActualSleepHours();
       const idealSleepHours = getIdealSleepHours();
   };
   if (actualSleepHours === idealSleepHours) {
     console.log("You've got the perfect amount of sleep.");
   } 
   else if (actualSleepHours > idealSleepHours) {
     console.log("You've got more sleep than needed.");
   } 
   else if(actualSleepHours < idealSleepHours){
     console.log('You should get some rest.');
   } 
   else{
     console.log('Error! Something is wrong.')
   }
   
   calculateSleepDebt()
   
   
   
   
   
   
   
   
   