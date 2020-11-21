const languages = ["eng", "jpn", "chs", "cht"];

/**
 * [
 * 	type_eng,
 * 	type_jpn,
 * 	type_chs,
 * 	type_cht,
 * 	effectiveness_array
 * ]
 */
const types = [
	["Dragon", "ドラゴン", "龙", "龍", []],
	["Ghost", "ゴースト", "幽灵", "幽靈", []],
	["Ground", "じめん", "地面", "地面", []],
	["Flying", "ひこう", "飞行", "飛行", []],
	["Poison", "どく", "毒", "毒", []],
	["Bug", "むし", "虫", "蟲", []],
	["Water", "みず", "水", "水", []],
	["Electric", "でんき", "电", "電", []],
	["Rock", "いわ", "岩石", "岩石", []],
	["Grass", "くさ", "草", "草", []],
	["Dark", "あく", "恶", "惡", []],
	["Ice", "こおり", "冰", "冰", []],
	["Normal", "ノーマル", "一般", "一般", []],
	["Fire", "ほのお", "火", "火", []],
	["Fighting", "かくとう", "格斗", "格鬥", []],
	["Steel", "はがね", "钢", "鋼", []],
	["Psychic", "エスパー", "超能力", "超能力", []],
	["Fairy", "フェアリー", "妖精", "妖精", []]
];

function initializeTypeArray() {
	type_array = [];
	for (let i = 0; i < types.length; ++i) type_array[i] = 1;

	return type_array;
}

// initializes effectiveness array for each type
for (let i = 0; i < types.length; ++i) {
	types[i][types.length - 1] = initializeTypeArray();
}

// effectiveness against Dragon types [0]
for (let x of [6, 7, 9, 13]) types[0][types.length - 1][x] /= 2;
for (let x of [0, 11, 17]) types[0][types.length - 1][x] *= 2;

// effectiveness against Ghost types [1]
for (let x of [4, 5]) types[1][types.length - 1][x] /= 2;
for (let x of [1, 10]) types[1][types.length - 1][x] *= 2;
for (let x of [12, 14]) types[1][types.length - 1][x] = 0;

// effectiveness against Ground types [2]
for (let x of [4, 8]) types[2][types.length - 1][x] /= 2;
for (let x of [6, 9, 11]) types[2][types.length - 1][x] *= 2;
for (let x of [7]) types[2][types.length - 1][x] = 0;

// effectiveness against Flying types [3]
for (let x of [5, 9, 14]) types[3][types.length - 1][x] /= 2;
for (let x of [7, 8, 11]) types[3][types.length - 1][x] *= 2;
for (let x of [2]) types[3][types.length - 1][x] = 0;

// effectiveness against Poison types [4]
for (let x of [4, 5, 9, 14, 17]) types[4][types.length - 1][x] /= 2;
for (let x of [2, 16]) types[4][types.length - 1][x] *= 2;

// effectiveness against Bug types [5]
for (let x of [2, 9, 14]) types[5][types.length - 1][x] /= 2;
for (let x of [3, 8, 13]) types[5][types.length - 1][x] *= 2;

// effectiveness against Water types [6]
for (let x of [6, 11, 13, 15]) types[6][types.length - 1][x] /= 2;
for (let x of [7, 9]) types[6][types.length - 1][x] *= 2;

// effectiveness against Electric types [7]
for (let x of [3, 7, 15]) types[7][types.length - 1][x] /= 2;
for (let x of [2]) types[7][types.length - 1][x] *= 2;

// effectiveness against Rock types [8]
for (let x of [3, 4, 12, 13]) types[8][types.length - 1][x] /= 2;
for (let x of [2, 6, 9, 14, 15]) types[8][types.length - 1][x] *= 2;

// effectiveness against Grass types [9]
for (let x of [2, 6, 7, 9]) types[9][types.length - 1][x] /= 2;
for (let x of [3, 4, 5, 11, 13]) types[9][types.length - 1][x] *= 2;

// effectiveness against Dark types [10]
for (let x of [1, 10]) types[10][types.length - 1][x] /= 2;
for (let x of [5, 14, 17]) types[10][types.length - 1][x] *= 2;
for (let x of [16]) types[10][types.length - 1][x] = 0;

// effectiveness against Ice types [11]
for (let x of [11]) types[11][types.length - 1][x] /= 2;
for (let x of [8, 13, 14, 15]) types[11][types.length - 1][x] *= 2;

