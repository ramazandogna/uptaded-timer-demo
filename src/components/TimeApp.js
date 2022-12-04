import React, { useEffect } from 'react';

import { useState } from 'react';

// Time
const TimeApp = () => {
   const cTime = new Date().toLocaleTimeString();
   const [time, setTime] = useState(cTime);

   const updateTime = () => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
   };

   useEffect(() => {
      const timeInterval = setInterval(updateTime, 1000);
      return () => {
         clearInterval(timeInterval);
      };
   }, [time]);

   // Date

   const cDate = new Date().toLocaleDateString();
   const [date, setDate] = useState(cDate);

   const updateDate = () => {
      const newDate = new Date().toLocaleDateString();
      setDate(newDate);
   };

   useEffect(() => {
      const dateInterval = setInterval(updateDate, 1000);
      return () => {
         clearInterval(dateInterval);
      };
   }, [date]);

   // Day

   const cDay = new Date().getDay();
   const [day, setDay] = useState(cDay);
   const weekDays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
   ];

   const updateDay = () => {
      const newDay = new Date().getDay();
      setDay(newDay);
   };

   useEffect(() => {
      const dayInterval = setInterval(updateDay, 1000);
      return () => {
         clearInterval(dayInterval);
      };
   }, [day]);

   return (
      <React.Fragment>
         <section>
            <div className=" flex justify-center items-center text-indigo-200 bg-fuchsia-800 w-96 h-96 mt-20 mx-auto rounded-full">
               <div>
                  <div>
                     <p className=" text-xl uppercase text-center ">
                        {weekDays[day]}
                     </p>
                  </div>
                  <div>
                     <p className=" italic text-6xl">{time}</p>
                  </div>
                  <div>
                     <p className="text-xl flex justify-end">{date}</p>
                  </div>
               </div>
            </div>
         </section>
         <div className=" fixed bottom-0 right-2 italic underline uppercase">
            Ramazan Doğan
         </div>
      </React.Fragment>
   );
};

export default TimeApp;
