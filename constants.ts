function getAuthCode(url: string): string {
    return url.substr(url.indexOf('code=') + 1);
}

export const authCode: string = "eyJraWQiOiI2cjIzQ2FTeTF4cFdUUFBxYVRtX01Vc2RKZGo1RWlDTnRtME4yVTAxNTdFIiwidmVyIjoiMS4wIiwiemlwIjoiRGVmbGF0ZSIsInNlciI6IjEuMCJ9.XAidDeLukBr3UzRgT9TPXOVdBmqrthDOS1Gx-z14R-2rCzXj8IN_wUYwHkO_-OC7-Iqdw9O_lTL0NMjmCmVwz6nv1d_5wTHQy6r52m4UiQMDV7bVfPSjEWzC0J_WjbpTFLGsKcEp2hrZY-J_KY5grlVJvSxrXjI70ohqCei2S2fhhbyEsmJ-x5Kr4VUSeRXK-H8C0UAt8rvgCrhapFeQI6L1wqqxUzG78dXz7_8dICVzRsR2e4WJ2cFTWrqBYRORsxEsMxkXDi7AJq2eLg0QaXTZSObME0-m0ilCK7AUE_NYZrT1miRDanlWyfck6IwfUoRO3i-XovJ2sEAK_bvswQ.UDyv8pifAarbsiaV.i2ppTxdok8oNag9RwirAYEIZ1iqUPC6GpLaHcoUO8Ulc3XmKkGWjOaHDHTHij77Qxtes5zTbDvmAEPGhtpWlQh7UU9IdVjcaBfrJLxdElxzL0re-M4FiMxilE-UMaQS5De9-gulMPZXKgGlanhV4uBrQzqTOBs1C-yhvvAkql-4oumzcABAvcW5YE37u6xxyvLHLuiXwj7pNK0wxl2nDcFmqpZMNbi9mro38hXLCuhRkiIT0tBwsdbc1fmSI70ETKgy8F1H0keZZI3UAOqnIPScroEN3WwhktqPLRhtFWJuY_mRYA554z4rO9sTF4E16xnzRAIbW1Hxs9MAoU2bKl3I_mKHL73EYUoSSQ8RsB28rrjtwn48EBINjLVmARyE_R9tz6eBOlzm_bTUHx8D0M6FptjORZJSmulguZI0pJcyXdNhuMWfVTnhxB7TIy_EjILPksZFZ2lgCComJsptC3W1w1HOJGXyR3UXRqRVODV7AEu9T86NrgsLRnix-3v1JhFuitxVFThXea0TbJXAISFGnKQ9m_0vTsguEA8i_C0w02S7JEHDTR8_4ch7v67t2GAWNZU_KZiYlIbjoMimwDFGt6ohFULNzWD4iAbY0qg1HPIqTlh7p1OURD_0x7g-sw4ErmJJ-Jltuks2s2G6_Qy72Mtzu-vvk_0bqNXpDTHBt1p0SPKV3lFlGrFhhH17YkW8HPaYXCaIMHn8gMm3Zoxm4k03X-H7c2xesbT-itAN_PVQBGpYYf0SaWsaWZbqqbyPUBF0AZTKTRhZLDiFyo40kl0rmHjqOfMLVlMlLCQbzTQTfRTGpS5n8rgnxz0aOzuq5C2lEo5hX0xc.ZP9oSuzIRPwqYRlytiluWw"
export let redirectUri = 'localhost:3000';
export const clientId = "30990062-9618-40e1-a27b-7c6bcb23658a"
export const clientSecret = "T_Wk41dx2U9v22R5sQD4Z_E1u-l2B-jXHE"
export const vehicleId = '8a7f9fa878849d8a0179579d2f26043a'
export const applicationId = "afdc085b-377a-4351-b23e-5e1d35fb3700";
export const apiVersion = "2020-06-01"

export interface GetAccessTokenResponse {
    access_token: string;
    id_token: string;
    token_type: string;
    not_before: number;
    expires_in: number;
    expires_on: number;
    resource: string;
    id_token_expires_in: number;
    profile_info: string;
    scope: string;
    refresh_token: string;
    refresh_token_expires_in: number;

}

export async function getAccessToken(): Promise<string> {
    // use fetch
    const response = await fetch(`https://dah2vb2cprod.b2clogin.com/914d88b1-3523-4bf6-9be4-1b96b4f6f919/oauth2/v2.0/token?p=B2C_1A_signup_signin_common&grant_type=authorization_code&code=${authCode}&client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data: GetAccessTokenResponse = await response.json();
    const token =  data.access_token;
    console.log(token);
    return token;
}

export interface VehicleLocation {
    longitude: string;
    latitude: string;
    speed: number;
    direction: string;
    timeStamp: string;
}

export interface DoorStatus {
    vehicleDoor: string;
    value: string;
    vehicleOccupantRole: string;
    timeStamp: string;
}

export interface IgnitionStatus {
    value: string;
    timeStamp: string;
}

export interface PlugStatus {
    value: boolean;
    timeStamp: string;
}

export interface ChargingStatus {
    value: string;
    timeStamp: string;
    chargeStartTime: string;
    chargeEndTime: string;
}

export interface RemoteStartStatus {
    status: string;
    duration: number;
    timeStamp: string;
}

export interface VehicleStatus {
    tirePressureWarning: boolean;
    deepSleepInProgress: boolean;
    firmwareUpgradeInProgress: boolean;

    remoteStartStatus: RemoteStartStatus;

    chargingStatus: ChargingStatus;

    plugStatus: PlugStatus;

    ignitionStatus: IgnitionStatus;

    doorStatus: DoorStatus[];
}


export interface BatteryChargeLevel {
    value: number|null;
    distanceToEmpty: number;
    timestamp: string|null;
}

export interface FuelLevel {
    value: number;
    distanceToEmpty: number;
    timestamp: string;
}


export interface VehicleDetails {
    fuelLevel: FuelLevel
    batteryChargeLevel: BatteryChargeLevel;
    mileage: number;
    odometer: number;
}

export interface CarInformation {
    vehicleId: string;
    make: string;
    modelName: string;
    modelYear: string
    color: string;
    nickName: string;
    modemEnabled: string;
    lastUpdated: string;
    vehicleAuthorizationIndicator: number;
    serviceCompatible: boolean;
    engineType: string;
    vehicleDetails: VehicleDetails;

}

interface CarInformationResponse {
    status: string;
    vehicle: CarInformation;
}

export interface CarInformation {
    vehicleId: string;
    make: string;
    modelName: string;
    modelYear: string
    color: string;
    nickName: string;
    modemEnabled: string;
    lastUpdated: string;
    vehicleAuthorizationIndicator: number;
    serviceCompatible: boolean;
    engineType: string;

}

interface CarInformationResponse {
    status: string;
    vehicle: CarInformation;
}

export async function getVehicleInformation(accessToken: string): Promise<CarInformation> {
    const data = await fetch(`https://api.mps.ford.com/api/fordconnect/vehicles/v1/${vehicleId}`, {
        method: 'GET',
        headers: {
            'Application-Id': applicationId,
            'Authorization': `Bearer ${accessToken}`,
            'api-version': apiVersion,
            'Content-Type': 'application/json'
        }
    });

    return await data.json() as CarInformation;
}