// effectiveness against Normal types [12]
for (let x of [14]) types[12][types.length - 1][x] *= 2;
for (let x of [1]) types[12][types.length - 1][x] = 0;

// effectiveness against Fire types [13]
for (let x of [5, 9, 11, 13, 15, 17]) types[13][types.length - 1][x] /= 2;
for (let x of [2, 6, 8]) types[13][types.length - 1][x] *= 2;

// effectiveness against Fighting types [14]
for (let x of [5, 8, 10]) types[14][types.length - 1][x] /= 2;
for (let x of [3, 16, 17]) types[14][types.length - 1][x] *= 2;

// effectiveness against Steel types [15]
for (let x of [0, 3, 5, 8, 9, 11, 12, 15, 16, 17]) types[15][types.length - 1][x] /= 2;
for (let x of [2, 13, 14]) types[15][types.length - 1][x] *= 2;
for (let x of [4]) types[15][types.length - 1][x] = 0;

// effectiveness against Psychic types [16]
for (let x of [14, 16]) types[16][types.length - 1][x] /= 2;
for (let x of [1, 5, 10]) types[16][types.length - 1][x] *= 2;

// effectiveness against Fairy types [17]
for (let x of [5, 10, 14]) types[17][types.length - 1][x] /= 2;
for (let x of [4, 15]) types[17][types.length - 1][x] *= 2;
for (let x of [0]) types[17][types.length - 1][x] = 0;

/**
 * [
 * ability_eng,
 * ability_jpn,
 * ability_chs,
 * ability_cht,
 * ability_codename
 * ]
 */
const suppress_abilities = [
	["Dry Skin", "かんそうはだ", "干燥皮肤", "乾燥皮膚", "dry_skin"],
	["Filter", "フィルター", "过滤", "過濾", "filter"],
	["Flash Fire", "もらいび", "引火", "引火", "flash_fire"],
	["Heatproof", "たいねつ", "耐热", "耐熱", "heatproof"],
	["Immunity", "めんえき", "免疫", "免疫", "immunity"],
	["Levitate", "ふゆう", "漂浮", "飄浮", "levitate"],
	["Lightning Rod", "ひらいしん", "避雷针", "避雷針", "lightning_rod"],
	["Motor Drive", "でんきエンジン", "电气引擎", "電氣引擎", "motor_drive"],
	["Overcoat", "ぼうじん", "防尘", "防塵", "overcoat"],
	["Prism Armor", "プリズムアーマー", "棱镜装甲", "稜鏡裝甲", "prism_armor"],
	["RKS System", "ＡＲシステム", "ＡＲ系统", "ＡＲ系統", "rks_system"],
	["Sap Sipper", "そうしょく", "草食", "食草", "sap_sipper"],
	["Solid Rock", "ハードロック", "坚硬岩石", "坚硬岩石", "solid_rock"],
	["Storm Drain", "よびみず", "引水", "引水", "storm_drain"],
	["Thick Fat", "あついしぼう", "厚脂肪", "厚脂肪", "thick_fat"],
	["Volt Absorb", "ちくでん", "蓄电", "蓄電", "volt_absorb"],
	["Water Absorb", "ちょすい", "储水", "儲水", "water_absorb"],
];

const type_change_moves = [
	["Burn Up", "もえつきる", "燃尽", "燃盡", "burn_up"],
	["Forest's Curse", "もりののろい", "森林诅咒", "森林詛咒", "forests_curse"],
	["Gravity", "じゅうりょく", "重力", "重力", "gravity"],
	["Magic Powder", "まほうのこな", "魔法粉", "魔法粉", "magic_powder"],
	["Roost", "はねやすめ", "羽栖", "羽棲", "roost"],
	["Soak", "みずびたし", "浸水", "浸水", "soak"],
	["Trick-or-Treat", "ハロウィン", "万圣夜", "萬聖夜", "trick-or-treat"],
];

/**
 * adds buttons for selecting primary and secondary types 
 */
