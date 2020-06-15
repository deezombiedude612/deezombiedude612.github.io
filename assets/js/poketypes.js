// [type_eng, type_jp]
let types = [
	["Dragon", "ドラゴン"],
	["Ghost", "ゴースト"],
	["Ground", "じめん"],
	["Flying", "ひこう"],
	["Poison", "どく"],
	["Bug", "むし"],
	["Water", "みず"],
	["Electric", "でんき"],
	["Rock", "いわ"],
	["Grass", "くさ"],
	["Dark", "あく"],
	["Ice", "こおり"],
	["Normal", "ノーマル"],
	["Fire", "ほのお"],
	["Fighting", "かくとう"],
	["Steel", "はがね"],
	["Psychic", "エスパー"],
	["Fairy", "フェアリー"]
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
		$("#type-1").append(`<button class="btn btn-sm btn-pkmn1" id="btn-${type[0].toLowerCase()}1" onclick="click1('${type[0].toLowerCase()}')">${type[0].toUpperCase()} <span class="chineseFont">${type[1]}</span></button>`);
		$("#type-2").append(`<button class="btn btn-sm btn-pkmn2" id="btn-${type[0].toLowerCase()}2" onclick="click2('${type[0].toLowerCase()}')">${type[0].toUpperCase()} <span class="chineseFont">${type[1]}</button>`);
	}
}

function click1(clicked_type) {
	$(".btn-pkmn1").removeClass("active");
	$("#btn-" + clicked_type + "1").addClass("active");

	$(".btn-pkmn2").removeClass("disabled").prop("disabled", false);
	if ($("#btn-" + clicked_type + "2").hasClass("active")) click2('nil');

	$("#btn-" + clicked_type + "2").addClass("disabled").prop("disabled", true);

	typeResults();
	pokedex_list();
}

function click2(clicked_type) {
	$(".btn-pkmn2").removeClass("active");
	$("#btn-" + clicked_type + "2").addClass("active");

	typeResults();
	pokedex_list();
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
		switch (results[t]) {
			case 4:
				$("#super-effect").append(`
					<div class="icon-space super-high-effect">
						<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
							<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
						</div>
						<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
						
						<div class="${types[t][0].toLowerCase()}-caption">
							${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
						</div>
					</div>
					<!-- /div.icon-space -->
					`
				);
				break;

			case 2:
				$("#super-effect").append(`
					<div class="icon-space">
						<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
							<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
						</div>
						<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
						
						<div class="${types[t][0].toLowerCase()}-caption">
							${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
						</div>
					</div>
					<!-- /div.icon-space -->
					`
				);
				break;

			case 1:
				$("#normal-effect").append(`
					<div class="icon-space">
						<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
							<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
						</div>
						<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
						
						<div class="${types[t][0].toLowerCase()}-caption">
							${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
						</div>
					</div>
					<!-- /div.icon-space -->
					`
				);
				break;

			case 0.5:
				$("#less-effect").append(`
					<div class="icon-space">
						<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
							<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
						</div>
						<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
						
						<div class="${types[t][0].toLowerCase()}-caption">
							${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
						</div>
					</div>
					<!-- /div.icon-space -->
					`
				);
				break;

			case 0.25:
				$("#less-effect").append(`
					<div class="icon-space super-low-effect">
						<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
							<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
						</div>
						<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
						
						<div class="${types[t][0].toLowerCase()}-caption">
							${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
						</div>
					</div>
					<!-- /div.icon-space -->
					`
				);
				break;

			case 0:
				$("#immune-effect").append(`
					<div class="icon-space">
						<div class="poke-icon poke-i-${types[t][0].toLowerCase()}">
							<img src="../assets/svg/${types[t][0].toLowerCase()}.svg" alt="icon-${types[t][0].toLowerCase()}">
						</div>
						<!-- /div.poke-icon.poke-i-${types[t][0].toLowerCase()} -->
						
						<div class="${types[t][0].toLowerCase()}-caption">
							${types[t][0].toUpperCase()}<br><span class="chineseFont">${types[t][1]}</span>
						</div>
					</div>
					<!-- /div.icon-space -->
					`
				);
				break;

			default:
		}
	}
}

