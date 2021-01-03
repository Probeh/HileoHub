import { Devicon, IconResult } from '@helpers/icon.options'

const _svgUrl: string = 'https://raw.githubusercontent.com/devicons/devicon/ac557d6ff33ff370a5db99f97aeab35ea5c67fbd/icons';
const _icoUrl: string = 'https://raw.githubusercontent.com/simple-icons/simple-icons/fa85d6e9b52f8521738e967c833bb53e1e6ad1bb/icons';
const _getSVG: (name: string, options?: string) => string = (name: string, options: string = 'original') => `${_svgUrl}/${name}/${name}-${options}.svg`;
const _getICO: (name: string) => string = (name: string) => `${_icoUrl}/${name}.svg`;

export function getSVG(name: string): Promise<IconResult> {
  return new Promise((resolve, reject) => {

    fetch('assets/data/devicons.json')
      .then(async (response) => {
        const icon: Devicon = (await response.json())
          .find((item: Devicon) => item.name.toLowerCase() == name.toLowerCase() || (item.name.toLowerCase().includes(name.toLowerCase()) && (name.length <= item.name.length && item.name.length <= name.length * 2)));

        const result = {
          iconUrl: _getSVG(icon.name, icon.versions.svg[0]),
          iconHex: icon.color,
          iconTag: icon.tags
        };
        resolve(result);
      })
  })
}

