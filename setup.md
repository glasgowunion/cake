### Commands to setup workspace manually

#### 1. run nix shell (not needed if you have java already in your env)
drops you into a bash shell with node14x, yarn, gradle
```nix-shell```

#### 3. Install typescript
installs types script for use in project
```yarn add -D typescript @types/node```

#### 4. Install Waracle eslint config
installs waracle eslint config for typescript for typescript projects
```yarn add -D eslint-config-waracle```
```yarn add -D eslint```

#### 5. Install Husky for GH commits
```npx husky-init && yarn```

#### 6. Install Comitizen
```yarn add -D commitizen cz-conventional-changelog```

#### 7. Install Jest
```yarn add -D jest ts-jest @types/jest```

#### 8. Setup Waracle Eslint settings
```
yarn add -D @typescript-eslint/eslint-plugin@latest
yarn add -D @typescript-eslint/parser
yarn add -D eslint-plugin-jsx-a11y@latest
yarn add -D eslint-plugin-react@latest
yarn add -D eslint-plugin-import@latest
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-jest
yarn add -D prettier
yarn add -D eslint-plugin-sonarjs
```

