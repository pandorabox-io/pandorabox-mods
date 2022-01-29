#!/bin/sh

# update meta repo
git pull
# sync repo urls
git submodule sync
# initialize new repos
git submodule init
# update commits
git submodule update --init --recursive
# remove unversioned files
git clean -dff

