# simple-trading-system

A simple TCP server for order processing.

## How to run server in the production mode?

> You need Node.js version >= 18.0.0 (it was not tested on the lower ones, maybe it works too) installed.

Just run the following command:

```sh
npm run pack
```

After packing, the binary versions for three operating systems (Windows, macOS and Linux) should be in the `binaries` directory.

```sh
cd binaries
./server-win.exe # for Windows
./server-macos # for macOS
./server-linux # for Linux
```

## How to run development version locally?

The project was created in TypeScript technology and works in the Node.js environment.

> You need Node.js version >= 18.0.0 (it was not tested on the lower ones, maybe it works too) installed.

Just run the following command:

```sh
npm run start
```
