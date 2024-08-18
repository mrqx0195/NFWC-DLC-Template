// priority: 9

/**
 * 器官激活策略
 * 对应.tag('kubejs:active')
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const dlcTemplateOrganActiveStrategies = {
    // 示例器官-激活
    'dlc_template:example_organ_active': function (player, organ, attributeMap) {
        // 获取玩家的胸腔属性
        let playerChestInstance = player.getChestCavityInstance()
        // 向胸腔属性中放入新属性
        // new ResourceLocation('chestcavity', 'health')指健康属性
        playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'health'),
            // playerChestInstance.getOrganScores().get()获取玩家的当前属性
            // $Float是将javascript数字转化为java的单精度浮点数，必须要有
            new $Float(playerChestInstance.getOrganScores().get(new ResourceLocation('chestcavity', 'health')) + 2))
    },
}

var assign_organ_active = Object.assign(organActiveStrategies, dlcTemplateOrganActiveStrategies);

/**
 * 器官激活唯一策略
 * 对应.tag('kubejs:active_only')
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const dlcTemplateOrganActiveOnlyStrategies = {
    // 示例器官-唯一激活
    'dlc_template:example_organ_active_only': function (player, organ, attributeMap) {
        // 获取玩家胸腔类型表
        let typeMap = getPlayerChestCavityTypeMap(player)
        // 如果存在 心脏 类型的器官，则执行以下逻辑
        // 顺便一提，有些心脏不是 心脏 类型的器官
        if (typeMap.has('kubejs:heart')) {
            // 将属性修饰符添加到属性修饰符表中
            // 修饰符注册于startup_scripts/dlc_template/dlc_template_global中
            // 后者为具体要增加的值，typeMap.get('kubejs:heart').length为 心脏 类型器官的个数
            // 如果要减少，则使用负数
            attributeMapValueAddition(attributeMap, global.DLC_TEMPLATE_HEALTH_UP_MULTI_BASE, typeMap.get('kubejs:heart').length * 0.02)
        }

    },
}

var assign_organ_active_only = Object.assign(organActiveOnlyStrategies, dlcTemplateOrganActiveOnlyStrategies);