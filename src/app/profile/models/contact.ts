import { IBaseModel } from '@models/@model'

export interface IContact extends IBaseModel {
  // ======================================= //
  emails           ?: string[];
  phone            ?: string
  address          ?: IAddress;
  facebook_url     ?: string;
  linkedin_url     ?: string;
  github_url       ?: string;
  twitter_url      ?: string;
  google_url       ?: string;
  microsoft_url    ?: string;
  stackoverflow_url?: string;
  npm_url          ?: string;
  website_url      ?: string;
  // ======================================= //
}
export interface IAddress extends IBaseModel {
  // ======================================= //
  city?: string;
  region?: string;
  country?: string;
  street?: string;
  number?: string;
  // ======================================= //
}