// const variants = ["alola_variant", "galar_variant"];

// function index_padding(index) {
// 	let s = "000" + index;
// 	return s.substr(s.length - 4);
// }

// function titleCase(inputString) {
// 	let splitStr = inputString.toLowerCase().split(' ');
// 	for (let i = 0; i < splitStr.length; ++i) splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

// 	return splitStr.join(' ');
// }

// function print_pureType(p_entry, index, type_name) {
// 	let append = " ";
// 	let append_jp = "";
// 	if (type_name != "default") {
// 		append = type_name;
// 		append = append.replace('_', ' ');	// remove underscores
// 		append = " [" + titleCase(append);
// 	}
// 	if (p_entry.hasOwnProperty("jp_desc")) {
// 		jpd = [];
// 		for (let tn in p_entry.jp_desc) {
// 			if (type_name == tn) jpd = [...jpd, tn];
// 		}
// 		for (let i = 0; i < jpd.length; ++i) {
// 			if (jpd[i] == type_name) append_jp = p_entry.jp_desc[jpd[i]];
// 		}
// 	}
// 	let append2 = "";
// 	if (append_jp != "") append2 = "]";

// 	$("#pure-type").append(`
// 		<div class="row">
// 			<div class="col-md-10">
// 				<span style="font-weight: 500;">${index_padding(index)}</span> ${append} <span class="chineseFont">${append_jp}</span>${append2}<br>
// 				${p_entry.name} <span class="chineseFont">${p_entry.jp_name}</span>
// 			</div>
// 			<!-- /div.col-md-10 -->
// 			<div class="col-md-2" style="min-width: 12px;">
// 				<div class="small-poke-icon small-${types[p_entry.type[type_name][0]][0].toLowerCase()}" style="width: 30px; height: 30px;">
// 					<img src="../assets/svg/${types[p_entry.type[type_name][0]][0].toLowerCase()}.svg" alt="icon-${types[p_entry.type[type_name][0]][0].toLowerCase()}">
// 				</div>
// 			</div>
// 			<!-- /div.col-md-2.d-flex.flex-row.flex-wrap -->
// 		</div>
// 		<!-- /div.row -->
// 		<hr>
// 		`
// 	);
// }
// function print_pureAlola(p_entry, index) {
// 	$("#pure-type").append(`
// 		<div class="row">
// 			<div class="col-10">
// 				<span style="font-weight: 500;">${index_padding(index)}</span> [ALOLA <span class="chineseFont">アローラ</span>]<br>
// 				${p_entry.name} <span class="chineseFont">${p_entry.jp_name}</span>
// 			</div>
// 			<!-- /div.col-10 -->
// 			<div class="col-2" style="min-width: 30px;">
// 				<div class="small-poke-icon small-${types[p_entry.type.alola_variant[0]][0].toLowerCase()}">
// 					<img src="../assets/svg/${types[p_entry.type.alola_variant[0]][0].toLowerCase()}.svg" alt="icon-${types[p_entry.type.alola_variant[0]][0].toLowerCase()}">
// 				</div>
// 				<!-- /div.col-2.d-flex.flex-row.flex-wrap -->
// 			</div>
// 			<!-- /div.col-2.d-flex.flex-row.flex-wrap -->
// 		</div>
// 		<!-- /div.row -->
// 		<hr>`
// 	);
// }
// function print_pureGalar(p_entry, index) {
// 	$("#pure-type").append(`
// 		<div class="row">
// 			<div class="col-10">
// 				<span style="font-weight: bold;">${index_padding(index)}</span> [GALAR <span class="chineseFont">ガラル</span>]<br>
// 				${p_entry.name} <span class="chineseFont">${p_entry.jp_name}</span>
// 			</div>
// 			<!-- /div.col-10 -->
// 			<div class="col-2 d-flex flex-row flex-wrap">
// 				<div class="small-poke-icon small-${types[p_entry.type.galar_variant[0]][0].toLowerCase()}">
// 					<img src="../assets/svg/${types[p_entry.type.galar_variant[0]][0].toLowerCase()}.svg" alt="icon-${types[p_entry.type.galar_variant[0]][0].toLowerCase()}">
// 				</div>
// 				<!-- /div.col-2.d-flex.flex-row.flex-wrap -->
// 			</div>
// 			<!-- /div.col-2.d-flex.flex-row.flex-wrap -->
// 		</div>
// 		<!-- /div.row -->
// 		<hr>`
// 	);
// }
// function print_pureGalar2(p_entry, index, type_name) {
// 	let append = " ";
// 	let append_jp = "";
// 	if (type_name != "default") {
// 		append = type_name;
// 		append = append.replace('_', ' ');	// remove underscores
// 		append = " [" + titleCase(append);
// 	}
// 	if (p_entry.hasOwnProperty("jp_desc")) {
// 		jpd = [];
// 		for (let tn in p_entry.jp_desc) {
// 			if (type_name == tn) jpd = [...jpd, tn];
// 		}
// 		for (let i = 0; i < jpd.length; ++i) {
// 			if (jpd[i] == type_name) append_jp = p_entry.jp_desc[jpd[i]];
// 		}
// 	}
// 	let append2 = "";
// 	if (append_jp != "") append2 = "]";

