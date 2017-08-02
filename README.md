## Node API

## Step 1: Generate Cert
```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout src/config/dev/default.key -out src/config/dev/default.crt
```

## Step 2: Install modules
```
yarn install
```

## Step 3: Start 
```
yarn start
```