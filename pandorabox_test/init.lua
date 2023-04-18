local MP = minetest.get_modpath(minetest.get_current_modname())

if minetest.get_modpath("mtt") and mtt.enabled then
    dofile(MP .. "/mtt.lua")
end