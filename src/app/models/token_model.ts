export class TokenModel{
    data:TokenResponse;
    errorMessages:any;
    isSuccessful:boolean

}
export class TokenResponse{
    token:string;
    refreshToken:string;
    refreshTokenExpires:any
}