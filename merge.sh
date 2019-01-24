#!/bin/sh
http://52.172.131.47:3000/status?stageid=stage2
git checkout master
git merge --no-ff $CIRCLE_BRANCH
git config --global push.default matching
git push https://$CIRCLE_PROJECT_USERNAME:$PASSWORD@github.com/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME
http://52.172.131.47:3000/status?stageid=stage2