// 	$("#pure-type").append(`
// 		<div class="row">
// 			<div class="col-10">
// 				<span style="font-weight: 500;">${index_padding(index)}</span> ${append} <span class="chineseFont">${append_jp}</span>${append2}<br>
// 				${p_entry.name} <span class="chineseFont">${p_entry.jp_name}</span>
// 			</div>
// 			<!-- /div.col-10 -->
// 			<div class="col-2 d-flex flex-row flex-wrap">
// 				<div class="small-poke-icon small-${types[p_entry.type[type_name][0]][0].toLowerCase()}">
// 					<img src="../assets/svg/${types[p_entry.type[type_name][0]][0].toLowerCase()}.svg" alt="icon-${types[p_entry.type[type_name][0]][0].toLowerCase()}">
// 				</div>
// 			</div>
// 			<!-- /div.col-2.d-flex.flex-row.flex-wrap -->
// 		</div>
// 		<!-- /div.row -->
// 		<hr>
// 		`
// 	);
// }
// function print_pureMega(p_entry, index) {
// 	$("#pure-type").append(`
// 		<div class="row">
// 			<div class="col-10">
// 				<span style="font-weight: 500;">${index_padding(index)}</span> [MEGA <span class="chineseFont">メガ</span>]<br>
// 				${p_entry.name} <span class="chineseFont">${p_entry.jp_name}</span>
// 			</div>
// 			<!-- /div.col-10 -->
// 			<div class="col-2 d-flex flex-row flex-wrap">
// 				<div class="small-poke-icon small-${types[p_entry.mega.default.type[0]][0].toLowerCase()}">
// 					<img src="../assets/svg/${types[p_entry.mega.default.type[0]][0].toLowerCase()}.svg" alt="icon-${types[p_entry.mega.default.type[0]][0].toLowerCase()}">
// 				</div>
// 				<!-- /div.col-2.d-flex.flex-row.flex-wrap -->
// 			</div>
// 			<!-- /div.col-2.d-flex.flex-row.flex-wrap -->
// 		</div>
// 		<!-- /div.row -->
// 		<hr>
// 		`
// 	);
// }
// function print_pureMegaX(p_entry, index) {
// 	$("#pure-type").append(
// 		`<span class="pokedex-index" style="line-height: 2rem;">${index_padding(index)}</span>
// 		<span>MEGA ${p_entry.name} X<br><span class="chineseFont">メガ${p_entry.jp_name}X</span></span>
// 		<hr>`
// 	);
// }
// function print_pureMegaY(p_entry, index) {
// 	$("#pure-type").append(
// 		`<span class="pokedex-index" style="line-height: 2rem;">${index_padding(index)}</span>
// 		<span>MEGA ${p_entry.name} Y<br><span class="chineseFont">メガ${p_entry.jp_name}Y</span></span>
// 		<hr>`
// 	);
// }

