// priority: 9

/**
 * 附魔策略
 * 对应.tag('kubejs:enchant')
 * @constant
 * @type {Object<string,function(Internal.EnchantmentTableServerEventJS, organ):void>}
 */
const dlcTemplateOrganPlayerEnchantStrategies = {
    // 示例器官-附魔
    'dlc_template:example_organ_enchant': function (event, organ) {
        // 遍历附魔槽位
        slotList.forEach(slot => {
            // 获取附魔槽位
            let enchantSlot = event.get(slot)
            // 定义附魔列表
            let enchantList = []
            // 将已有附魔移入列表中
            enchantSlot.removeEnchantments((enchantment, level) => {
                enchantList.push({ enchant: enchantment, level: level })
                return true
            })
            // 随机选取一个附魔
            let random = Math.floor(Math.random() * enchantList.length)
            // 等级加一
            enchantList[random].level += 1
            // 将附魔加回槽位
            enchantList.forEach(enchant => {
                enchantSlot.addEnchantment(enchant.enchant, enchant.level)
            })
            // 更新附魔
            enchantSlot.updateClue()
        })
    },
};

var assign_enchant = Object.assign(organPlayerEnchantStrategies, dlcTemplateOrganPlayerEnchantStrategies);

/**
 * 附魔唯一策略
 * 对应.tag('kubejs:enchant_only')
 * @constant
 * @type {Object<string,function(Internal.EnchantmentTableServerEventJS, organ):void>}
 */
const dlcTemplateOrganPlayerEnchantOnlyStrategies = {
    // 示例器官-唯一附魔
    'dlc_template:example_organ_enchant_only': function (event, organ) {
        // 遍历附魔槽位
        slotList.forEach(slot => {
            // 获取附魔槽位
            let enchantSlot = event.get(slot)
            // 如果随机数小于0.1，则执行以下逻辑
            if (Math.random() < 0.1) {
                // 添加经验修补
                enchantSlot.addEnchantment('minecraft:mending', 0)
            }
            // 更新附魔
            enchantSlot.updateClue()
        })
    },
};

var assign_enchant_only = Object.assign(organPlayerEnchantOnlyStrategies, dlcTemplateOrganPlayerEnchantOnlyStrategies);