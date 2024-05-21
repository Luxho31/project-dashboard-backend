export const jwtConstants = {
    JWT_SECRET: '56ebba90d9506ccd69b534b2b02b5c2f313e7888ba3acdb796a43b29fe8fa5084d89254f4513f49874a7825a3238ee87f90b1d200fb8cc7fe87758351d96371c',
};



//TODO Usar el siguiente comando para generar un JWT_SECRET

// *Yo use esta 👇
// node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

//* Otras opciones, se pueden usar randomBytes de 256 o 64 bytes y convertirlo a base64, base64url o hex:
// node -e "console.log(require('crypto').randomBytes(256).toString('base64'))"
// node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
// node -e "console.log(require('crypto').randomBytes(64).toString('base64url'))"