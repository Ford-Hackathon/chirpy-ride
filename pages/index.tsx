import Image from 'next/image'
import CarImageSrc from './../public/car.webp'

import CarImage from './../components/CarImage';
import PaymentInfo from './../components/PaymentInfo';

export default function Home() {
  return (
   <div className="card">
      <div className="overlap-group">
        <div className="car-info">
          <CarImage src='car.png' />
          <div className="flex-col">
            <div className="flex-row">
              <div className="car-namevalign-text-middle">MUSTANG MACH-E</div>
              <Image
                className="more-icon"
                src={CarImageSrc}
                alt="More icon"
              />
            </div>
            <div className="car-idvalign-text-middle">ID: 0730-1863</div>
            <div className="battery-info">
              <div className="battery-percentvalign-text-middlelato-normal-dove-gray-12px">80%</div>
              <Image
                className="battery-icon"
                src={CarImageSrc}
                alt="Car image"
              />
              <div className="battery-rangevalign-text-middlelato-normal-dove-gray-12px">211 mi range</div>
            </div>
          </div>
        </div>
        <PaymentInfo
          paymenttypeicon="paymenttypeicon.png"
          paymentrate="$2 to start, then $10/hour"
          paymenttype="FordPass"
        />
        <div className="overlap-group1">
          <div className="button-textvalign-text-middle">RESERVE</div>
        </div>
      </div>
    </div>
  )
}
