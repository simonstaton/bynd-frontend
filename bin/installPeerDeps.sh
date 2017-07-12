#!/bin/bash

npm="$(which npm)"

# Functions
function program_is_installed {
  local return_=1
  type $1 >/dev/null 2>&1 || { local return_=0; }
  echo "$return_"
}

function check_node {
  if [ $1 == 1 ]; then
    printf "\e[32m✔ ${2}"
  else
     printf "\e[31m✘ ${2} is not installed"
  fi
}

function npm_package_is_installed {
  local return_=1
  ls node_modules | grep $1 >/dev/null 2>&1 || { local return_=0; }
  echo "$return_"
}

function install_missing {
  if [ $1 == 1 ]; then
    printf "\e[32m✔ ${2}"
  else
    cmd="${npm} install --save-dev ${2}"
    eval $cmd
    printf "\e[32m✔ ${2}"
  fi
}


# Ensure node and npm are installed
printf "\033[0;32m\e[1mChecking npm and node installation\n"
printf "\e[0m$(check_node $(program_is_installed node) node)\n"
printf "\e[0m$(check_node $(program_is_installed npm) npm)\n\n"

printf "\033[0;32m\e[1mChecking local npm modules\n"
printf "\e[0m$(install_missing $(npm_package_is_installed eslint) eslint)\n"
printf "\e[0m$(install_missing $(npm_package_is_installed eslint-config-google) eslint-config-google)\n"
printf "\e[0m$(install_missing $(npm_package_is_installed eslint-plugin-jsx-a11y) eslint-plugin-jsx-a11y)\n"
printf "\e[0m$(install_missing $(npm_package_is_installed eslint-plugin-import) eslint-plugin-import)\n"
printf "\e[0m$(install_missing $(npm_package_is_installed eslint-plugin-react) eslint-plugin-react)\n"
printf "\e[0m$(install_missing $(npm_package_is_installed eslint-config-airbnb) eslint-config-airbnb)\n"