function selectListing() {
	for (let type of types) {
		$("#type-1").append(
			`
			<button class="btn btn-sm btn-pkmn1" id="btn-${type[0].toLowerCase()}1" onclick="click1('${type[0].toLowerCase()}')">
				<image src="../assets/svg/${type[0].toLowerCase()}.svg" style="width: 15px; padding-top: -1rem; padding-bottom: .15rem;">&nbsp;
				<span class="type-desc type-eng">${type[0].toUpperCase()}</span>
				<span class="type-desc type-jpn chineseFont">${type[1]}</span>
				<span class="type-desc type-chs chineseFont">${type[2]}</span>
				<span class="type-desc type-cht chineseFont">${type[3]}</span>
			</button>
			`
		);
		$("#type-2").append(
			`
			<button class="btn btn-sm btn-pkmn2" id="btn-${type[0].toLowerCase()}2" onclick="click2('${type[0].toLowerCase()}')">
				<image src="../assets/svg/${type[0].toLowerCase()}.svg" style="width: 15px; padding-top: -1rem; padding-bottom: .15rem;">&nbsp;
				<span class="type-desc type-eng">${type[0].toUpperCase()}</span>
				<span class="type-desc type-jpn chineseFont">${type[1]}</span>
				<span class="type-desc type-chs chineseFont">${type[2]}</span>
				<span class="type-desc type-cht chineseFont">${type[3]}</span>
			</button>
			`
		);
	}
	for (let ability of suppress_abilities) {
		$("#suppress-abilities").append(
			`
			<button class="btn btn-sm btn-outline-light btn-ability btn-imm ability-eng mx-1 mb-1" id="btn-${ability[ability.length - 1]}" onclick="click3('${ability[ability.length - 1]}')">
				<span class="type-desc type-eng">${ability[0].toUpperCase()}</span>
				<span class="type-desc type-jpn chineseFont">${ability[1]}</span>
				<span class="type-desc type-chs chineseFont">${ability[2]}</span>
				<span class="type-desc type-cht chineseFont">${ability[3]}</span>
			</button>
			`
		);
	}
	for (let ability of type_change_moves) {
		$("#type-change-moves").append(
			`
			<button class="btn btn-sm btn-outline-light btn-ability btn-tca ability-eng mx-1 mb-1" id="btn-${ability[ability.length - 1]}" onclick="click3('${ability[ability.length - 1]}')">
				<span class="type-desc type-eng">${ability[0].toUpperCase()}</span>
				<span class="type-desc type-jpn chineseFont">${ability[1]}</span>
				<span class="type-desc type-chs chineseFont">${ability[2]}</span>
				<span class="type-desc type-cht chineseFont">${ability[3]}</span>
			</button>
			`
		);
	}

	$("#btn-control>div:first-of-type").append(
		`
		<button class="btn btn-outline-light btn-block" id="btn-clearAbility" onclick="click3('')">CLEAR ABILITIES</button>
		`
	);
}

/**
 * Adds language button selections
 */
function languageButtons() {
	for (let i = 0; i < languages.length; ++i) {
		$("#language-selection").append(
			`<button class="btn btn-sm btn-outline-light m-1 active" id="btn-${languages[i]}" onclick="languageChange(${i})">${languages[i].toUpperCase()}</button>
			`
		);
	}
}

/**
 * First type selection
 * 
 * @param {*} clicked_type 
 */
function click1(clicked_type) {
	if ($("#btn-" + clicked_type + "1").hasClass("active") && clicked_type !== "normal") {
		$("#btn-" + clicked_type + "1").removeClass("active");
		$("#btn-normal1").addClass("active");

		$(".btn-pkmn2").removeClass("disabled").prop("disabled", false);
		if ($("#btn-normal2").hasClass("active")) click2('nil');

		$("#btn-normal2").addClass("disabled").prop("disabled", true);
	} else {
		$(".btn-pkmn1").removeClass("active");
		$("#btn-" + clicked_type + "1").addClass("active");

		$(".btn-pkmn2").removeClass("disabled").prop("disabled", false);
		if ($("#btn-" + clicked_type + "2").hasClass("active")) click2('nil');

		$("#btn-" + clicked_type + "2").addClass("disabled").prop("disabled", true);
	}

	typeResults();
	// pokedex_list();
}

/**
 * Second type selection
 * 
 * @param {*} clicked_type 
 */
function click2(clicked_type) {
	if ($("#btn-" + clicked_type + "2").hasClass("active") && clicked_type !== "nil") {
		$("#btn-" + clicked_type + "2").removeClass("active");
		$("#btn-nil2").addClass("active");
	} else {
		$(".btn-pkmn2").removeClass("active");
		$("#btn-" + clicked_type + "2").addClass("active");
	}
	typeResults();
	// pokedex_list();
}

