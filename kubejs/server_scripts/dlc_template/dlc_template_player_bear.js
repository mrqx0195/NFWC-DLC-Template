// priority: 9

/**
 * 玩家承受伤害处理策略
 * 对应.tag('kubejs:bear')
 * @constant
 * @type {Object<string,function(Internal.LivingDamageEvent, organ, EntityHurtCustomModel):void>}
 */
const dlcTemplateOrganPlayerBearStrategies = {
    // 示例器官-受伤
    'dlc_template:example_organ_bear': function (event, organ, data) {
        // 获取玩家
        let player = event.entity
        // 如果已有效果，则执行以下逻辑
        if (player.hasEffect('minecraft:resistance')) {
            // 获取已有的抗性提升效果
            let effect = player.getEffect('minecraft:resistance')
            // 获取效果等级
            let amplifier = effect.getAmplifier()
            // 获取效果时长
            let duration = effect.getDuration()
            // 增加效果
            player.potionEffects.add('minecraft:resistance', duration + 20 * 3, amplifier)
        }
        // 否则执行以下逻辑
        else {
            // 增加效果
            // 注意，时长以tick为单位，等级以0为一级
            player.potionEffects.add('minecraft:resistance', 20 * 3, 0)
        }
    },
}

var assign_organ_player_bear = Object.assign(organPlayerBearStrategies, dlcTemplateOrganPlayerBearStrategies);

/**
 * 玩家承受伤害唯一处理策略
 * 对应.tag('kubejs:bear_only')
 * @constant
 * @type {Object<string,function(Internal.LivingDamageEvent, organ, EntityHurtCustomModel):void>}
 */
const dlcTemplateOrganPlayerBearOnlyStrategies = {
    // 示例器官-唯一受伤
    'dlc_template:example_organ_bear_only': function (event, organ, data) {
        // 获取玩家
        let player = event.entity
        // 获取攻击者
        let source = event.source.actual
        // 如果存在攻击者
        if (source) {
            // 延迟一刻执行，防止可能出现的死循环堆积在同一tick内
            source.getServer().scheduleInTicks(1, () => {
                // 如果没有这个，会攻击到非生物实体，比如掉落物
                if (source.isLiving()) {
                    // 攻击,DamageSource为伤害源，后一个数值是伤害数值
                    source.attack(DamageSource.playerAttack(player), event.amount * 0.5)
                }
            })
            // 下方为本体提供的方法，这种方法造成的伤害无法受到额外加成，但是更安全，不需要考虑死循环
            // data.returnDamage += event.amount * 0.5
        }
    },
}

var assign_organ_player_bear_only = Object.assign(organPlayerBearOnlyStrategies, dlcTemplateOrganPlayerBearOnlyStrategies);
