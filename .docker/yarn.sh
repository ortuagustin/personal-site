#!/usr/bin/env bash

STACK_SCRIPT_PATH=$(dirname "$(realpath -s "$0")")

cd $STACK_SCRIPT_PATH

source ./env.sh

if [ $# -gt 0 ]; then
    if [ "$1" == "saber" ]; then
        shift 1
        docker compose up yarn-devserver
    else
      docker compose run --rm node yarn "$@"
    fi
else
      docker compose run --rm node yarn "$@"
fi
