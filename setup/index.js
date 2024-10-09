// this is called inside prebuild script from '../../package.json'
// "prebuild": "node ./helpers/preBuild/index.js && npm run format",
const fs = require('fs-extra');
const path = require('path');

const buildPkg = () => {
  const { name, version, description, main, types, author, license, repository } = require('../package.json');

  const data = { name, version, description, author, license, repository };


  // create a ts file that exports a single const named pkg that equals data as a JS object
  // make sure the file is not linted by tslint
const contents = `
// tslint:disable
export type PkgRepository = {
  type: string;
  url: string;
}

export type Pkg = {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  repository: PkgRepository;
}

export const pkg = ${JSON.stringify(data, null, 4)}
`;

  // write the contents to ../../src/pkg.ts
  const dir = path.resolve(__dirname, '../src/ts');
  const file = path.resolve(dir, './pkg.ts');

  fs.ensureDirSync(dir);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
  fs.writeFileSync(file, contents, {
    encoding: 'utf8',
  });
};

buildPkg();
