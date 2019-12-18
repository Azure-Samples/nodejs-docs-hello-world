#!/bin/bash
echo "installing dependencies..."
apt-get install -y xvfb
apt-get install -y x11-xkb-utils
apt-get install -y xfonts-100dpi
apt-get install -y xfonts-75dpi
apt-get install -y xfonts-scalable
apt-get install -y xfonts-cyrillic
apt-get install -y x11-apps
apt-get install -y clang
apt-get install -y libdbus-1-dev
apt-get install -y libgtk2.0-dev
apt-get install -y libnotify-dev
apt-get install -y libgnome-keyring-dev
apt-get install -y libgconf2-dev
apt-get install -y libasound2-dev
apt-get install -y libcap-dev
apt-get install -y libcups2-dev
apt-get install -y libxtst-dev
apt-get install -y libxss1
apt-get install -y libnss3-dev
apt-get install -y gcc-multilib
apt-get install -y g++-multilib
apt-get install -y libgconf-2-4
apt-get install -y libgtk-3-0
echo "starting webapp..."
node index.js
