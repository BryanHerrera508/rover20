// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020100000000000000000000000000000101000000000000000000000300020101010000000000000000020001010101010100000000000000000100010101010101000000020000010201000101010101010000000101010101010101010101010100000001010101010101010101010101000000010101010101010101010101010000000101010101010101010101010100000001010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . 2 2 2 . . . . . . . . . . 
2 2 2 2 2 2 . . . . . . . . 2 . 
2 2 2 2 2 2 . . . . . . 2 . 2 . 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles24,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
