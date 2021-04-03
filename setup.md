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



