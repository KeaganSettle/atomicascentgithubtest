namespace SpriteKind {
    export const GrapplePart = SpriteKind.create()
}
function ReelIn () {
    if (Anchored) {
        _dist_y = PlayerSprite.y - Hook.y
        _step_y = Math.min(_dist_y, Reel_Step)
        PlayerSprite.y = PlayerSprite.y - _step_y
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    MeleeProjectile = sprites.createProjectileFromSprite(assets.image`AttackArc`, PlayerSprite, 100, 0)
    pause(100)
    sprites.destroy(MeleeProjectile)
    animation.runImageAnimation(
    PlayerSprite,
    assets.animation`SwingAttack`,
    50,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    CheckGrappleStart()
    timer.after(500, function () {
        hasStarted = true
    })
})
function Swing () {
    if (Anchored) {
        _t = (game.runtime() - AnchorTime) * SwingSpeed / 1000 % 360
        _dist_y = Hook.y - PlayerSprite.y
        _dist_x = Hook.x - PlayerSprite.x
        if (Math.abs(_dist_y) <= PlayerSprite.height / 3) {
            cos_t = 0
        } else {
            cos_t = Math.cos(toRadians(_t))
        }
        _amp = Math.abs(anchor_dist_x) * (-1 * sign(anchor_dist_x)) * cos_t * (_dist_y / anchor_dist_y)
        _prev_x = PlayerSprite.x
        PlayerSprite.x = Hook.x + _amp
        if (_prev_x <= PlayerSprite.x) {
            direction_x = 1
        } else {
            direction_x = -1
        }
    }
}
function toRadians (num: number) {
    return num * 3.1415926535 / 180
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    CheckStopGrappling()
})
function layout_dots () {
    _dist_x = Hook.x - PlayerSprite.x
    _dist_y = Hook.y - PlayerSprite.y
    _step_x = _dist_x / (GrappleDots.length + 1)
    _step_y = _dist_y / (GrappleDots.length + 1)
    _dot_x = _step_x
    _dot_y = _step_y
    for (let value of GrappleDots) {
        value.setPosition(PlayerSprite.x + _dot_x, PlayerSprite.y + _dot_y)
        _dot_x += _step_x
        _dot_y += _step_y
    }
}
function updateGrappling () {
    if (Grappling) {
        ReelIn()
        Swing()
        layout_dots()
    }
}
function CheckStopGrappling () {
    if (Grappling) {
        Grappling = false
        Anchored = false
        PlayerSprite.ay = G
        sprites.destroy(Hook)
        for (let value of GrappleDots) {
            sprites.destroy(value)
        }
        sprites.destroy(attach)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerSprite.isHittingTile(CollisionDirection.Bottom)) {
        PlayerSprite.setVelocity(0, -150)
    }
    if (Grappling) {
        Grappling = false
        Anchored = false
        PlayerSprite.ay = G
        sprites.destroy(Hook)
        for (let value of GrappleDots) {
            sprites.destroy(value)
        }
        sprites.destroy(attach)
        PlayerSprite.setVelocity(0, -175)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (sprite == Hook) {
        Anchored = true
        AnchorTime = game.runtime()
        anchor_dist_x = Hook.x - PlayerSprite.x
        anchor_dist_y = Hook.y - PlayerSprite.y
        AnchorRatio = _dist_y / _dist_x
        Anchor_Dir_X = direction_x
        Hook.startEffect(effects.ashes, 50)
        Hook.setVelocity(0, 0)
        PlayerSprite.ax = 0
        PlayerSprite.ay = 0
        PlayerSprite.vx = 0
        PlayerSprite.vy = 0
    }
})
function CheckGrappleStart () {
    if (!(Grappling)) {
        Grappling = true
        Hook = sprites.createProjectileFromSprite(assets.image`HookRight`, PlayerSprite, hook_vx * direction_x, hook_vy)
        Hook.setFlag(SpriteFlag.DestroyOnWall, false)
        Hook.setFlag(SpriteFlag.AutoDestroy, false)
        GrappleDots = []
        for (let index = 0; index < 10; index++) {
            GrappleDots.unshift(sprites.create(assets.image`GrappleRopeBit`, SpriteKind.GrapplePart))
        }
        attach = sprites.create(img`
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
            `, SpriteKind.Player)
        attach.setPosition(PlayerSprite.x, PlayerSprite.y)
        layout_dots()
    }
}
function sign (num: number) {
    if (num < 0) {
        return -1
    } else {
        return 1
    }
}
function UpdatePlayerSprite () {
    if (direction_x < 0) {
        let PlayerSpriteFlipped: Image = null
        PlayerSprite.setImage(PlayerSpriteFlipped)
    } else {
        let PlayerSpriteImage: Image = null
        PlayerSprite.setImage(PlayerSpriteImage)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
})
let Anchor_Dir_X = 0
let AnchorRatio = 0
let attach: Sprite = null
let Grappling = false
let _dot_y = 0
let _dot_x = 0
let GrappleDots: Sprite[] = []
let _step_x = 0
let _prev_x = 0
let anchor_dist_y = 0
let anchor_dist_x = 0
let _amp = 0
let cos_t = 0
let _dist_x = 0
let AnchorTime = 0
let _t = 0
let hasStarted = false
let MeleeProjectile: Sprite = null
let _step_y = 0
let Hook: Sprite = null
let _dist_y = 0
let Anchored = false
let direction_x = 0
let PlayerSprite: Sprite = null
let SwingSpeed = 0
let G = 0
let Reel_Step = 0
let hook_vy = 0
let hook_vx = 0
let NumberOfWins = 0
hook_vx = 400
hook_vy = -1000
Reel_Step = 1.5
G = 500
SwingSpeed = 400
PlayerSprite = sprites.create(assets.image`PlayerCharacter`, SpriteKind.Player)
controller.moveSprite(PlayerSprite, 100, 0)
PlayerSprite.ay = G
PlayerSprite.setPosition(12, 88)
cameraOffsetScene.cameraFollowWithOffset(PlayerSprite, 0, -35)
let EnemySprite = sprites.create(assets.image`TestEnemy`, SpriteKind.Enemy)
EnemySprite.ay = G
tiles.setCurrentTilemap(tilemap`level2`)
info.setLife(3)
direction_x = 1
tiles.placeOnTile(EnemySprite, tiles.getTileLocation(14, 5))
forever(function () {
    updateGrappling()
    UpdatePlayerSprite()
})
forever(function () {
    if (controller.left.isPressed()) {
        direction_x = -1
    }
    if (controller.right.isPressed()) {
        direction_x = 1
    }
})
