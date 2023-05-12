# simple-trading-system

A simple TCP server for order processing.

## How to run server in the production mode?

After development, the application was packed into a binary version for three operating systems (Windows, macOS and Linux). This means that you just need to run the commands below.

```sh
cd binaries
./server-win.exe # for Windows
./server-macos # for macOS
./server-linux # for Linux
```

## Source Code / Development

The project was created in TypeScript technology and works in the Node.js environment.

### How to repack binaries?

> You need Node.js version >= 18.0.0 (it was not tested on the lower ones, maybe it works too) installed.

Just run the following command:

```sh
npm run pack
```

### How to run development locally?

> You need Node.js version >= 18.0.0 (it was not tested on the lower ones, maybe it works too) installed.

Just run the following command:

```sh
npm run start
```

### How to run lint?

> You need Node.js version >= 18.0.0 (it was not tested on the lower ones, maybe it works too) installed.

Just run the following command:

```sh
npm run lint
```

### How to run tests?

> You need Node.js version >= 18.0.0 (it was not tested on the lower ones, maybe it works too) installed.

Just run the following command:

```sh
npm run test
```
