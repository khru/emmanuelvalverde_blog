#!/bin/sh
while read -r key value; do
  echo "đ Creating file: $key";
  touch $key
  echo "âšī¸ With content:"
  echo $value | base64 --decode
  echo $value | base64 --decode > $key
done < env_base64