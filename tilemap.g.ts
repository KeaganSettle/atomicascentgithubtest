// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000f10101010101010101010101010100e02030303030314140303030303030301020303030303030303030303030303010203141414030303031414140303030102030303030303030303030303030301020303030303030303030303030303010203030303030303030303030311121302030303030303030303030303060708020303030303030303030303140b0d0c040505050505050505050505050b0d0c060707070707070707070707070d0d0c0b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0c0b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0c0b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0c090d0d0d0d0d0d0d0d0d0d0d0d0d0d0a00000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
