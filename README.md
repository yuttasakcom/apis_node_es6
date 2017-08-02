## Node API

## Generate Cert
```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout src/config/dev/default.key -out src/config/dev/default.crt
```

## Start 
```
yarn start
```