// priority: 9

/**
 * 玩家Tick秒级策略
 * 是的，这玩意是每秒而非每刻执行一次
 * 对应.tag('kubejs:player_tick')
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const dlcTemplateOrganPlayerTickStrategies = {
    // 示例器官-玩家刻
    'dlc_template:example_organ_player_tick': function (event, organ) {
        // 获取并增加饥饿值，注意最大值为20
        event.player.setFoodLevel(Math.max(event.player.getFoodLevel() + 1, 20))
    },
}

var assign_organ_player_tick = Object.assign(organPlayerTickStrategies, dlcTemplateOrganPlayerTickStrategies);

/**
 * 玩家Tick秒级唯一策略
 * 是的，这玩意是每秒而非每刻执行一次
 * 对应.tag('kubejs:player_tick_only')
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const dlcTemplateOrganPlayerTickOnlyStrategies = {
    // 示例器官-唯一玩家刻
    'dlc_template:example_organ_player_tick_only': function (event, organ) {
        // 获取玩家
        let player = event.player
        // 如果玩家在水中，则执行以下逻辑
        if (player.isUnderWater()) {
            // 给予水下呼吸
            player.potionEffects.add('minecraft:water_breathing', 20, 0)
        }
    },
}

var assign_organ_player_tick_only = Object.assign(organPlayerTickOnlyStrategies, dlcTemplateOrganPlayerTickOnlyStrategies);