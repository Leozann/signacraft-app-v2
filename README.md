

 <!-- _____ _                                   __ _            _____  _____  
/  ___(_)                                 / _| |          / __  \|  _  | 
\ `--. _  __ _ _ __   __ _  ___ _ __ __ _| |_| |_  __   __`' / /'| |/' | 
 `--. \ |/ _` | '_ \ / _` |/ __| '__/ _` |  _| __| \ \ / /  / /  |  /| | 
/\__/ / | (_| | | | | (_| | (__| | | (_| | | | |_   \ V / ./ /___\ |_/ / 
\____/|_|\__, |_| |_|\__,_|\___|_|  \__,_|_|  \__|   \_(_)\_____(_)___/  
          __/ |                                                          
         |___/ 
                                                                   -->
# Signacraft Documentation

## App Information
**Signacraft Web** is a web-based application developed by **Intcrews Mitra Strategis** for **Intcrews Group** to simplify the creation of professional **email signatures**.  
The application ensures that all employees use a consistent, branded, and professional email signature in line with the company’s identity.  

## Product Overview
**Signacraft Web** is designed as an internal solution for email signature standardization within **Intcrews Group**.  
Through this application, employees no longer need to manually create email signatures since all elements are pre-configured based on the company’s **brand guidelines**.  

**Key Features include:**  
1. **Template Module** – Predefined company-approved templates for professional email signatures.  
2. **Employee Data Input Module** – Simple form to capture key details (name, position, phone number, company email).  
3. **Branding Module** – Integration of official company logo, corporate colors, and links to corporate channels.  
4. **Signature Generator Module** – One-click generation of ready-to-use HTML email signatures.  
5. **Security Module** – Product key verification to ensure safe and authorized access.  
&nbsp;
Copyright Notice
© 2024 PT. Augustea Intcrews Indonesia. All rights reserved.  

## Getting Started
To get started with the project, first clone the repository to your local machine:
```sh
git clone https://github.com/Leozann/signacraft-app-v2.git
```
Next, navigate into the project directory and install the required dependencies:
```sh
cd signacraft-app-v2
npm install
```
To start the development server with hot reloading, use the following command:
```sh
npm run dev
```

## Release Notes

UPDATE RELEASE NOTE Signacraft v.2.6.0:

### Major Updates

### Minor Improvements & Fixes
[New] Implemented improved security measures using product keys</br>
[New] Add pop-up message behavior with smoother animations</br>
[Update] Job position database</br>
[Update] Enhanced user experience for employee name input</br>
[Fix] Resolved UI bug in the Main Page</br>
[Fix] Resolved UI bug in the footer</br>
[New] Add Signature IMS Template
<!-- [Update] Improved usability of the employee phone number input. -->


<!-- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
``` -->
