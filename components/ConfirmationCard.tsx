import * as React from 'react';

interface Props {}

const ConfirmationCard: React.FC<Props> = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 bg-transparent">
        <div className="max-w-lg w-full rounded-lg shadow-lg p-4 bg-white">
            <h3 className="font-semibold text-lg tracking-wide">You are All Set.</h3>
            <p className="text-gray-500 my-1">
                Enjoy Your Ride
            </p>
            <div className="mt-2">
                <a href="#" className="text-blue-700  inline-flex items-center font-semibold tracking-wide">
                    <span className="hover:underline">
                        Get Help
                    </span>
                    <span className="text-xl ml-2">&#8594;</span>
                </a>
            </div>
        </div>
    </section>
    );
}

export default ConfirmationCard;