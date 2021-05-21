#!/bin/sh
# simple integration test

mkdir -p /tmp/mt/worlds/world
chmod 777 /tmp/mt -Rv
docker run --rm -i \
	-v $(pwd)/mtinfo-minetest.conf:/etc/minetest/minetest.conf \
	-v /tmp/mt:/var/lib/minetest/.minetest \
	-v $(pwd):/var/lib/minetest/.minetest/worlds/world/worldmods \
	registry.gitlab.com/minetest/minetest/server:5.4.0