// function print_dualType(p_entry, index, type_name) {
// 	let append = " ";
// 	let append_jp = "";
// 	if (type_name != "default") {
// 		append = type_name;
// 		append = append.replace('_', ' ');	// remove underscores
// 		append = " (" + titleCase(append) + ")<br>";

// 		if (p_entry.hasOwnProperty("jp_desc")) {
// 			jpd = [];
// 			for (let tn in p_entry.jp_desc) {
// 				if (type_name == tn) jpd = [...jpd, tn];
// 			}
// 			for (let i = 0; i < jpd.length; ++i) {
// 				if (jpd[i] == type_name) append_jp = "<br>（" + p_entry.jp_desc[jpd[i]] + "）";
// 			}
// 		}
// 	}

// 	$("#pokedex_list").append(
// 		`<span class="pokedex-index">${index_padding(index)}</span>
// 		<span>${p_entry.name}${append}<span class="chineseFont">${p_entry.jp_name}${append_jp}</span></span>
// 		<hr>`
// 	);
// }
// function print_dualAlola(p_entry, index) {
// 	$("#pokedex_list").append(
// 		`<span class="pokedex-index">${index_padding(index)} [ALOLA <span class="chineseFont">アローラ</span>]</span>
// 		<span>${p_entry.name} <span class="chineseFont">${p_entry.jp_name}</span></span>
// 		<hr>`
// 	);
// }
// function print_dualGalar(p_entry, index) {
// 	$("#pokedex_list").append(
// 		`<span class="pokedex-index">${index_padding(index)} [GALAR <span class="chineseFont">ガラル</span>]</span>
// 		<span>${p_entry.name} <span class="chineseFont">${p_entry.jp_name}</span></span>
// 		<hr>`
// 	);
// }
// function print_dualGalar2(p_entry, index, type_name) {
// 	let append = " ";
// 	let append_jp = "";
// 	if (type_name != "default") {
// 		append = type_name;
// 		append = append.replace('_', ' ');	// remove underscores
// 		append = " (" + titleCase(append) + ")<br>";
// 	}
// 	if (p_entry.hasOwnProperty("jp_desc")) {
// 		jpd = [];
// 		for (let tn in p_entry.jp_desc) {
// 			if (type_name == tn) jpd = [...jpd, tn];
// 		}
// 		for (let i = 0; i < jpd.length; ++i) {
// 			if (jpd[i] == type_name) append_jp = "<br>（" + p_entry.jp_desc[jpd[i]] + "）";
// 		}
// 	}

// 	$("#pokedex_list").append(
// 		`<span class="pokedex-index">${index_padding(index)} [GALAR <span class="chineseFont">ガラル</span>]</span>
// 		<span>${p_entry.name}${append}<span class="chineseFont">${p_entry.jp_name}${append_jp}</span></span>
// 		<hr>`
// 	);
// }
// function print_dualMega(p_entry, index) {
// 	$("#pokedex_list").append(
// 		`<span class="pokedex-index">${index_padding(index)}</span>
// 		<span>MEGA ${p_entry.name}<br><span class="chineseFont">メガ${p_entry.jp_name}</span></span>
// 		<hr>`
// 	);
// }
// function print_dualMegaX(p_entry, index) {
// 	$("#pokedex_list").append(
// 		`<span class="pokedex-index">${index_padding(index)}</span>
// 		<span>MEGA ${p_entry.name} X<br><span class="chineseFont">メガ${p_entry.jp_name}X</span></span>
// 		<hr>`
// 	);
// }
// function print_dualMegaY(p_entry, index) {
// 	$("#pokedex_list").append(
// 		`<span class="pokedex-index">${index_padding(index)}</span>
// 		<span>MEGA ${p_entry.name} Y<br><span class="chineseFont">メガ${p_entry.jp_name}Y</span></span>
// 		<hr>`
// 	);
// }

// function pokedex_list() {
// 	$("#pokedex-list").find("div").remove();

