import MapBackdrop from './../components/MapBackdrop';
import CarCard from './../components/CarCard';

import CarImage from './../components/CarImage';
import PaymentInfo from './../components/PaymentInfo';

export default function Home() {
  return (
    <MapBackdrop>
      <CarCard model="Ford Edge"
        distanceInMinutes={5}
        fuelLevel={80}
        costStart={3}
        costPerHour={10}
        carId="07301863"
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
