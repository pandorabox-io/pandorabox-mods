
Vue.component("recipe-info", {
  props: ["recipe"],
  template: /*html*/`
		<div>
			<recipe-info-normal v-if="recipe.type == 'normal'" :recipe="recipe"/>
			<recipe-info-smelting v-if="recipe.type == 'cooking'" :recipe="recipe"/>
			<recipe-info-alloy v-if="recipe.type == 'alloy'" :recipe="recipe"/>
			<recipe-info-freezing v-if="recipe.type == 'freezing'" :recipe="recipe"/>
			<recipe-info-compressing v-if="recipe.type == 'compressing'" :recipe="recipe"/>
			<recipe-info-separating v-if="recipe.type == 'separating'" :recipe="recipe"/>
			<recipe-info-grinding v-if="recipe.type == 'grinding'" :recipe="recipe"/>
			<recipe-info-extracting v-if="recipe.type == 'extracting'" :recipe="recipe"/>
			<div v-else></div>
		</div>
  `
});

Vue.component("recipe-base-layout", {
	template: /*html*/`
		<div class="card">
			<div class="card-header">
				<slot name="header"></slot>
			</div>
			<div class="card-body">
				<slot name="body"></slot>
			</div>
		</div>
	`
});

Vue.component("recipe-info-smelting", {
	props: ["recipe"],
	computed: {
		item: function(){
			return mtinfo.items[this.recipe.items[0]];
		}
	},
	template: /*html*/`
		<recipe-base-layout>
			<template v-slot:header>
				<i class="fa fa-temperature-high"></i> Smelting/Cooking
			</template>
			<template v-slot:body>
				<item-preview :name="item.name" size="64"/>
			</template>
		</recipe-base-layout>
	`
});

Vue.component("recipe-info-separating", {
	props: ["recipe"],
	template: /*html*/`
		<recipe-base-layout>
			<template v-slot:header>
				<i class="fa fa-arrows-alt-h"></i> Separating
			</template>
			<template v-slot:body>
			</template>
		</recipe-base-layout>
	`
});

Vue.component("recipe-info-freezing", {
	props: ["recipe"],
	template: /*html*/`
		<recipe-base-layout>
			<template v-slot:header>
				<i class="fa fa-temperature-low"></i> Freezing
			</template>
			<template v-slot:body>
			</template>
		</recipe-base-layout>
	`
});

Vue.component("recipe-info-extracting", {
	props: ["recipe"],
	template: /*html*/`
		<recipe-base-layout>
			<template v-slot:header>
				<i class="fa fa-external-link-alt"></i> Extracting
			</template>
			<template v-slot:body>
				<div v-for="name in Object.keys(recipe.items)">
					<item-preview :name="name" size="64"/>
				</div>
			</template>
		</recipe-base-layout>
	`
});

Vue.component("recipe-info-grinding", {
	props: ["recipe"],
	template: /*html*/`
		<recipe-base-layout>
			<template v-slot:header>
				<i class="fa fa-expand-arrows-alt"></i> Grinding
			</template>
			<template v-slot:body>
				<div v-for="name in Object.keys(recipe.items)">
					<item-preview :name="name" size="64"/>
				</div>
			</template>
		</recipe-base-layout>
	`
});

Vue.component("recipe-info-compressing", {
	props: ["recipe"],
	template: /*html*/`
		<recipe-base-layout>
			<template v-slot:header>
				<i class="fa fa-compress-arrows-alt"></i> Compressing
			</template>
			<template v-slot:body>
				<div v-for="name in Object.keys(recipe.items)">
					<item-preview :name="name" size="64"/>
				</div>
			</template>
		</recipe-base-layout>
	`
});

Vue.component("recipe-info-alloy", {
	props: ["recipe"],
	template: /*html*/`
		<recipe-base-layout>
			<template v-slot:header>
				<i class="fa fa-layer-group"></i> Alloying
			</template>
			<template v-slot:body>
				<div v-for="name in Object.keys(recipe.items)">
					<item-preview :name="name" size="64"/>
				</div>
			</template>
		</recipe-base-layout>
	`
});

Vue.component("recipe-info-normal", {
  props: ["recipe"],
	computed: {
		table: function(){
			const table = [
				[null, null, null],
				[null, null, null],
				[null, null, null]
			];

			if (this.recipe.width == 0 && this.recipe.items.length == 2) {
				// "shapeless" recipe
				table[0][0] = this.recipe.items[0];
				table[0][1] = this.recipe.items[1];
			} else {
				// shaped recipe
				let row = 0;
				let col = 0;
				for (let i=0; i<this.recipe.items.length; i++){
					table[row][col] = this.recipe.items[i];
					col++;
					if (col >= (this.recipe.width || 3)){
						row++;
						col = 0;
					}
				}
			}

		return table;
		}
	},
  template: /*html*/`
		<recipe-base-layout>
			<template v-slot:header>
				<i class="fa fa-th"></i> Crafting
			</template>
			<template v-slot:body>
				<table class="inventory-table">
					<tr>
						<td><item-preview v-if="table[0][0]" :name="table[0][0]" size="64"/></td>
						<td><item-preview v-if="table[0][1]" :name="table[0][1]" size="64"/></td>
						<td><item-preview v-if="table[0][2]" :name="table[0][2]" size="64"/></td>
					</tr>
					<tr>
						<td><item-preview v-if="table[1][0]" :name="table[1][0]" size="64"/></td>
						<td><item-preview v-if="table[1][1]" :name="table[1][1]" size="64"/></td>
						<td><item-preview v-if="table[1][2]" :name="table[1][2]" size="64"/></td>
					</tr>
					<tr>
						<td><item-preview v-if="table[2][0]" :name="table[2][0]" size="64"/></td>
						<td><item-preview v-if="table[2][1]" :name="table[2][1]" size="64"/></td>
						<td><item-preview v-if="table[2][2]" :name="table[2][2]" size="64"/></td>
					</tr>
				</table>
			</template>
		</recipe-base-layout>
  `
});
