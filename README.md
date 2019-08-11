# Pi Server Setup

## Install git
```sudo apt-get install git```

## Install node and npm
#### Download everything
``` wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv6l.tar.gz ```
#### Extract the stuff 
```tar -xzf node-v8.9.0-linux-armv6l.tar.gz```
#### Move it in to place
```cd node-v6.11.1-linux-armv6l/```
```sudo cp -R * /usr/local/```
#### Test it
```node -v```
```npm -v```

## Clone this code onto the pi
```git clone https://github.com/macakcat/pi_server.git```

## Install node packages
```npm install```

## Run the server
```npm start```

## Load the interface
```http://localhost:3000```
