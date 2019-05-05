const nativefier = require('nativefier').default;
const { version } = require('./package.json');

const targets = [
  { platform: 'darwin', arch: 'x64' },
  // { platform: 'linux', arch: 'arm64' },
  // { platform: 'linux', arch: 'armv7l' },
  // { platform: 'linux', arch: 'ia32' },
  // { platform: 'linux', arch: 'x64' },
  // { platform: 'mas', arch: 'x64' },
  // { platform: 'win32', arch: 'ia32' },
  // { platform: 'win32', arch: 'x64' },
];

const options = {
  name: 'Google Keep',
  targetUrl: 'https://keep.google.com',
  internalUrls: 'https://keep.google.com/.*',
  // platform: 'darwin',
  // arch: 'x64',
  appCopyright: 'Copyright (c) 2019 ndrpnt',
  appVersion: version,
  buildVersion: version,
  electronVersion: '5.0.1',
  out: 'dist',
  icon: 'assets/google-keep.icns',
  counter: true,
  bounce: true,
  width: 1280,
  height: 800,
  minWidth: 400,
  minHeight: 350,
  inject: ['custom.css', 'custom.js'],
  titleBarStyle: 'hiddenInset',
  singleInstance: true,
  clearCache: false,
  fileDownloadOptions: {
    saveAs: true,
  },
};

targets.forEach((target) => {
  nativefier({ ...options, ...target }, (error, appPath) => {
    if (error) {
      console.error(error);
    } else {
      console.log('App has been nativefied to', appPath);
    }
  });
});
