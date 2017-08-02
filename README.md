## Node API
> Node api ES6

## Step 1 : Clone Project
```
git clone git@github.com:yuttasakcom/NodeAPI.git && cd NodeAPI
```

## Step 2: Generate Cert
```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout src/config/dev/default.key -out src/config/dev/default.crt
```

## Step 3: Install Modules
```
yarn install
```

## Step 4: Start 
```
yarn start
```