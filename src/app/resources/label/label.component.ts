import { Component, Input, OnInit } from '@angular/core';
const simpleIcons = require('simple-icons');

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  // ======================================= //
  @Input() public sizeX: string;
  @Input() public sizeY: string;
  @Input() public set icon(name: string) {
    const result: SVGResult = simpleIcons.get(name);
    this.fill   = `#${result.hex   }`;
    this.path   =     result.path    ;
    this.name   =     result.title   ;
    this.source =     result.source  ;

    const element = document.getElementById('path');
    element.setAttribute('d', this.path);
  }
  // ======================================= //
  public source: string;
  public name: string;
  public fill: string;
  public path: string;
  // ======================================= //
  constructor() { }
  ngOnInit() { }
  // ======================================= //
}
declare interface SVGResult {
  // ======================================= //
  hex: string;
  path: string;
  slug: string;
  source: string;
  svg: string;
  title: string;
  // ======================================= //
}