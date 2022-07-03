<div align="center">

# 🤖 djs-template-cli

[![NPM banner](https://nodei.co/npm/djs-template-cli.png?downloads=true&stars=true)](https://npmjs.com/package/djs-template-cli)

[![NPM version](https://img.shields.io/npm/v/djs-template-cli?maxAge=3600)](https://npmjs.com/package/djs-template-cli) [![NPM downloads](https://img.shields.io/npm/dt/djs-template-cli?maxAge=3600)](https://npmjs.com/package/djs-template-cli)

</div>

## ➡️ Usage

### 📦 Install this package

> `sudo` may required for UNIX-based system

#### 📦 npm

```bash
$ npm install -g djs-template-cli
#
# added ??? packages, and audited ??? packages in 2.35s
# found 0 vulnerabilities
```

#### 🐈 yarn

```bash
$ yarn global add djs-template-cli
#
# yarn global v1.22.xx
# [1/4] 🔍  Resolving packages...
# [2/4] 🚚  Fetching packages...
# [3/4] 🔗  Linking dependencies...
# [4/4] 🔨  Building fresh packages...
#
# success Installed "djs-template-cli" with binaries:
#       - djs-cli
#       - discord.js-cli
# ✨  Done in 1s.
```

### 🏃 Start creating new project

```sh
$ djs-cli [OPTIONS...]
# or
$ discord.js-cli [OPTIONS...]
```

> Notice : _This package will create a project inside your current working directory (pwd). To avoid creating a project in wrong directory (ex: in your /home/user directory), create an empty directory, change dir to newly created directory, and run the main binary_

## 📚 Options

Available options for this package. If no options are used, a user interface prompt will show up instead

| Options       | Description                                          | Default |
| ------------- | ---------------------------------------------------- | ------- |
| javascript    | Create JavaScript-based discord.js project           | true    |
| typescript    | Create TypeScript-based discord.js project           | false   |
| -g, --git     | Initialize Git inside the project                    | false   |
| -i, --install | Install required dependecies when creating a project | false   |
| -y, --yes     | Skip prompt and use default option                   | false   |

## 🏷️ Discord.js version

-   JavaScript Template uses Discord.js version : `13.8.1`
-   TypeScript Template uses Discord.js version : `13.8.1`

## 👨‍💻 Contributing

Contributions are welcome! Feel free to submit a Pull Request with improvements!

## 🧾 License

[djs-template-cli](https://npmjs.com/package/djs-template-cli) is Licensed Under [MIT](./LICENSE) License.
