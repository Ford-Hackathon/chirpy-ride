function getAuthCode(url: string): string {
    return url.substr(url.indexOf('code=') + 1);
}

export const authCode: string = "eyJraWQiOiI2cjIzQ2FTeTF4cFdUUFBxYVRtX01Vc2RKZGo1RWlDTnRtME4yVTAxNTdFIiwidmVyIjoiMS4wIiwiemlwIjoiRGVmbGF0ZSIsInNlciI6IjEuMCJ9.hLsBcG0bNOWvzLoJUDI4Di6fdGeEWnNKY3_oRMfrYdeAszmu1Ej63TpfM46pev9pgvq4YqedQgOqnvfWY_en6R8K_DqANuUM6bIEY1fyO1AM9IWIUPd_rDSsH24KxFZ0b1vyHn4KcmYhbYEhjkkeB-wM0yKEqN1pQV1S4tvAS-DJLDhOJgDkLQd8P19A6z6m5Mzuyle4Z0qWgZ-hpHWpXhLm69X2WsxEyYBbsNeQkOB5e7J-VsKQ_cGV-2gmYvE6KaCAIVWh0FJeQUy9egGd-rExjg_RTZ_DaYKhyswWG9_u8lDe2lLT-RQUXusziMS5m9TskTXgKpeiqad41Y0DQQ.LGB2gplrYBpFQGSr.tV7PrFICTjJcp4_X93l-Dke5WPfp0oDRahyZdfb5-r4Py2t8JppDlfg1dtPgJGOyv4w2cKJt3Tw-G21fdGOH9hWurMHf0V1aDmWmZ1peK8U5opwxsfEao3NDTTAiy9ytFp3N3UTbCdEq5vlGjiLIEkbQqw5jhEiXwb4X2yJWW5tReCwxoZvvnEBA6zfzg0w6FYeMLECh2ucRejEWRobi7RlSap0eMWmj6cZyyfoYAZpSLUIebeclWQ0hOMlYUmJTHeMGUUkWQ3ffTo7BeMSsobGNmCvUk7uiKnoknUHU2-9Rnij3sycYLxJNh7Azl_zA44Teyz3Jnp_gxLQZqROgo1aeC3g9OX7Yi5PUIdIIMQVSSZND4qQ0wWhrKokmDd3_ntQ2DpYjtnzADy5g2KGXXsRePL20IkTfPImS5xkwxAc3VpN-JOk4bz-VQfAyUmJnw9E7DMd52j4vomfmntM-kqXzbuqeH3WdCA6Wqv3tf2wed8QTZUCa_48Dzv__dU0Mb67Hb_v2GQS-sRjqpDT0GZ-VdPJP8yUsI_3wsTcmspdHhy2VbDB80sNhVXbWM7JD2uq2di2o0z2TMteRI0e6ERYDwDlZb70y75EweX5QgkktVfUq21siW4-oL25qYWc-rCtMeIogOsL0Na_AbA8Gyw20eOo2fJiUFQFe6FhycrmeEL4Hl9D1UkZgqMGotGYbr09sv8q3fHBHOP_hOnV1DiNsu2Gd0ZF8OiIFZduaXRmX1lIeis2EIkI15nDKM4iUoevK3rosXRBZYe0PmEBS_8vBKSgvT1E497oZ2Hga_qmZ5METrjw85jlLWKE7z3PEfm9Ks7AS88lKQwRXTg.9dr9AmD1KkQWCRtQII_Ftw"
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

