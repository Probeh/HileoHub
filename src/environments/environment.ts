// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};
export const providers = {
  github: {
    apiKey : 'U2FsdGVkX18vmJmB9GooMvvV9biYa5X0MP47BmenGMC0bheOsxMjTnXowzA3lhbRBlOKAzKr9DZFe08TzNj3ng==',
    appId  : 'U2FsdGVkX1/kNHY6pFAX4uxzl4FXPoQ+ycywev9/8+Nhe1hrK2/f5NHM5vuxKLp9'                        ,
    baseUrl: 'https://api.github.com'
  },
  firebase: {
    apiKey           : "U2FsdGVkX1+hIZAGnxYLXAczw8Xg93ybGGZVMApMRIOkOgfAjJrjs9onSA1cxgEI0rF+71wbEMC1lxrcJYvObw==",
    appId            : "U2FsdGVkX1/aM+wz5lpnuCaLuZy+Ao92qmdIV9Z4C0Ezn5TQPjLQ6STkaTGO4CDEjFtJw3LKyqJU2/1Uicz6IA==",
    messagingSenderId: "U2FsdGVkX1/JwZgKrOuZT2Hai4GOJtDvtcJoLdANpzY="                                            ,
    projectId        : "hileohub"                                                                                ,
    authDomain       : "hileohub.firebaseapp.com"                                                                ,
    storageBucket    : "hileohub.appspot.com"                                                                    ,
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
