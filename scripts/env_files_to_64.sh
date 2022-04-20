#!/bin/sh
rm env_base64
for file in $(find . -maxdepth 2 -type f -name ".env");do echo "${file} $(cat $file | base64 -w 0)"; done > env_base64