/**
 * Additional types by abilities
 * 
 * @param {*} clicked_ability 
 */
function click3(clicked_ability) {
	if (clicked_ability == '') $(".btn-ability").removeClass("active");
	else if ($("#btn-" + clicked_ability).hasClass("active")) {
		$("#btn-" + clicked_ability).removeClass("active");
	} else {
		$("#btn-" + clicked_ability).addClass("active");

		// trigger between Forest's Curse and Trick-or-Treat abilities
		if (clicked_ability === "forests_curse") $("#btn-trick-or-treat").removeClass("active");
		else if (clicked_ability === "trick-or-treat") $("#btn-forests_curse").removeClass("active");

		// trigger Gravity
		else if (clicked_ability === "gravity") $("#btn-levitate").removeClass("active");

		if (clicked_ability === "magic_powder") {		// trigger Magic Powder
			$(".btn-tca:not(#btn-magic_powder)").removeClass("active");
			$("#btn-burn_up, #btn-roost").addClass("disabled").prop("disabled", true);
			matchup_array = initializeTypeArray();
		}
		if (clicked_ability === "soak") {						// trigger Soak
			$(".btn-tca:not(#btn-soak)").removeClass("active");
			$("#btn-burn_up, #btn-roost").addClass("disabled").prop("disabled", true);
			matchup_array = initializeTypeArray();
		}
	}

	$(".btn-ability").removeClass("disabled").prop("disabled", false);

	/* prep up abilities if applicable */

	// Forest's Curse will always fail if the target is already a Grass type
	if ($("#btn-grass1").hasClass("active") || $("#btn-grass2").hasClass("active")) {
		$("#btn-forests_curse").addClass("disabled").removeClass("active").prop("disabled", true);
	} else {
		$("#btn-forests_curse").removeClass("disabled").prop("disabled", false);
	}

	// Magic Powder will always fail if the target is a Grass type or pure Psychic type
	if (($("#btn-grass1").hasClass("active") || $("#btn-grass2").hasClass("active"))
		|| ($("#btn-psychic1").hasClass("active") && $("#btn-nil2").hasClass("active"))) {
		$("#btn-magic_powder").addClass("disabled").removeClass("active").prop("disabled", true);
	} else {
		$("#btn-magic_powder").removeClass("disabled").prop("disabled", false);
	}

	// Trick-or-Treat will always fail if the target is already a Ghost type
	if ($("#btn-ghost1").hasClass("active") || $("#btn-ghost2").hasClass("active")) {
		$("#btn-trick-or-treat").addClass("disabled").removeClass("active").prop("disabled", true);
	} else {
		$("#btn-trick-or-treat").removeClass("disabled").prop("disabled", false);
	}

	typeResults();
}

/**
 * Reset type selection:
 * First type: NORMAL
 * Second type: NIL
 * Remove any abilities previously selected
 */
function reset() {
	$(".btn-pkmn1, .btn-pkmn2").removeClass("active");

	click1('normal');
	click2('nil');
	click3('');
}

/**
 * Returns matchup array after checking each ability
 * Also disables abilities with similar effect
 * 
 * @param {*} matchup_array 
 */
