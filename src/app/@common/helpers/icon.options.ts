export interface Devicon {
  aliases: string[];
  color  : string  ;
  name   : string  ;
  tags   : string[];
  versions: {
    font: string[];
    svg : string[];
  };
}
export interface IconResult {
  iconUrl: string;
  iconHex: string;
  iconTag: string[];
}