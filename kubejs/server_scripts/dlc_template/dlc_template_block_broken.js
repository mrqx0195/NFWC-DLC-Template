// priority: 9

/**
 * 器官方块破坏策略
 * 对应.tag('kubejs:break')
 * @constant
 * @type {Object<string,function(Internal.BlockBrokenEventJS, organ):void>}
 */
const dlcTemplateOrganBlockBrokenStrategies = {
    // 示例器官-破坏
    'dlc_template:example_organ_break': function (event, organ) {
        // 获取玩家
        let player = event.player
        // 初始化计数
        let count = 1;
        // 防止读取到未定义的数值
        if (player.persistentData.contains(resourceCount)) {
            // 增加计数
            count = player.persistentData.getInt(resourceCount) + count;
        }
        // 更新资源值
        updateResourceCount(player, count)
    },
}

var assign_organ_food_eaten = Object.assign(organBlockBrokenStrategies, dlcTemplateOrganBlockBrokenStrategies);

/**
 * 器官方块破坏唯一策略
 * 对应.tag('kubejs:break_only')
 * @constant
 * @type {Object<string,function(Internal.BlockBrokenEventJS, organ):void>}
 */
const dlcTemplateOrganBlockBrokenOnlyStrategies = {
    // 示例器官-唯一破坏
    'dlc_template:example_organ_break_only': function (event, organ) {
        // 获取玩家
        let player = event.player
        // 初始化计数
        let count = 1;
        // 防止读取到未定义的数值
        if (player.persistentData.contains(warpCount)) {
            // 增加计数
            count = player.persistentData.getInt(warpCount) + count;
        }
        // 更新扭曲值
        updateWarpCount(player, count)
    },
}

var assign_organ_food_eaten_only = Object.assign(organBlockBrokenOnlyStrategies, dlcTemplateOrganBlockBrokenOnlyStrategies);