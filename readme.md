# Pandorabox mods

![](https://github.com/pandorabox-io/pandorabox-mods/workflows/test/badge.svg)

Pandorabox mod repo

## Install

After cloning or pulling:
```bash
git submodule update --init --recursive
```

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

The mod collection can be tested with `docker` and `docker-compose`
To start the tests:
```sh
docker-compose up
```

