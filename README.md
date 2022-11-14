<p align="center">
  <a href="https://flow.com/">
    <img width="400" src="src/assets/img/flow-vue.svg" />
  </a>
</p>
- flow_vue3_elementplus_scaffolding: is an integrated flow-cli, Vue3, ElementPlus web application scaffolding that can help you quickly get into Flow DApp project development.

-  For more information about Flow, see:: [Flow Website](https://flow.com/) <br/> 
-  It includes an example of connecting to a wallet and an example of interacting with the flow chain that will help you get started quickly.<br/> 
-  ElementPlus is a component library that helps to make DApp development more efficient.<br/>
-  [Market Examples](https://github.com/28356715/flow_vue3_marketplace_example)

## 1. Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:

- Node.js - [Download & Install Node.js](https://nodejs.org/)  and the npm package manager.
   To view the nodejs version.(nodejs requires version 13 or above.)
  ```sh
   node -v
   ```
- Install the latest version of vue-cli
  ```sh
   npm install -g @vue/cli
   ```
   To view the vue-cli version, you need to install version 3.x or above
   ```sh
   vue -V
   ```
   If you are a low-level version, you can uninstall vue-cli after installing it globally, and then reinstall it.
   ```sh
   npm uninstall -g @vue/cli
   ```

## 2. Clone the project
```sh
git clone https://github.com/28356715/flow_vue3_elementplus_scaffolding.git
```

## 3. IDE
- VSCode - [Download & Install VSCode.](https://code.visualstudio.com/) <br/>
- Install the plug-in in VSCode: cadence

## 4. Install dependencies
Option 1.
```sh
npm run  install-package
```
Option 2.

-  1. Flow-cli-[Install Flow-cli](https://developers.flow.com/tools/flow-cli/install)
   macOS & Linux  can execute the following command:
  ```sh
   sh -ci "$(curl -fsSL https://storage.googleapis.com/flow-cli/install.sh)"
  ```
-  2. Execute the following command：
  ```sh
   npm install
  ```
Note: If a package cannot be installed correctly and you are a Chinese community developer, you can use cnpm or reset the npm mirror.
      Complete the installation and you have Flow-Cli, Fcl, TypeScript, ElementPlus capabilities.

### Compiles and hot-reloads for development
```sh
npm run serve
```

When you see the following page, congratulations, you've made it. Start your pleasant trip!
For contract deployment see: [Flow CLI](https://developers.flow.com/tools/flow-cli/account-add-contract) or [the video course](https://www.bilibili.com/video/BV1ct4y1T7uc/?spm_id_from=333.788.recommend_more_video.2&vd_source=ca965131813ddd4578944b811c237435)

<img width="400" src="src/assets/img/flow-vue.jpg" />


### Compiles and minifies for production
```
npm run build
```




