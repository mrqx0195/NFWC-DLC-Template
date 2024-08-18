// priority: 9

/**
 * 器官实体掉落策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const dlcTemplateEntityLootStrategies = {
    // 示例器官-实体战利品
    'dlc_template:example_organ_loot_entity': function (event, organ) {
        // 向掉落中加入一根木棍
        event.addLoot('minecraft:stick')
    },
}

var assign_entity_loot = Object.assign(entityLootStrategies, dlcTemplateEntityLootStrategies);

/**
 * 器官实体掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const dlcTemplateEntityLootOnlyStrategies = {
    // 示例器官-唯一实体战利品
    'dlc_template:example_organ_loot_entity_only': function (event, organ) {
        // 在被杀实体的位置生成爆炸
        let explosion = event.getEntity().getBlock().createExplosion()
        // 将爆炸的主人设为击杀者，也就是玩家
        explosion.exploder(event.getKillerEntity())
        // 设置爆炸的强度
        explosion.strength(1)
        // 爆！
        explosion.explode()
    },
}

var assign_entity_loot_only = Object.assign(entityLootOnlyStrategies, dlcTemplateEntityLootOnlyStrategies);

/**
 * 器官箱子掉落策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const dlcTemplateChestLootStrategies = {
    // 示例器官-箱子战利品
    'dlc_template:example_organ_loot_chest': function (event, organ) {
        // 获取玩家
        let player = event.getPlayer()
        // 如果已有效果，则执行以下逻辑
        if (player.hasEffect('minecraft:resistance')) {
            // 获取已有的抗性提升效果
            let effect = player.getEffect('minecraft:resistance')
            // 获取效果等级
            let amplifier = effect.getAmplifier()
            // 获取效果时长
            let duration = effect.getDuration()
            // 增加效果
            player.potionEffects.add('minecraft:resistance', duration, amplifier + 1)
        }
        // 否则执行以下逻辑
        else {
            // 增加效果
            // 注意，时长以tick为单位，等级以0为一级
            player.potionEffects.add('minecraft:resistance', 20 * 3, 0)
        }
    },
}

var assign_chest_loot = Object.assign(chestLootStrategies, dlcTemplateChestLootStrategies);

/**
 * 器官箱子掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const dlcTemplateChestLootOnlyStrategies = {
    // 示例器官-唯一箱子战利品
    'dlc_template:example_organ_loot_chest_only': function (event, organ) {
        // 添加随机数量的钻石
        event.addLoot(Item.of('minecraft:diamond', Math.floor(Math.random() * 10)))
    },
}

var assign_chest_loot_only = Object.assign(chestLootOnlyStrategies, dlcTemplateChestLootOnlyStrategies);