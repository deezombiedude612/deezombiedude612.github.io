// [type_eng, type_jpn, type_chs, type_cht, type_bm]
let types = [
	["Dragon", "ドラゴン", [], "龙", "龍"],
	["Ghost", "ゴースト", [], "幽灵", "幽靈"],
	["Ground", "じめん", [], "地面", "地面"],
	["Flying", "ひこう", [], "飞行", "飛行"],
	["Poison", "どく", [], "毒", "毒"],
	["Bug", "むし", [], "虫", "蟲"],
	["Water", "みず", [], "水", "水"],
	["Electric", "でんき", [], "电", "電"],
	["Rock", "いわ", [], "岩石", "岩石"],
	["Grass", "くさ", [], "草", "草"],
	["Dark", "あく", [], "恶", "惡"],
	["Ice", "こおり", [], "冰", "冰"],
	["Normal", "ノーマル", [], "一般", "一般"],
	["Fire", "ほのお", [], "火", "火"],
	["Fighting", "かくとう", [], "格斗", "格鬥"],
	["Steel", "はがね", [], "钢", "鋼"],
	["Psychic", "エスパー", [], "超能力", "超能力"],
	["Fairy", "フェアリー", [], "妖精", "妖精"]
];

for (let i = 0; i < types.length; ++i) {
	types[i][2] = [];
	for (let j = 0; j < types.length; ++j) types[i][2][j] = 1;
}

// effectiveness against Dragon types [0]
for (let x of [6, 7, 9, 13]) types[0][2][x] /= 2;
for (let x of [0, 11, 17]) types[0][2][x] *= 2;

// effectiveness against Ghost types [1]
for (let x of [4, 5]) types[1][2][x] /= 2;
for (let x of [1, 10]) types[1][2][x] *= 2;
for (let x of [12, 14]) types[1][2][x] = 0;

// effectiveness against Ground types [2]
for (let x of [4, 8]) types[2][2][x] /= 2;
for (let x of [6, 9, 11]) types[2][2][x] *= 2;
for (let x of [7]) types[2][2][x] = 0;

// effectiveness against Flying types [3]
for (let x of [5, 9, 14]) types[3][2][x] /= 2;
for (let x of [7, 8, 11]) types[3][2][x] *= 2;
for (let x of [2]) types[3][2][x] = 0;

// effectiveness against Poison types [4]
for (let x of [4, 5, 9, 14, 17]) types[4][2][x] /= 2;
for (let x of [2, 16]) types[4][2][x] *= 2;

// effectiveness against Bug types [5]
for (let x of [2, 9, 14]) types[5][2][x] /= 2;
for (let x of [3, 8, 13]) types[5][2][x] *= 2;

// effectiveness against Water types [6]
for (let x of [6, 11, 13, 15]) types[6][2][x] /= 2;
for (let x of [7, 9]) types[6][2][x] *= 2;

// effectiveness against Electric types [7]
for (let x of [3, 7, 15]) types[7][2][x] /= 2;
for (let x of [2]) types[7][2][x] *= 2;

// effectiveness against Rock types [8]
for (let x of [3, 4, 12, 13]) types[8][2][x] /= 2;
for (let x of [2, 6, 9, 14, 15]) types[8][2][x] *= 2;

// effectiveness against Grass types [9]
for (let x of [2, 6, 7, 9]) types[9][2][x] /= 2;
for (let x of [3, 4, 5, 11, 13]) types[9][2][x] *= 2;

// effectiveness against Dark types [10]
for (let x of [1, 10]) types[10][2][x] /= 2;
for (let x of [5, 14, 17]) types[10][2][x] *= 2;
for (let x of [16]) types[10][2][x] = 0;

// effectiveness against Ice types [11]
for (let x of [11]) types[11][2][x] /= 2;
for (let x of [8, 13, 14, 15]) types[11][2][x] *= 2;

// effectiveness against Normal types [12]
for (let x of [14]) types[12][2][x] *= 2;
for (let x of [1]) types[12][2][x] = 0;

// effectiveness against Fire types [13]
for (let x of [5, 9, 11, 13, 15, 17]) types[13][2][x] /= 2;
for (let x of [2, 6, 8]) types[13][2][x] *= 2;

// effectiveness against Fighting types [14]
for (let x of [5, 8, 10]) types[14][2][x] /= 2;
for (let x of [3, 16, 17]) types[14][2][x] *= 2;

// effectiveness against Steel types [15]
for (let x of [0, 3, 5, 8, 9, 11, 12, 15, 16, 17]) types[15][2][x] /= 2;
for (let x of [2, 13, 14]) types[15][2][x] *= 2;
for (let x of [4]) types[15][2][x] = 0;

// effectiveness against Psychic types [16]
for (let x of [14, 16]) types[16][2][x] /= 2;
for (let x of [1, 5, 10]) types[16][2][x] *= 2;

// effectiveness against Fairy types [17]
for (let x of [5, 10, 14]) types[17][2][x] /= 2;
for (let x of [4, 15]) types[17][2][x] *= 2;
for (let x of [0]) types[17][2][x] = 0;

