// priority: -1

// 这个事件用于注册物品，比如器官
// 器官效果的实现逻辑见于../server_scripts/dlc_template/中
StartupEvents.registry('item', event => {
    /**
     * 注册器官时调用的函数
     * @param {Organ} organ 
     * @returns {Internal.BasicItemJS$Builder}
     */
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        // 此处.group()中的参数改为你注册的创造模式物品栏的id，定义于./dlc_template_creative_tab_register.js中
        let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.dlc_template")
        if (organ.ctrlTextLines.length > 0) {
            builder.tag('chestcavity:active')
        }
        if (organ.altTextLines.length > 0) {
            builder.tag('chestcavity:special')
        }
        return builder
    }

    // 示例器官-伤害
    // 'dlc_template:example_organ_damage'是注册的器官的物品id
    registerOrgan(new Organ('dlc_template:example_organ_damage')
        // 添加器官的基础描述，"dlc_template.tooltips.example_organ_damage.1"是本地化键名，位于/kubejs/assets/dlc_template/lang/中的本地化文件
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_damage.1" })])
        // 添加器官的特殊效果描述
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_damage.2" })])
        // 添加器官的基础数值
        .addScore('strength', 1)
        // 构建，别忘加了
        .build())
        // 器官的材质路径，这个材质位于/kubejs/assets/dlc_template/item/organs/example_organ_damage.png
        .texture('dlc_template:item/organs/example_organ_damage')
        // 这个标签控制物品的边框
        .tag('itemborders:iron')
        // 这个标签标明这是一个“伤害”型器官
        .tag('kubejs:damage')
        // 这个标签是额外的种类描述，定义于./dlc_template_global.js中
        .tag('kubejs:dlc_template');

    // 示例器官-唯一伤害
    registerOrgan(new Organ('dlc_template:example_organ_damage_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_damage_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_damage_only.2" })])
        .addScore('strength', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_damage_only')
        .tag('itemborders:gold')
        .tag('kubejs:damage_only')
        .tag('kubejs:dlc_template');

    // 示例器官-受伤
    registerOrgan(new Organ('dlc_template:example_organ_bear')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_bear.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_bear.2" })])
        .addScore('defense', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_bear')
        .tag('itemborders:iron')
        .tag('kubejs:bear')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一受伤
    registerOrgan(new Organ('dlc_template:example_organ_bear_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_bear_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_bear_only.2" })])
        .addScore('defense', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_bear_only')
        .tag('itemborders:gold')
        .tag('kubejs:bear_only')
        .tag('kubejs:dlc_template');

    // 示例器官-玩家刻
    registerOrgan(new Organ('dlc_template:example_organ_player_tick')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_player_tick.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_player_tick.2" })])
        .addScore('digestion', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_player_tick')
        .tag('itemborders:iron')
        .tag('kubejs:player_tick')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一玩家刻
    registerOrgan(new Organ('dlc_template:example_organ_player_tick_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_player_tick_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_player_tick_only.2" })])
        .addScore('digestion', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_player_tick_only')
        .tag('itemborders:gold')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:dlc_template');

    // 示例器官-右键点击
    registerOrgan(new Organ('dlc_template:example_organ_rclick')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_rclick.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_rclick.2" })])
        .addScore('speed', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_rclick')
        .tag('itemborders:iron')
        .tag('kubejs:rclick')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一右键点击
    registerOrgan(new Organ('dlc_template:example_organ_rclick_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_rclick_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_rclick_only.2" })])
        .addScore('speed', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_rclick_only')
        .tag('itemborders:gold')
        .tag('kubejs:rclick_only')
        .tag('kubejs:dlc_template');

    // 示例器官-食用
    registerOrgan(new Organ('dlc_template:example_organ_eat_effect')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_eat_effect.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_eat_effect.2" })])
        .addScore('nutrition', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_eat_effect')
        .tag('itemborders:iron')
        .tag('kubejs:eat_effect')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一食用
    registerOrgan(new Organ('dlc_template:example_organ_eat_effect_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_eat_effect_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_eat_effect_only.2" })])
        .addScore('nutrition', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_eat_effect_only')
        .tag('itemborders:gold')
        .tag('kubejs:eat_effect_only')
        .tag('kubejs:dlc_template');

    // 示例器官-实体战利品
    registerOrgan(new Organ('dlc_template:example_organ_loot_entity')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_loot_entity.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_loot_entity.2" })])
        .addScore('breath_capacity', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_loot_entity')
        .tag('itemborders:iron')
        .tag('kubejs:loot_entity')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一实体战利品
    registerOrgan(new Organ('dlc_template:example_organ_loot_entity_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_loot_entity_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_loot_entity_only.2" })])
        .addScore('breath_capacity', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_loot_entity_only')
        .tag('itemborders:gold')
        .tag('kubejs:loot_entity_only')
        .tag('kubejs:dlc_template');

    // 示例器官-箱子战利品
    registerOrgan(new Organ('dlc_template:example_organ_loot_chest')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_loot_chest.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_loot_chest.2" })])
        .addScore('luck', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_loot_chest')
        .tag('itemborders:iron')
        .tag('kubejs:loot_chest')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一箱子战利品
    registerOrgan(new Organ('dlc_template:example_organ_loot_chest_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_loot_chest_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_loot_chest_only.2" })])
        .addScore('luck', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_loot_chest_only')
        .tag('itemborders:gold')
        .tag('kubejs:loot_chest_only')
        .tag('kubejs:dlc_template');

    // 示例器官-附魔
    registerOrgan(new Organ('dlc_template:example_organ_enchant')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_enchant.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_enchant.2" })])
        .addScore('nerves', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_enchant')
        .tag('itemborders:iron')
        .tag('kubejs:enchant')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一附魔
    registerOrgan(new Organ('dlc_template:example_organ_enchant_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_enchant_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_enchant_only.2" })])
        .addScore('nerves', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_enchant_only')
        .tag('itemborders:gold')
        .tag('kubejs:enchant_only')
        .tag('kubejs:dlc_template');

    // 示例器官-破坏
    registerOrgan(new Organ('dlc_template:example_organ_break')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_break.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_break.2" })])
        .addScore('knockback_resistant', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_break')
        .tag('itemborders:iron')
        .tag('kubejs:break')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一破坏
    registerOrgan(new Organ('dlc_template:example_organ_break_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_break_only.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_break_only.2" })])
        .addScore('knockback_resistant', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_break_only')
        .tag('itemborders:gold')
        .tag('kubejs:break_only')
        .tag('kubejs:dlc_template');

    // 示例器官-按键激活
    registerOrgan(new Organ('dlc_template:example_organ_key_pressed')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_key_pressed.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_key_pressed.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_key_pressed.3" })])
        .addScore('fire_resistant', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_key_pressed')
        .tag('itemborders:gold')
        .tag('kubejs:key_pressed')
        .tag('kubejs:dlc_template');

    // 示例器官-激活
    registerOrgan(new Organ('dlc_template:example_organ_active')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_active.1" })])
        // 注意，激活效果描述的type应为'ctrl'，而非'alt'
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_active.2" })])
        .addScore('health', 1)
        .build())
        .texture('dlc_template:item/organs/example_organ_active')
        .tag('itemborders:iron')
        .tag('kubejs:active')
        .tag('kubejs:dlc_template');

    // 示例器官-唯一激活
    registerOrgan(new Organ('dlc_template:example_organ_active_only')
        .addTextLines('default', [Text.gray({ "translate": "dlc_template.tooltips.example_organ_active_only.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "dlc_template.tooltips.example_organ_active_only.2" })])
        .addScore('health', 1.5)
        .build())
        .texture('dlc_template:item/organs/example_organ_active_only')
        .tag('itemborders:gold')
        .tag('kubejs:active_only')
        .tag('kubejs:dlc_template');
})