// 	/* prepare layout */
// 	if ($("#btn-nil2").hasClass("active")) {
// 		$("#pokedex-list").append(`
// 			<div class="col-xl-4">
// 				<div class="card bg-transparent" id="pure-type">
// 					<h4>Pure Typing</h4>
// 				</div>
// 				<!-- /div#pure-type -->
// 			</div>
// 			<!-- /div.col-xl-4 -->

// 			<div class="col-xl-4">
// 				<div class="card bg-transparent" id="primary-type">
// 					<h4>Primary Typing</h4>
// 				</div>
// 				<!-- /div#primary-type -->
// 			</div>
// 			<!-- /div.col-xl-4 -->

// 			<div class="col-xl-4">
// 				<div class="card bg-transparent" id="secondary-type">
// 					<h4>Secondary Typing</h4>
// 				</div>
// 				<!-- /div#secondary-type -->
// 			</div>
// 			<!-- /div.col-xl-4 -->
// 			`
// 		);
// 	} else {
// 		$("#pokedex-list").append(`
// 			<div class="col-lg-4 offset-lg-2">
// 				<div class="card bg-transparent" id="primary-type">
// 					<h4>Primary Typing</h4>
// 				</div>
// 				<!-- /div#primary-type -->
// 			</div>
// 			<!-- /div.col-lg-4.offset-lg-2 -->

// 			<div class="col-lg-4">
// 				<div class="card bg-transparent" id="secondary-type">
// 					<h4>Secondary Typing</h4>
// 				</div>
// 				<!-- /div#secondary-type -->
// 			</div>
// 			<!-- /div.col-lg-4 -->
// 			`
// 		);
// 	}

// 	let index = 1;

// 	/* pure typing */
// 	if ($("#btn-nil2").hasClass("active")) {
// 		$("#pokedex_list").append(`<h4>Pure Typing</h4>`);

// 		for (let p of pokedex) {
// 			let type_names = [];
// 			for (let tn in p.type) type_names = [...type_names, tn];

// 			let jp_desc = [];
// 			for (let jd in p.jp_desc) jp_desc = [...jp_desc, jd];

// 			for (let t of type_names) {
// 				if (p.type[t][1] < 0
// 					&& $("#btn-" + types[p.type[t][0]][0].toLowerCase() + "1").hasClass("active")
// 					&& !([...variants].includes(t))
// 				) {
// 					if (t.substr(0, 5) == "galar" && t.substr(6) != "variant") print_pureGalar2(p, index, t.substr(6));
// 					else print_pureType(p, index, t);
// 				}
// 			}

// 			if (p.type.hasOwnProperty("alola_variant"))
// 				if (p.type.alola_variant[1] < 0 && $("#btn-" + types[p.type.alola_variant[0]][0].toLowerCase() + "1").hasClass("active")) { print_pureAlola(p, index); }

// 			if (p.type.hasOwnProperty("galar_variant"))
// 				if (p.type.galar_variant[1] < 0 && $("#btn-" + types[p.type.galar_variant[0]][0].toLowerCase() + "1").hasClass("active")) { print_pureGalar(p, index); }

// 			if (p.mega != false) {
// 				if (p.mega.hasOwnProperty("x") && p.mega.hasOwnProperty("y")) {
// 					// Mega X
// 					if (p.mega.x.type[1] < 0
// 						&& $("#btn-" + types[p.mega.x.type[0]][0].toLowerCase() + "1").hasClass("active")
// 					) { print_pureMegaX(p, index); }

// 					// Mega Y
// 					if (p.mega.y.type[1] < 0
// 						&& $("#btn-" + types[p.mega.y.type[0]][0].toLowerCase() + "1").hasClass("active")
// 					) { print_pureMegaY(p, index); }
// 				} else {
// 					// Mega (regular)
// 					if (p.mega.default.type[1] < 0
// 						&& $("#btn-" + types[p.mega.default.type[0]][0].toLowerCase() + "1").hasClass("active")
// 					) { print_pureMega(p, index); }
// 				}
// 			}

// 			++index;
// 		}

// 		index = 1;
// 	}
// }

$(window).on("load", () => {
	selectListing();
	reset();
});

