### Commands to setup workspace manually

#### 1. run nix shell (not needed if you have java already in your env)
drops you into a bash shell with node14x, yarn, gradle
```nix-shell```

#### 2. setup lerna and and install packages
setups up lerna using npx (so we can run this bootstrap process once with installing anything globally)
```lerna init && npm install```

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

