import { GetServerSideProps } from 'next';
import * as React from 'react';
import MapBackdrop from './../components/MapBackdrop';
import ReservationInfoCard from './../components/ReservationInfoCard';
import fetch from 'node-fetch';

import {authCode, clientSecret, redirectUri, clientId, GetAccessTokenResponse, } from './../constants';

interface Data {
    access_token: string;
    
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // use fetch
    const response = await fetch(`https://dah2vb2cprod.b2clogin.com/914d88b1-3523-4bf6-9be4-1b96b4f6f919/oauth2/v2.0/token?p=B2C_1A_signup_signin_common&grant_type=authorization_code&code=${authCode}&client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data: GetAccessTokenResponse = await response.json();
    const accessToken = data.access_token;

    // get car details (car id and car model, car image)


    return {
        props: {
            access_token: accessToken
        }
    }
}

const ReservePage: React.FC<Data> = ({ access_token }) => {

    return (
      <MapBackdrop>
        <ReservationInfoCard
          carId={"8a7f9fa878849d8a0179579d2f26043a" }
          carName="Edge"
          fuelLevel={50}
          rangeInMinutes={210}
        />
      </MapBackdrop>
    );
}



export default ReservePage;