function selectListing() {
	for (let type of types) {
		$("#type-1").append(
			`
			<button class="btn btn-sm btn-pkmn1" id="btn-${type[0].toLowerCase()}1" onclick="click1('${type[0].toLowerCase()}')">
				<image src="../assets/svg/${type[0].toLowerCase()}.svg" style="width: 15px; padding-top: -1rem; padding-bottom: .15rem;">&nbsp;
				<span class="type-desc type-eng">${type[0].toUpperCase()}</span>
				<span class="type-desc type-jpn chineseFont">${type[1]}</span>
				<span class="type-desc type-chs chineseFont">${type[3]}</span>
				<span class="type-desc type-cht chineseFont">${type[4]}</span>
			</button>
			`
		);
		$("#type-2").append(
			`
			<button class="btn btn-sm btn-pkmn2" id="btn-${type[0].toLowerCase()}2" onclick="click2('${type[0].toLowerCase()}')">
				<image src="../assets/svg/${type[0].toLowerCase()}.svg" style="width: 15px; padding-top: -1rem; padding-bottom: .15rem;">&nbsp;
				<span class="type-desc type-eng">${type[0].toUpperCase()}</span>
				<span class="type-desc type-jpn chineseFont">${type[1]}</span>
				<span class="type-desc type-chs chineseFont">${type[3]}</span>
				<span class="type-desc type-cht chineseFont">${type[4]}</span>
			</button>
			`
		);
	}
}

function click1(clicked_type) {
	$(".btn-pkmn1").removeClass("active");
	$("#btn-" + clicked_type + "1").addClass("active");

	$(".btn-pkmn2").removeClass("disabled").prop("disabled", false);
	if ($("#btn-" + clicked_type + "2").hasClass("active")) click2('nil');

	$("#btn-" + clicked_type + "2").addClass("disabled").prop("disabled", true);

	typeResults();
	// pokedex_list();
}

function click2(clicked_type) {
	$(".btn-pkmn2").removeClass("active");
	$("#btn-" + clicked_type + "2").addClass("active");

	typeResults();
	// pokedex_list();
}

function reset() {
	$(".btn-pkmn1, .btn-pkmn2").removeClass("active");

	click1('normal');
	click2('nil');
}

function typeResults() {
	$("#super-effect, #normal-effect, #less-effect, #immune-effect").find(".icon-space").remove();

	let results = [];
	for (let i = 0; i < types.length; ++i) results[i] = 1;

	$(".btn-pkmn1").each(function (index) {
		if ($(this).hasClass("active")) for (let i = 0; i < types.length; ++i) results[i] *= types[index][2][i];
	});

	if ($(".btn-pkmn2.active").attr("id") != "btn-nil2") {
		$(".btn-pkmn2").each(function (index) {
			if ($(this).hasClass("active")) for (let i = 0; i < types.length; ++i) results[i] *= types[index - 1][2][i];
		});
	}

	for (let t = 0; t < types.length; ++t) {
		if(results[t] == 4) {
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
					<span class="type-desc type-chs chineseFont">${types[t][3]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][4]}</span>
					<br>
					<span class="badge badge-pill badge-danger" style="font-size: 15px;">4&#215;</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		}  else if(results[t] == 0.25) {
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
					<span class="type-desc type-chs chineseFont">${types[t][3]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][4]}</span>
					<br>
					<span class="badge badge-pill badge-info" style="font-size: 15px;">0.25&#215;</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		}
	}

	for (let t = 0; t < types.length; ++t) {
		if(results[t] == 2) {
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
					<span class="type-desc type-chs chineseFont">${types[t][3]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][4]}</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		} else if(results[t] == 1) {
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
					<span class="type-desc type-chs chineseFont">${types[t][3]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][4]}</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		} else if(results[t] == 0.5) {
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
					<span class="type-desc type-chs chineseFont">${types[t][3]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][4]}</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		} else if(results[t] == 0) {
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
					<span class="type-desc type-chs chineseFont">${types[t][3]}</span>
					<span class="type-desc type-cht chineseFont">${types[t][4]}</span>
				</div>
				<!-- /div.icon-space -->
				`
			);
		}
	}

	for(let i = 0; i < types.length; ++i) {
		if($("#language-selection").find("button")[i].classList.contains("active")) {
			if(i < 2) languageChange(i);
			else languageChange(i + 1);
			break;
		}
	}
}

function languageChange(type_language) {
	$("#language-selection").find("button").removeClass("active");
	if(type_language < 2) $("#language-selection").find("button:nth-child(" + (type_language + 1) + ")").addClass("active");
	else if(type_language > 2) $("#language-selection").find("button:nth-child(" + (type_language) + ")").addClass("active");
	$(".type-desc").hide();

	switch(type_language) {
		case 0: $(".type-eng").show(); break;
		case 1: $(".type-jpn").show(); break;
		// case 2 does not exist, space 2 contains array of type effectiveness
		case 3: $(".type-chs").show(); break;
		case 4: $(".type-cht").show(); break;
		case 5: $(".type-bm").show(); break;
		default:
	}
}

$(window).on("load", () => {
	selectListing();
	reset();
	$(".type-desc").hide();
	$(".type-eng").show();
});