function abilityCheck(matchup_array) {
	/**
	 * TYPE IMMUNITIES
	 */

	/**
	 * Dry Skin restores .25 HP from Water type moves, but 1.25x more damage from Fire type moves
	 * Takes damage in Sunshine, heals in Rain
	 */
	if ($("#btn-dry_skin").hasClass("active")) {
		matchup_array[6] = 0;
		matchup_array[13] *= 1.25;
		$(".btn-imm:not(#btn-dry_skin)").addClass("disabled").prop("disabled", true);
	}

	// Filter reduces the power of supereffective attacks taken
	if ($("#btn-filter").hasClass("active")) {
		for (let i = 0; i < matchup_array.length; ++i) {
			if (matchup_array[i] > 1) matchup_array[i] *= .75;
		}

		$(".btn-imm:not(#btn-filter)").addClass("disabled").prop("disabled", true);
	}

	// Flash Fire gives immunity to Fire type moves, +1 SpA
	if ($("#btn-flash_fire").hasClass("active")) {
		matchup_array[13] = 0;
		$(".btn-imm:not(#btn-flash_fire)").addClass("disabled").prop("disabled", true);
	}

	// Heatproof halves damage done by Fire type moves
	if ($("#btn-heatproof").hasClass("active")) {
		matchup_array[13] /= 2;
		$(".btn-imm:not(#btn-heatproof)").addClass("disabled").prop("disabled", true);
	}

	// Immunity gives immunity (lol) to Poison type moves
	if ($("#btn-immunity").hasClass("active")) {
		matchup_array[4] = 0;
		$(".btn-imm:not(#btn-immunity)").addClass("disabled").prop("disabled", true);
	}

	// Levitate gives immunity to Ground type moves
	if ($("#btn-levitate").hasClass("active")) {
		matchup_array[2] = 0;
		$(".btn-imm:not(#btn-levitate)").addClass("disabled").prop("disabled", true);
	}

	// Lightning Rod gives immunity to Electric type moves, +1 SpA
	if ($("#btn-lightning_rod").hasClass("active")) {
		matchup_array[7] = 0;
		$(".btn-imm:not(#btn-lightning_rod)").addClass("disabled").prop("disabled", true);
	}

	// Motor Drive gives immunity to Electric type moves, +1 Spe
	if ($("#btn-motor_drive").hasClass("active")) {
		matchup_array[7] = 0;
		$(".btn-imm:not(#btn-motor_drive)").addClass("disabled").prop("disabled", true);
	}

	/**
	 * Overcoat protects the Pokémon from things like sand, hail, and powder
	 * Immunity to type changing abilities from the aforementioned forms like Magic Powder
	 */
	if ($("#btn-overcoat").hasClass("active")) {
		$("#btn-magic_powder").addClass("disabled").prop("disabled", true);
		$(".btn-imm:not(#btn-overcoat)").addClass("disabled").prop("disabled", true);
	}

	// Prism Armor reduces the power of supereffective attacks taken
	if ($("#btn-prism_armor").hasClass("active")) {
		for (let i = 0; i < matchup_array.length; ++i) {
			if (matchup_array[i] > 1) matchup_array[i] *= .75;
		}

		$(".btn-imm:not(#btn-prism_armor)").addClass("disabled").prop("disabled", true);
	}

	/**
	 * RKS System changes the Pokémon's type to match the memory disc it holds
	 * Immunity to type changing abilities like Magic Powder or Soak
	 */
	if ($("#btn-rks_system").hasClass("active")) {
		$("#btn-magic_powder, #btn-soak").addClass("disabled").prop("disabled", true);
		$(".btn-imm:not(#btn-rks_system)").addClass("disabled").prop("disabled", true);
	}

	// Sap Sipper gives immunity to Grass type moves, +1 Atk
	if ($("#btn-sap_sipper").hasClass("active")) {
		matchup_array[9] = 0;
		$(".btn-imm:not(#btn-sap_sipper)").addClass("disabled").prop("disabled", true);
	}

	// Solid Rock reduces the power of supereffective attacks taken
	if ($("#btn-solid_rock").hasClass("active")) {
		for (let i = 0; i < matchup_array.length; ++i) {
			if (matchup_array[i] > 1) matchup_array[i] *= .75;
		}

		$(".btn-imm:not(#btn-solid_rock)").addClass("disabled").prop("disabled", true);
	}

	// Storm Drain gives immunity to Water type moves, +1 SpA
	if ($("#btn-storm_drain").hasClass("active")) {
		matchup_array[6] = 0;
		$(".btn-imm:not(#btn-storm_drain)").addClass("disabled").prop("disabled", true);
	}

	// Thick Fat halves damage done by Fire and Ice type moves
	if ($("#btn-thick_fat").hasClass("active")) {
		matchup_array[11] /= 2;
		matchup_array[13] /= 2;
		$(".btn-imm:not(#btn-thick_fat)").addClass("disabled").prop("disabled", true);
	}

	// Volt Absorb restores .25 HP from Electric type moves
	if ($("#btn-volt_absorb").hasClass("active")) {
		matchup_array[7] = 0;
		$(".btn-imm:not(#btn-volt_absorb)").addClass("disabled").prop("disabled", true);
	}

	// Water Absorb restores .25 HP from Water type moves
	if ($("#btn-water_absorb").hasClass("active")) {
		matchup_array[6] = 0;
		$(".btn-imm:not(#btn-water_absorb)").addClass("disabled").prop("disabled", true);
	}

	/**
	 * TYPE CHANGING ABILITIES
	 */

	// Burn Up removes Fire type (must already be a Fire type)
	if ($("#btn-burn_up").hasClass("active")) {
		for (let x of [5, 9, 11, 13, 15, 17]) matchup_array[x] *= 2;
		for (let x of [2, 6, 8]) matchup_array[x] /= 2;
	}

	// Forest's Curse adds Grass type, removes any effect from Trick-or-Treat (Grass types are immune)
	if ($("#btn-forests_curse").hasClass("active")) {
		for (let x of [2, 6, 7, 9]) matchup_array[x] /= 2;
		for (let x of [3, 4, 5, 11, 13]) matchup_array[x] *= 2;

		// remove effects from Trick-or-Treat
		if ($("#btn-trick-or-treat").hasClass("active")) {
			for (let x of [4, 5]) matchup_array[x] *= 2;
			for (let x of [1, 10]) matchup_array[x] /= 2;
		}
	}

	/**
	 * Gravity removes Flying type
	 */
	if ($("#btn-gravity").hasClass("active")) {
		if ($("#btn-flying1").hasClass("active") || $("#btn-flying2").hasClass("active")) {
			for (let x of [5, 9, 14]) matchup_array[x] *= 2;
			for (let x of [7, 8, 11]) matchup_array[x] /= 2;

			// add weakness for Ground type if existent
			matchup_array[2] = 1;
			for (let x = 1; x <= 2; ++x) {
				for (let y of [4, 7, 8, 13, 15])
					if ($("#btn-" + types[y][0].toLowerCase() + x).hasClass("active")) matchup_array[2] *= 2;
				for (let y of [5, 9])
					if ($("#btn-" + types[y][0].toLowerCase() + x).hasClass("active")) matchup_array[2] /= 2;
			}

			if ($("#btn-nil2").hasClass("active") || $("#btn-burn_up").hasClass("active")) {
				for (let x of [14]) matchup_array[x] *= 2;
				for (let x of [1]) matchup_array[x] = 0;

				// remove Ground type weakness if Fire type is removed from Burn Up
				if ($("#btn-burn_up").hasClass("active")) matchup_array[2] /= 2;
			}
		}
	}

	// Magic Powder changes target to pure Psychic type (Grass & pure Psychic types are immune)
	if ($("#btn-magic_powder").hasClass("active")) {
		for (let x of [14, 16]) matchup_array[x] /= 2;
		for (let x of [1, 5, 10]) matchup_array[x] *= 2;
	}

	/**
	 * Roost removes Flying type
	 * Normal type will be added if Flying type is the only type, regardless of being afflicted by 
	 * Forest's Curse or Magic Powder
	 */
	if ($("#btn-roost").hasClass("active")) {
		for (let x of [5, 9, 14]) matchup_array[x] *= 2;
		for (let x of [7, 8, 11]) matchup_array[x] /= 2;

		// add weakness for Ground type if existent
		matchup_array[2] = 1;
		for (let x = 1; x <= 2; ++x) {
			for (let y of [4, 7, 8, 13, 15])
				if ($("#btn-" + types[y][0].toLowerCase() + x).hasClass("active")) matchup_array[2] *= 2;
			for (let y of [5, 9])
				if ($("#btn-" + types[y][0].toLowerCase() + x).hasClass("active")) matchup_array[2] /= 2;
		}

		/**
		 * Only Flying type is guaranteed if there is no secondary type, or a different ability that 
		 * removed the other typing is inflicted (e.g. Burn Up)
		 */
		if ($("#btn-nil2").hasClass("active") || $("#btn-burn_up").hasClass("active")) {
			for (let x of [14]) matchup_array[x] *= 2;
			for (let x of [1]) matchup_array[x] = 0;

			// remove Ground type weakness if Fire type is removed from Burn Up
			if ($("#btn-burn_up").hasClass("active")) matchup_array[2] /= 2;
		}
	}

	// Soak changes target to pure Water type, won't do any changes to a pure Water type
	if ($("#btn-soak").hasClass("active")) {
		for (let x of [6, 11, 13, 15]) matchup_array[x] /= 2;
		for (let x of [7, 9]) matchup_array[x] *= 2;
	}

	//Trick-or-Treat adds the Ghost type, removes any effect from Forest's Curse (Ghost types are immune)
	if ($("#btn-trick-or-treat").hasClass("active")) {
		for (let x of [4, 5]) matchup_array[x] /= 2;
		for (let x of [1, 10]) matchup_array[x] *= 2;
		for (let x of [12, 14]) matchup_array[x] = 0;

		// remove effects from Forest's Curse
		if ($("#btn-forests_curse").hasClass("active")) {
			for (let x of [2, 6, 7, 9]) matchup_array[x] *= 2;
			for (let x of [3, 4, 5, 11, 13]) matchup_array[x] /= 2;

			// add weakness for Fighting type if existent
			matchup_array[14] = 1;
			for (let x = 1; x <= 2; ++x) {
				for (let y of [8, 10, 11, 12, 15])
					if ($("#btn-" + types[y][0].toLowerCase() + x).hasClass("active")) matchup_array[14] *= 2;
				for (let y of [3, 4, 5, 16, 17])
					if ($("#btn-" + types[y][0].toLowerCase() + x).hasClass("active")) matchup_array[14] /= 2;
			}

			// add resistance for Normal type if any
			matchup_array[12] = 1;
			for (let x = 1; x <= 2; ++x) {
				for (let y of [8, 15])
					if ($("#btn-" + types[y][0].toLowerCase() + x).hasClass("active")) matchup_array[12] /= 2;
			}
		}
	}

	return matchup_array;
}

