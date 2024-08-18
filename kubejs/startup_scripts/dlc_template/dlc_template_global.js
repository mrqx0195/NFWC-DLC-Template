// priority: -1

// 额外添加的器官种类
// 如果../global.js中已经有了你想要的器官种类，直接使用即可
// 'kubejs:dlc_template'是种类的id，"dlc_template.tooltips.dlc_template_template"是本地化键名，'#ffffff'是游戏内显示的颜色
global.DLC_TEMPLATE_TYPE_MAP = {
    'kubejs:dlc_template': Text.of({ "translate": "dlc_template.tooltips.dlc_template" }).color('#ffffff'),
}

// 合并至No Flesh Within Chest本体的逻辑中，别忘加了
var assign1 = Object.assign(global.TYPE_MAP, global.DLC_TEMPLATE_TYPE_MAP);

// 额外添加的属性修饰符
// 如果../global.js中已经有了你想要的属性修饰符，直接使用即可
// 'minecraft:generic.max_health'是属性的id，"dlcTemplateMaxHealthMultiBase"是修饰符的id，'multiply_base'是具体进行的操作
global.DLC_TEMPLATE_HEALTH_UP_MULTI_BASE = { key: 'minecraft:generic.max_health', name: 'dlcTemplateMaxHealthMultiBase', operation: 'multiply_base' }


// 合并至No Flesh Within Chest本体的逻辑中，别忘加了
global.DLC_TEMPLATE_ATTRIBUTE_MAP = {
    'dlcTemplateMaxHealthMultiBase': global.DLC_TEMPLATE_HEALTH_UP_MULTI_BASE,
}

var assign2 = Object.assign(global.ATTRIBUTE_MAP, global.DLC_TEMPLATE_ATTRIBUTE_MAP);