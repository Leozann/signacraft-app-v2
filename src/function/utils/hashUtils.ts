import { HmacSHA256 , enc} from 'crypto-js';

/**
 * Generates an HMAC SHA-256 hash.
 * @param message - The message to hash.
 * @param secretKey - The secret key used for hashing.
 * @returns Hex-encoded HMAC hash.
 */

function GenerateHashToken(secretKey:string, value:string) {
    return HmacSHA256(value, secretKey).toString(enc.Hex);
};

function    VerifyHashToken(secretKey:string, value:string, expectedHash:string) {
    const hash = GenerateHashToken(secretKey, value);
    if (hash === expectedHash) {
        return true;
    } else {
        return false;
    }
};

export { GenerateHashToken, VerifyHashToken };

