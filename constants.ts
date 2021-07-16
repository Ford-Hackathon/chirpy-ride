export const authCode: string = "eyJraWQiOiI2cjIzQ2FTeTF4cFdUUFBxYVRtX01Vc2RKZGo1RWlDTnRtME4yVTAxNTdFIiwidmVyIjoiMS4wIiwiemlwIjoiRGVmbGF0ZSIsInNlciI6IjEuMCJ9.f4t0Yr9rZ3shU6RINkOcD6kQqcVuHJJCZu9zwRzMySunh1XU6khZvBeU4kwLYHa_fL_9TqV3d4kTmJfSXy-bblfST3oROS4OZ19M0OEmDsZcNPeQWhTMstoLGPUFDc9rxfJ__bu-M4W6Q3DwZA1BLn-8sLPkyToPUUbxdn0qYpUTbsQzlTIrX3Te7ZRkBSGynhguf0Qbp2x7tBKDE16hWibqjnbjsE_AKHSKvIRTQoh_57HiacuCiTePFwHOn03mscwVKsSD1BXRVoCE7qRsLt-wlE20yhENJt_NkzJJSmQPfnju1iduuqZpzWd2XwT8ujr6WB9TD31KZwq30ISvUw.5O0hbvZKPqtS19y8.ws3DWP7YUH-EWz_bPWDBLLkjYepwRhjELvnGfb6IxBfFuVApxtlVHIyOH4k7tQ_sP4Jl0S-JyP2TtFbD54L_82Rkh1OZE8LwUabsewnWKn6ctPQmPYYxHfKWEj4xQgl5bnwUgltEyK3spcFQf3dlj1quQjgEs5czQ2bdR7F0IPdo_05zH4mKU0aaEFGg-ti91xq73us-C_JZgz7JA9Im-othi_VCi1qN6NWwlBvzOv4-D3sbaIEC6ng7yr0r_Gwxskao-qfP5yqNzjXG2jjqllkmF4nHi8lt_iombiQztRTFDnTQxRp8GJ4wTk9qzqt6kB1AWgAUNQyTKYwD0ql2Z_rXRAF_4rfbWouQJK_K3IclHiKYMmGzQeXOTB1nK3_u5HxWUOBF5hiDWxRLS8Jrex2sya2bn3HFblmKmhjneSUUTa0Psd7icPp0FaaMfKV9PlBTCgS7VxWXQQJTyALrFkuvR3jILTB0I_hATLkWw-L9JBNiOsQ9ysEcuzKghSsJWE0YO4g2qhKPLW_S5F_Ze6BQnUBBNEzNpxKNn43Wxu8X1JCBzQ8k9m2NvntssGJwHiecRV8-whnVjeMVe5KMTiFqub0iy_ifaGvlv910QnV5_3pbax5Zrd2eJ7BP1JB4mqVKvbs9mNu6kBzcw5L2TfktLyY3f8ew7lEQXsLFQS8QLI_AfyTWnuIeg81k_cIb_UZDjnTCNlfdptJKD2dqOmhFG3DE4-ShKCx2d_9XhEO1c-0u61OefrL-kavJqrU2H6nqmsHIOPDYGOFiPqfhQJ8Xg1l8Mt1HtKEKvIa8xN2zcR8bfZoR3CsmczUH9-i4Pvt2k27Oqgj9gw.mU-JZ_zRjgYXtclmbtLgFQ"
export const redirectUri = "https://localhost:3000";
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
            'api-version': apiVersion
        }
    });

    return await data.json() as CarInformation;
}

