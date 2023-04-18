-- smoke tests
mtt.emerge_area({ x=0, y=0, z=0 }, { x=32, y=32, z=32 })

-- check existing nodenames
local MP = minetest.get_modpath(minetest.get_current_modname())
mtt.validate_nodenames(MP .. "/nodenames.txt")

mtt.register("quick check for mobs", function(callback)
    -- forceload chunk @ 0,0,0
	for x = 0, 16*5, 16 do
		for y = 0, 16*5, 16 do
			for z = 0, 16*5, 16 do
				minetest.forceload_block(vector.new(x, y, z))
			end
		end
	end

	minetest.add_entity({x=10,y=10,z=10}, "mobs_monster:mese_monster")
	minetest.after(5, callback)
end)