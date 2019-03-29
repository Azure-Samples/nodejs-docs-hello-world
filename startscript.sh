#!/bin/bash 
echo "hello" 
echo "nameserver 8.8.8.8" >> /etc/resolv.conf 
node index.js
