## Node API
<p align="left">
  <a href="https://travis-ci.org/yuttasakcom/NodeAPI">
    <img src="https://api.travis-ci.org/yuttasakcom/NodeAPI.svg?branch=master" />
  </a>
  <a title="CII Best Practices" href="https://bestpractices.coreinfrastructure.org/projects/1169"><img src="https://bestpractices.coreinfrastructure.org/projects/1169/badge"></a>
  <a href='https://coveralls.io/github/yuttasakcom/NodeAPI'><img src='https://coveralls.io/repos/github/yuttasakcom/NodeAPI/badge.svg' alt='Coverage Status' /></a>
</p>

## Step 1 : Clone Project
```
git clone git@github.com:yuttasakcom/NodeAPI.git && cd NodeAPI
```

## Step 2: Generate Cert
```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout src/config/develop/default.key -out src/config/develop/default.crt
```

## Step 3: Install Modules
```
yarn install
```

## Step 4: Start 
```
yarn start
```