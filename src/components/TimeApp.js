import React, { useEffect } from 'react';

import { useState } from 'react';

const TimeApp = () => {
   const cTime = new Date().toLocaleDateString();
   const [time, setTime] = useState(cTime);

   const updateTime = () => {
      const newTime = new Date().toLocaleDateString();
      setTime(newTime);
   };

   useEffect(() => {
      const timeInterval = setInterval(updateTime, 1000);
      return () => {
         clearInterval(timeInterval);
      };
   }, [time]);

   return (
      <React.Fragment>
         <section>
            <div className=" flex justify-center items-center text-indigo-200 bg-fuchsia-800 w-96 h-96 mt-20 mx-auto rounded-full">
               <div>
                  <div>
                     <p>Day</p>
                  </div>
                  <div>
                     <p>{time}</p>
                  </div>
                  <div>
                     <p>Date</p>
                  </div>
               </div>
            </div>
         </section>
      </React.Fragment>
   );
};

export default TimeApp;
