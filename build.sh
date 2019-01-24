#!/bin/sh
node index.js &
if [ $? != 0 ] ;then
   curl http://52.172.131.47:3000/status?stageId=stage2&val=1 
else
   curl http://52.172.131.47:3000/status?stageId=stage2&val=0
fi
    

