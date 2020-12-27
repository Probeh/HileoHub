import Crypto from '@helpers/crypto-helper';

export interface Credentials {
  apiKey           ?: string; /* Client Secret */
  appId            ?: string; /* Client Id     */
  authDomain       ?: string;
  messagingSenderId?: string;
  projectId        ?: string;
  storageBucket    ?: string;
  baseUrl          ?: string;
}
export function getCredentials(creds: Credentials, provider: string) {
  Object.keys(creds).forEach(key => {
    creds[key] = key == 'apiKey' || 'appId' || 'messagingSenderId'
      ? Crypto.decrypt(creds[key], provider)
      : creds[key]
  });
  return creds;
}