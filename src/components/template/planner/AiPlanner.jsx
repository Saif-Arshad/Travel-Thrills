import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TourPlanning } from '@/redux/feature/AiApi.Slice';
import Spinner from '@/components/spinner/Spinner';
import {Days} from "@/redux/feature/Api.Slice"
import Link from 'next/link';
import { differenceInDays } from 'date-fns'; // Import differenceInDays function

function AiPlanner() {
  const { destination, days, clicked, dateTo, dateFrom } = useSelector((state) => state.formData);
  const { isError, isLoading, tourPlan } = useSelector((state) => state.aiPlanning);
  const dispatch = useDispatch();

  useEffect(() => {
    if (destination && days && clicked) {
      dispatch(TourPlanning({ destination, days }));
    }
  }, [destination, days]);

  useEffect(() => {
    // Calculate days difference and dispatch Days action when dateTo and dateFrom are available
    if (dateTo && dateFrom) {
      const daysDifference = differenceInDays(new Date(dateTo), new Date(dateFrom));
      dispatch(Days(daysDifference));
    }
  }, [dateTo, dateFrom]);

  return (
    <div className='w-full mt-6 bg-black flex items-center justify-center'>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div className='w-full min-h-[30vh] flex items-center justify-center'>
          <p className="text-red-400">
            Oops! It seems there was an issue loading the content.
          </p>
        </div>
      ) : (
        <div className="w-full">
          {/* Rendering the tour plan */}
          <h1 className="text-3xl md:text-5xl font-bold text-center my-8">Tour Plan</h1>
          {tourPlan && tourPlan.itineraryData && Object.entries(tourPlan.itineraryData).map(([day, description]) => (
            <div key={day}>
              <h2 className="capitalize text-xl font-semibold my-4">{day}</h2>
              <p className='text-lg'>{description}</p>
            </div>
          ))}
           <Link href={`/country-detail/${destination}`}>
                  <button className="capitalize border-2  bg-[#43B97F] text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl my-5 text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
                    More about {destination}
                  </button>
</Link>
        </div>
      )}
    </div>
  );
}

export default AiPlanner;
