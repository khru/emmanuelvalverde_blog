#!/bin/sh

# It doesn't matter to use the front or de back container we just need a container with NPM and node install
PORT=$(grep -w NODE_PORT .env | cut -d '=' -f2);
HOST=$(grep -w NODE_HOSTNAME .env | cut -d '=' -f2);

next start -H ${HOST} -p ${PORT} $@

return 0;
