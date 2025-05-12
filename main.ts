player.onChat("iron shovel", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(OCELOT, randpos(
        pos(10, 5, 10),
        pos(-10, 5, -10)
        ))
        mobs.spawn(WOLF, randpos(
        pos(10, 5, 10),
        pos(-10, 5, -10)
        ))
    }
})
