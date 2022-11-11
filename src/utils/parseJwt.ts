import jwt_decode from "jwt-decode";
interface JwtData {
    sub: string,
    name: string,
    iat: number,
    id: number,
    role: string
}

export function parseJwt(jwt: string): JwtData {
    return jwt_decode(jwt)
}
