// priority: 9

/**
 * 器官食物食用策略
 * 对应.tag('kubejs:eat_effect')
 * @constant
 * @type {Object<string,function(Internal.FoodEatenEventJS, organ):void>}
 */
const dlcTemplateOrganFoodEatenStrategies = {
    // 示例器官-食用
    'dlc_template:example_organ_eat_effect': function (event, organ) {
        // 回复生命值
        event.player.heal(2)
    },
}

var assign_organ_food_eaten = Object.assign(organFoodEatenStrategies, dlcTemplateOrganFoodEatenStrategies);

/**
 * 器官食物食用唯一策略
 * 对应.tag('kubejs:eat_effect_only')
 * @constant
 * @type {Object<string,function(Internal.FoodEatenEventJS, organ):void>}
 */
const dlcTemplateOrganFoodEatenOnlyStrategies = {
    // 示例器官-唯一食用
    'dlc_template:example_organ_eat_effect_only': function (event, organ) {
        // 获取玩家
        let player = event.player
        // 如果随机数小于0.2，则执行以下逻辑
        if (Math.random() < 0.2) {
            // 给予瞬间治疗
            // 瞬间型的效果应当只给予1tick的时长
            player.potionEffects.add('minecraft:instant_health', 1, 0)
        }
    },
}

var assign_organ_food_eaten_only = Object.assign(organFoodEatenOnlyStrategies, dlcTemplateOrganFoodEatenOnlyStrategies);