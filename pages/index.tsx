import * as React from 'react'
import MapBackdrop from './../components/MapBackdrop';
import CarCard from './../components/CarCard';
import {getAccessToken, getVehicleInformation, CarInformation } from './../constants';
import { GetServerSideProps } from 'next';

interface Props {
  carInformation: CarInformation;
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const accessToken = await getAccessToken();

  // get car details (car id and car model, car image)
  const carInformation = await getVehicleInformation(accessToken);

  return {
      props: {
          carInfo: carInformation
      }
  }
}

const Home: React.FC<Props> = ({ carInformation }) => {
  return (
    <MapBackdrop>
      <CarCard model={ carInformation.modelName }
        distanceInMinutes={5}
        fuelLevel={80}
        costStart={3}
        costPerHour={10}
        carId={ carInformation.vehicleId }
      />

      <CarCard model="Ford Explorer"
        distanceInMinutes={20}
        fuelLevel={40}
        costStart={2}
        costPerHour={30}
        carId="aoeaon"
      />
    </MapBackdrop>
  )
}

export default Home;
