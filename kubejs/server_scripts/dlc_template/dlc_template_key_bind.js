// priority: 9

/**
 * 器官按键激活策略
 * 对应.tag('kubejs:key_pressed')
 * @constant
 * @type {Object<string,function(Internal.NetworkEventJS, organ):void>}
 */
const dlcTemplateOrganPlayerKeyPressedOnlyStrategies = {
    // 示例器官-按键激活
    'dlc_template:example_organ_key_pressed': function (event, organ) {
        // 获取玩家
        let player = event.player
        // 获取玩家的魔力数据
        let magicData = getPlayerMagicData(player)
        // 超限等级，player.getHealth()即为玩家的当前生命值
        let amplifier = Math.max(Math.sqrt(player.getHealth()), 1) + 4
        // 超限施法，new ResourceLocation('irons_spellbooks', 'acupuncture')即为法术的id
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'acupuncture'), amplifier, player, false)
        // 清空法力值
        magicData.setMana(0)
        // 添加冷却时间
        // 这里不需要额外做检测，本体已经做好了
        player.addItemCooldown('dlc_template:example_organ_key_pressed', 20 * 15)
    },
}

var assign_organ_player_key_pressed_only = Object.assign(organPlayerKeyPressedOnlyStrategies, dlcTemplateOrganPlayerKeyPressedOnlyStrategies);