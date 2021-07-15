import * as React from 'react';
import Image from 'next/image';

interface CardData {
  imageSrc: string;
  model: string;
  distanceInMinutes: number;
  fuelLevel: number;
  costStart: number;
  costPerHour: number;
  carId: string
}

const CarCard: React.FC<CardData> = ({ imageSrc, model, distanceInMinutes, fuelLevel, costStart, costPerHour, carId }) => {
  return (
    <div className="flex flex-col mt-32">
      <div className="bg-white shadow-md  rounded-3xl p-4">
        <div className="flex-none lg:flex">
          <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
            <Image
              src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="Just a flower"
              width="200px"
              height="200px"
              className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
            />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                {carId}
              </div>
              <h2 className="flex-auto text-lg font-medium">
                {model}
              </h2>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-4  text-sm text-gray-500">
              <div className="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="">{fuelLevel}%</p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="">{distanceInMinutes} minutes</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex space-x-3 text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <button className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                  <span className="text-green-400 hover:text-green-500 rounded-lg">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="40pt" height="40pt" viewBox="0 0 900.000000 507.000000"
                      preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,507.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M4455 4821 c-52 -13 -87 -37 -196 -133 -292 -258 -351 -308 -362
-308 -7 0 -147 14 -312 30 -165 17 -313 27 -330 24 -70 -15 -136 -66 -167
-129 -9 -16 -39 -136 -68 -265 -28 -129 -59 -264 -68 -299 l-17 -63 -265 -155
c-146 -85 -273 -162 -284 -171 -43 -39 -70 -103 -70 -166 0 -56 10 -83 122
-340 67 -154 122 -287 122 -297 0 -9 -54 -140 -120 -290 -69 -155 -123 -294
-126 -319 -9 -67 11 -126 59 -176 27 -27 135 -97 299 -194 141 -83 259 -159
263 -168 3 -9 33 -140 66 -291 78 -355 90 -384 183 -427 64 -30 80 -30 420 2
168 16 285 23 297 18 10 -5 118 -97 239 -204 122 -107 236 -203 253 -212 48
-25 102 -31 156 -18 54 13 90 41 362 280 85 75 161 141 170 148 14 10 75 7
328 -18 369 -36 377 -36 457 45 58 57 46 21 139 440 26 116 51 219 57 230 5
11 129 90 275 175 149 88 277 169 294 188 37 41 62 128 53 179 -4 21 -60 161
-126 312 -65 151 -118 282 -118 291 0 9 54 140 121 291 136 310 147 351 110
430 -12 25 -36 60 -54 76 -49 47 -287 183 -320 183 -63 0 -102 -90 -59 -138 9
-11 72 -52 140 -92 75 -44 128 -81 134 -95 9 -20 -2 -52 -72 -212 -161 -365
-170 -389 -170 -443 0 -55 0 -54 145 -390 93 -213 98 -229 96 -262 -1 -16
-111 -85 -436 -274 -55 -31 -114 -72 -132 -91 -39 -41 -49 -72 -113 -363 -69
-314 -68 -308 -93 -325 -22 -14 -90 -10 -517 35 -112 12 -165 8 -211 -15 -22
-12 -339 -284 -463 -397 -29 -27 -54 -31 -79 -15 -21 14 -147 124 -307 267
-129 116 -174 150 -214 162 -40 12 -78 10 -484 -28 -96 -8 -185 -13 -198 -10
-29 8 -33 22 -110 375 -67 305 -72 316 -189 386 -38 23 -159 95 -268 159 -123
73 -202 126 -208 140 -12 26 -12 27 136 361 80 179 99 231 103 280 5 68 12 47
-146 413 -80 183 -100 237 -93 255 9 23 43 45 326 208 88 50 179 105 202 120
75 52 75 52 168 464 25 110 47 210 50 222 3 13 15 29 28 37 19 13 55 12 317
-15 301 -31 357 -31 411 -4 16 9 120 96 231 193 239 211 247 217 275 226 23 7
36 -2 331 -264 84 -74 171 -145 194 -157 53 -29 71 -29 421 4 285 26 288 27
307 7 13 -12 30 -65 50 -154 33 -149 46 -170 107 -170 43 0 83 37 83 77 -1 50
-56 277 -79 321 -25 48 -93 98 -150 109 -20 3 -176 -7 -348 -22 l-312 -29 -63
56 c-35 31 -137 122 -228 203 -91 80 -181 155 -200 165 -43 22 -114 32 -155
21z"/>
                        <path d="M5968 3727 c-85 -79 8 -216 111 -163 64 34 76 109 24 160 -35 35 -99
36 -135 3z"/>
                        <path d="M4195 3228 c-148 -8 -252 -34 -372 -93 -182 -90 -286 -227 -286 -378
-1 -112 39 -183 128 -230 65 -34 173 -29 260 11 91 43 186 140 238 243 41 80
44 105 13 123 -15 9 -21 6 -39 -19 -74 -103 -187 -175 -275 -175 -46 0 -58 4
-83 29 -24 24 -29 38 -29 77 0 126 116 234 308 286 122 33 339 31 547 -6 216
-38 210 -35 133 -80 -129 -75 -237 -182 -395 -388 l-41 -54 -81 -13 c-180 -27
-318 -100 -290 -153 13 -24 44 -23 80 2 52 38 199 77 199 54 0 -21 -207 -271
-310 -375 -110 -111 -136 -131 -211 -169 -170 -83 -307 -61 -369 61 -53 103 4
231 141 315 67 42 77 72 33 100 -22 15 -32 15 -79 5 -64 -15 -156 -72 -209
-131 -81 -90 -119 -225 -97 -347 38 -213 232 -332 476 -289 250 43 442 227
738 705 56 90 106 165 112 167 5 2 80 10 165 18 149 14 156 13 180 -5 95 -73
122 -81 137 -43 4 11 -4 24 -26 41 -39 30 -39 37 -1 53 40 17 87 71 99 116 22
79 -39 154 -114 140 -70 -13 -134 -98 -135 -177 0 -36 -1 -36 -46 -43 -26 -3
-82 -6 -126 -6 l-79 0 41 59 c60 89 138 169 255 262 58 46 105 89 105 96 0 7
6 13 13 13 6 0 104 -25 217 -55 113 -31 244 -64 291 -75 204 -44 395 -49 532
-14 176 45 315 164 276 236 -12 23 -37 22 -174 -3 -147 -26 -446 -36 -625 -19
-74 6 -234 27 -355 46 -414 66 -490 76 -620 82 -71 4 -184 4 -250 0z"/>
                      </g>
                    </svg>
                  </span>
                  <span>${costStart} start/${costPerHour} per hour</span>
                </button>
              </div>
              <button
                className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                type="button"
                aria-label="like"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;