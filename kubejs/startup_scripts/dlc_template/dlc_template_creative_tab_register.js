// priority: -1

// 导入Java类
const $CreativeTabRegistrydlc_template = Java.loadClass("dev.architectury.registry.CreativeTabRegistry")

// 创建DLC专属的创造模式物品栏
// "kubejs:dlc_template"改为你希望注册的物品栏id，"dlc_template:example_organ_damage"改为你希望作为图标的物品
$CreativeTabRegistrydlc_template.create(Utils.id("kubejs:dlc_template"), () => Item.of("dlc_template:example_organ_damage"))
