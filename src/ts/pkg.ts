// tslint:disable
export type PkgRepository = {
  type: string;
  url: string;
};

export type Pkg = {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  repository: PkgRepository;
};

export const pkg = {
  name: '@pbbbl/player-integration-conviva',
  version: '1.0.0',
  description: 'Conviva analytics integration for the Bitmovin Player',
  author: 'Bitmovin',
  license: 'MIT',
  repository: {
    type: 'git',
    url: 'https://github.com/pbbbl/bitmovin-player-analytics-conviva.git',
  },
};
