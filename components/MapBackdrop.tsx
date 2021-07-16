import * as React from "react";
import Image from "next/image";
import MapImg from './../public/map.png'

interface Data {}

const MapBackdrop: React.FC<Data> = ({ children }) => {
  return (
    <section>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url(./../public/map.png)",
        }}
        id="modal-id"
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="relative min-h-screen flex flex-col items-center justify-center ">
          <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapBackdrop;
