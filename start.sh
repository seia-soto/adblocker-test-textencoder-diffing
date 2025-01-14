#!/bin/zsh

function download_trackerdb() {
  echo "Downloading trackerdb..."
  curl -sL 'https://github.com/ghostery/trackerdb/releases/latest/download/trackerdb.json' > ./trackerdb.json
}

function rest_per_iter() {
  echo "-- Cooling down for 5 seconds..."
  sleep 5
}

function remove_adblocker() {
  pnpm remove @ghostery/adblocker
}

function use_adblocker_from_npm() {
  pnpm add @ghostery/adblocker
}

function use_adblocker_from_git_branch() {
  local BRANCH="$0"
  [[ ! -d ./adblocker ]] && git clone 'https://github.com/seia-soto/adblocker.git'
  cd ./adblocker
  [[ "$(git rev-parse --abbrev-ref HEAD)" != "$BRANCH" || ! -d ./adblocker/packages/adblocker/dist ]] && yarn install && yarn build
  cd ..
  pnpm link ./adblocker/packages/adblocker
}

[[ ! -f ./trackerdb.json ]] && download_trackerdb

remove_adblocker >/dev/null
use_adblocker_from_git_branch 'textencoder' >/dev/null
rest_per_iter
pnpm tsx src/index.ts 'seia-soto/adblocker:textencoder'

remove_adblocker >/dev/null
use_adblocker_from_git_branch 'textencoder-2' >/dev/null
rest_per_iter
pnpm tsx src/index.ts 'seia-soto/adblocker:textencoder-2'

remove_adblocker >/dev/null
use_adblocker_from_npm >/dev/null
rest_per_iter
pnpm tsx src/index.ts 'npm:adblocker'
