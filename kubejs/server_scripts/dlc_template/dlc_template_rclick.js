// priority: 9

/**
 * 器官右键事件策略
 * 对应.tag('kubejs:rclick')
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const dlcTemplateOrganRightClickedStrategies = {
	// 示例器官-右键点击
	'dlc_template:example_organ_rclick': function (event, organ) {
		// 获取物品
		let item = event.item
		// 获取玩家
		let player = event.player
		// 获取食物数据
		let food = item.getFoodProperties(player)
		// 如果物品能吃，并且玩家在潜行，则执行以下逻辑
		if (food && food.getNutrition() && food.getSaturationModifier() && player.isShiftKeyDown()) {
			// 减少物品数量
			item.shrink(1)
			// 吃
			player.getFoodData().eat(food.getNutrition(), food.getSaturationModifier())
		}
	},
}

var assign_organ_right_clicked = Object.assign(organRightClickedStrategies, dlcTemplateOrganRightClickedStrategies);

/**
 * 器官右键事件唯一策略
 * 对应.tag('kubejs:rclick_only')
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const dlcTemplateOrganRightClickedOnlyStrategies = {
	// 示例器官-唯一右键点击
	'dlc_template:example_organ_rclick_only': function (event, organ) {
		// 获取物品
		let item = event.item
		// 获取玩家
		let player = event.player
		// 如果物品是玻璃瓶，则执行以下逻辑
		if (item == 'minecraft:glass_bottle') {
			// 减少物品数量
			item.shrink(1)
			// 给予水瓶
			player.give(Item.of('minecraft:potion'))
		}
		// 如果物品是桶，则执行以下逻辑
		else if (item == 'minecraft:bucket') {
			// 减少物品数量
			item.shrink(1)
			// 给予水桶
			player.give(Item.of('minecraft:water_bucket'))
		}
	},
};

var assign_organ_right_clicked_only = Object.assign(organRightClickedOnlyStrategies, dlcTemplateOrganRightClickedOnlyStrategies);