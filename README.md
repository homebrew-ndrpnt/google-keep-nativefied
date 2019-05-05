# Google Keep nativefied

`keep.google.com` wrapped by Electron to make it a desktop app.
Generated with [Nativefier](https://github.com/jiahaog/nativefier).

## Bugs & limitations

- **Can't drag app on login screen**: no draggable header
- **Can't go back to Keep from login screen**: no back button after clicking Add account
  - Restart to fix
- **Login in opens Google Keep in the browser while app stays stuck loading**
  - Restart to fix
- Main (left) menu scrollbar looks awful

## Install

``` sh
brew cask install homebrew-ndrpnt/formulae/google-keep-nativefied
```

## Build

``` sh
yarn
yarn build
```
