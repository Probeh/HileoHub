import { AES, enc } from 'crypto-js';

export default class Crypto {
  // ======================================= //
  public static decrypt(ciphertext: string, secret: string) {
    return AES.decrypt(ciphertext, btoa(secret)).toString(enc.Utf8);
  }
  public static encrypt(rawstring: string, secret: string): string {
    return AES.encrypt(rawstring, btoa(secret)).toString();
  }
  // ======================================= //
}