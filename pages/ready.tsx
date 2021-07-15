import * as React from 'react'
import MapBackdrop from './../components/MapBackdrop';
import ConfirmationCard from './../components/ConfirmationCard';

interface ConfirmationInformation {

}

const Ready: React.FC<ConfirmationInformation> = () => {
    return (
        <MapBackdrop>
            <ConfirmationCard />
        </MapBackdrop>
    );
}

export default Ready;