/**
 * Display type matchups
 */
function typeResults() {
	// resets all matchup windows
	$("#super-effect, #normal-effect, #less-effect, #immune-effect").find(".icon-space").remove();

	/* prep up abilities if applicable, unless Magic Powder or Soak is active */

	if ($("#btn-magic_powder").hasClass("active") || $("#btn-soak").hasClass("active")) {
		$("#btn-burn_up, #btn-roost").addClass("disabled").removeClass("active").prop("disabled", true);
	} else {
		// Burn Up only works on Fire types
		if ($("#btn-fire1").hasClass("active") || $("#btn-fire2").hasClass("active")) {
			$("#btn-burn_up").removeClass("disabled").prop("disabled", false);
		} else {
			$("#btn-burn_up").addClass("disabled").removeClass("active").prop("disabled", true);
		}

		// Roost only works on Flying types
		if ($("#btn-flying1").hasClass("active") || $("#btn-flying2").hasClass("active")) {
			$("#btn-roost").removeClass("disabled").prop("disabled", false);
		} else {
			$("#btn-roost").addClass("disabled").removeClass("active").prop("disabled", true);
		}
	}

	let results = [];
	for (let i = 0; i < types.length; ++i) results[i] = 1;

	// check first type
	$(".btn-pkmn1").each(function (index) {
		if ($(this).hasClass("active")) for (let i = 0; i < types.length; ++i) results[i] *= types[index][types.length - 1][i];
	});

	// check second type
	if ($(".btn-pkmn2.active").attr("id") != "btn-nil2") {
		$(".btn-pkmn2").each(function (index) {
			if ($(this).hasClass("active")) for (let i = 0; i < types.length; ++i) results[i] *= types[index - 1][types.length - 1][i];
		});
	}

	// check for ability effects
	results = abilityCheck(results);

	// console.log("Results", results);

	// display type matchups
	for (let t = 0; t < types.length; ++t) {
		if (results[t] > 2) {	// >2x more effective moves
			// if effectiveness is not an integer value, set it to 2 d.p.
			if (parseFloat(results[t]) != parseInt(results[t])) $effectiveness_append = parseFloat(results[t]).toFixed(2);
			else $effectiveness_append = parseInt(results[t]);
			// console.log(types[t][0].toLowerCase(), results[t]);

			$("#super-effect").append(`
				<div class="icon-space super-high-effect">
					<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
						<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
					</div>
					<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
					
					<!--
					<div class="${types[t][0].toLowerCase()}-caption">
						${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
						<span class="badge badge-pill badge-danger">4&#215;</span>
					</div>-->
					<span class="type-desc type-eng">${types[t][0].toUpperCase()}</span>
					<span class="type-desc type-jpn chineseFont">${types[t][1]}</span>
					<span class="type-desc type-chs chineseFont">${types[t][2]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][3]}</span>
					<br>
					<span class="badge badge-pill badge-danger" style="font-size: 15px;">${$effectiveness_append}&#215;</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		} else if (results[t] > 0 && results[t] < 0.5) {	// >2x less effective moves
			$("#less-effect").append(`
				<div class="icon-space super-low-effect">
					<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
						<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
					</div>
					<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
					
					<!--
					<div class="${types[t][0].toLowerCase()}-caption">
						${types[t][0].toUpperCase()}
						<br><span class="chineseFont">${types[t][1]}</span>
					</div>-->
					<span class="type-desc type-eng">${types[t][0].toUpperCase()}</span>
					<span class="type-desc type-jpn chineseFont">${types[t][1]}</span>
					<span class="type-desc type-chs chineseFont">${types[t][2]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][3]}</span>
					<br>
					<span class="badge badge-pill badge-info" style="font-size: 15px;">${parseFloat(results[t]).toFixed(2)}&#215;</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		}
	}

	for (let t = 0; t < types.length; ++t) {
		if (results[t] == 2) {				// 2x more effective to
			$("#super-effect").append(`
				<div class="icon-space">
					<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
						<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
					</div>
					<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
					
					<!--
					<div class="${types[t][0].toLowerCase()}-caption">
						${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
					</div>-->
					<span class="type-desc type-eng">${types[t][0].toUpperCase()}</span>
					<span class="type-desc type-jpn chineseFont">${types[t][1]}</span>
					<span class="type-desc type-chs chineseFont">${types[t][2]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][3]}</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		} else if (results[t] > 1 && results[t] < 2) {	// ~1-2x effective moves
			$("#super-effect").append(`
				<div class="icon-space">
					<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
						<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
					</div>
					<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
					
					<!--
					<div class="${types[t][0].toLowerCase()}-caption">
						${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
					</div>-->
					<span class="type-desc type-eng">${types[t][0].toUpperCase()}</span>
					<span class="type-desc type-jpn chineseFont">${types[t][1]}</span>
					<span class="type-desc type-chs chineseFont">${types[t][2]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][3]}</span>
					<br>
					<span class="badge badge-pill badge-danger" style="font-size: 15px;">${parseFloat(results[t]).toFixed(2)}&#215;</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		} else if (results[t] == 1) {		// regular effectiveness
			$("#normal-effect").append(`
				<div class="icon-space">
					<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
						<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
					</div>
					<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
					
					<!--
					<div class="${types[t][0].toLowerCase()}-caption">
						${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
					</div>-->
					<span class="type-desc type-eng">${types[t][0].toUpperCase()}</span>
					<span class="type-desc type-jpn chineseFont">${types[t][1]}</span>
					<span class="type-desc type-chs chineseFont">${types[t][2]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][3]}</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		} else if (results[t] == 0.5) {		// 2x less effective
			$("#less-effect").append(`
				<div class="icon-space">
					<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
						<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
					</div>
					<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
					
					<!--
					<div class="${types[t][0].toLowerCase()}-caption">
						${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
					</div>-->
					<span class="type-desc type-eng">${types[t][0].toUpperCase()}</span>
					<span class="type-desc type-jpn chineseFont">${types[t][1]}</span>
					<span class="type-desc type-chs chineseFont">${types[t][2]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][3]}</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		} else if (results[t] == 0) {		// type immunity
			$("#immune-effect").append(`
				<div class="icon-space">
					<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
						<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
					</div>
					<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
					
					<!--
					<div class="${types[t][0].toLowerCase()}-caption">
						${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
					</div>-->
					<span class="type-desc type-eng">${types[t][0].toUpperCase()}</span>
					<span class="type-desc type-jpn chineseFont">${types[t][1]}</span>
					<span class="type-desc type-chs chineseFont">${types[t][2]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][3]}</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		}
	}

	for (let i = 0; i < types.length; ++i) {
		if ($("#language-selection").find("button")[i].classList.contains("active")) {
			languageChange(i);
			break;
		}
	}
}

/**
 * "BRAND-SPANKING NEW" language changing feature
 * Current languages available: English, 日本, Chinese (Simplified), Chinese (Traditiional)
 * 
 * @param {*} type_language 
 */
function languageChange(type_language) {
	$("#language-selection").find("button").removeClass("active");
	$("#language-selection").find("button:nth-child(" + (type_language + 1) + ")").addClass("active");
	$(".type-desc").hide();

	switch (type_language) {
		case 0: $(".type-eng").show(); break;
		case 1: $(".type-jpn").show(); break;
		case 2: $(".type-chs").show(); break;
		case 3: $(".type-cht").show(); break;
		case 4: $(".type-bm").show(); break;
		default:
	}
}

/**
 * This loads by default
 */
$(window).on("load", () => {
	selectListing();
	languageButtons();
	reset();
	languageChange(0);
});

