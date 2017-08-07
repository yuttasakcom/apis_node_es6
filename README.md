## Node API
<p align="left">
  <a title="CII Best Practices" href="https://bestpractices.coreinfrastructure.org/projects/1169"><img src="https://bestpractices.coreinfrastructure.org/projects/1169/badge"></a>
</p>

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