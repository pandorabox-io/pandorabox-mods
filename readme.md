# Pandorabox mods

[![Build Status](https://travis-ci.com/pandorabox-io/pandorabox-mods.svg?branch=master)](https://travis-ci.com/pandorabox-io/pandorabox-mods)

Pandorabox mod repo

## Install


After cloning:
```bash
git submodule init
git submodule update
```

## Updating

```bash
# sync repo urls
git submodule sync
# initialize new repos
git submodule init
# update commits
git submodule update
# remove unversioned files
git clean -dff
```

Or use the `update.sh` script in the root path

## Advisable settings

```
# allow protection
areas.self_protection = true

# lightweight node timer-based interrupts
mesecon.luacontroller_lightweight_interrupts = true

# don't let the unified inventory show *all* slopes/slabs (use the table saw for that)
moreblocks.stairsplus_in_creative_inventory = false

# enable bridger trusses
bridger_enable_trusses = true

# enable telemosaic rightclick teleport
telemosaic_right_click_teleport = true
```

## Optional mods

The following mods can be safely deleted in singleplayer:

```
monitoring
mesecons_debug
mail
mapserver
geoip
```

## Testing

The mod collection can be tested with the `test.sh` script.
prerequisite is a working docker setup
