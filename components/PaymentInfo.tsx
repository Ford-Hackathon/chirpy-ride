import * as React from 'react'
import Image from 'next/image';

import CarImageSrc from "./../public/car.webp";

interface PaymentinfoProps {
    paymenttypeicon: string;
    paymentrate: string;
    paymenttype: string;
}

// TODO Fix image loading

const PaymentInfo: React.FC<PaymentinfoProps> = ({ paymentrate, paymenttype, paymenttypeicon }) => {
    return (
      <div className="payment-info">
        <Image className="payment-type-icon" src={CarImageSrc} alt="Payment icon" width="20px"/>
        <div className="overlap-group2">
          <p className="payment-ratevalign-text-middlelato-normal-dove-gray-12px">
            {paymentrate}
          </p>
          <div className="payment-typevalign-text-middle">{paymenttype}</div>
        </div>
      </div>
    );
}

export default PaymentInfo;