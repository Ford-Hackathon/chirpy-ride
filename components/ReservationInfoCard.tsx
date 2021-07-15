import * as React from 'react';
import { useRouter } from 'next/router';


export interface CarInformation {
    carId: string
    carName: string
    fuelLevel: number;
    rangeInMinutes: number;
}

const ReservationInfoCard: React.FC<CarInformation> = ({ carId, carName, fuelLevel, rangeInMinutes }) => {
    const router = useRouter()
    const reserveCar = (): void => {
        router.push('/ready');
    }

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <div className='max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                        <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">{carName}</h2>
                        <p className="text-gray-500 text-base">{carId}</p>
                        <p className="text-gray-500 text-base">{fuelLevel}% / {rangeInMinutes} minutes</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg">
                        <div className="py-4 px-4">
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold mb-3">Terms and Conditions:</h4>
                                <div className="flex flex-col text-sm text-gray-500">
                                    <span className="mb-1">Driver must carry valid ID</span>
                                    <span className="mb-1">Occupants must wear seatbelts at all times</span>
                                    <span className="mb-1">Do not exceed vehicle occupancy</span>
                                    <span className="mb-1">Children under 8 need car seats</span>
                                    <span className="mb-1">Do not drive under influence</span>
                                    <span className="mb-1">Do not text and drive</span>
                                    <span className="mb-1">Do not exceed the speed limit</span>
                                    <span className="mb-1">Return car to appropriate checkpoints</span>
                                    <span className="mb-1">Follow local and federal traffic laws</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <button
                            className="mb-2 md:mb-0 bg-primary px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                            type="button"
                            aria-label="like"
                            onClick={reserveCar}
                        >
                            PAY AND GO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationInfoCard;

