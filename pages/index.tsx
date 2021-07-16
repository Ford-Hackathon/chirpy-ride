import * as React from 'react'
import MapBackdrop from './../components/MapBackdrop';
import CarCard from './../components/CarCard';
import {getAccessToken, getVehicleInformation, CarInformation } from './../constants';
import { GetServerSideProps } from 'next';

// interface Props {
//   carInformation: CarInformation;
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {

//   const accessToken = await getAccessToken();

//   // get car details (car id and car model, car image)
//   const carInformation = await getVehicleInformation(accessToken);

//   return {
//       props: {
//           carInfo: carInformation
//       }
//   }
// }

const Home: React.FC<void> = () => {
  return (
    <MapBackdrop>
      <CarCard
        model={"Edge"}
        distanceInMinutes={5}
        fuelLevel={80}
        costStart={3}
        costPerHour={10}
        carId={"8a7f9fa878849d8a0179579d2f26043a"}
      />

      <CarCard
        model="Ford Explorer"
        distanceInMinutes={20}
        fuelLevel={40}
        costStart={2}
        costPerHour={30}
        carId="aoeaon"
      />
    </MapBackdrop>
  );
}

export default Home;
