import { GetServerSideProps } from 'next';
import * as React from 'react';
import MapBackdrop from './../components/MapBackdrop';
import ReservationInfoCard from './../components/ReservationInfoCard';

interface Data {}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // use fetch

    // get the auth token

    // get access token and refresh token

    // get image of car

    return {
        props: {

        }
    }
}

const ReservePage: React.FC<Data> = () => {

    return (
       <MapBackdrop>
           <ReservationInfoCard 
           carId="fodjoim"
           carName="Model E"
           fuelLevel={50}
           rangeInMinutes={210}
           />
       </MapBackdrop>
    );
}



export default ReservePage;