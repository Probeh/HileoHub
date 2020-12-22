import { Component } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public config: Config;
  public secret: string;
  public contxt: string;
  public result: string;
  public function: string;

  constructor() {
    this.config = {
      method: 'Base64',
      action: 'Encrypt',
      output: 'Text'
    };
  }

  public setMethod(value: Method) {
    this.config.method = value;
  }
  public setAction(value: Action) {
    this.config.action = value;
  }
  public setOutput(value: Output) {
    this.config.output = value;
  }
  public onSubmit() {
    if (this.config.action == 'Encrypt') {
      if (this.config.method == 'Base64') {
        this.result = this.encryptBase64(this.contxt);
        this.function = this.encryptBase64.toString();
      }
      else {
        this.result = this.encryptAES(this.secret, this.contxt);
        this.function = this.encryptAES.toString();
      }
    }
    else {
      if (this.config.method == 'Base64') {
        this.result = this.decryptBase64(this.contxt);
        this.function = this.decryptBase64.toString();
      }
      else {
        this.result = this.decryptAES(this.secret, this.contxt);
        this.function = this.decryptAES.toString();
      }
    }
  }
  public onClear() {
    this.contxt = '';
    this.secret = '';
    this.result = '';
    this.function = '';
  }
  public encryptBase64(value: string): string {
    return btoa(value);
  }
  public encryptAES(key: string, value: string): string {
    return AES.encrypt(value, key).toString();
  }
  public decryptBase64(value: string): string {
    return atob(value);
  }
  public decryptAES(key: string, ciphertext: string): string {
    return AES.decrypt(ciphertext, key).toString(enc.Utf8);
  }
}
declare type Method = 'AES' | 'Base64';
declare type Action = 'Encrypt' | 'Decrypt';
declare type Output = 'Text' | 'JSON';
declare interface Config {
  method: Method,
  action: Action,
  output: Output
};