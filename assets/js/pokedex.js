const pokedex = [
	{
		id: 1,
		name: "Bulbasaur",
		jp_name: "フシギダネ",
		desc: {
			"default": "Seed Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 2,
		name: "Ivysaur",
		jp_name: "フシギソウ",
		desc: {
			"default": "Seed Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 3,
		name: "Venusaur",
		jp_name: "フシギバナ",
		desc: {
			"default": "Seed Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: {
			default: {
				type: [9, 4],
			},
		}, 
		g_max: {
			default: {
				g_max_move: "G-Max Vine Lash",
				g_max_type: 9,
			}
		}, 
	}, 
	{
		id: 4,
		name: "Charmander",
		jp_name: "ヒトカゲ",
		desc: {
			"default": "Lizard Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 5,
		name: "Charmeleon",
		jp_name: "リザード",
		desc: {
			"default": "Flame Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 6,
		name: "Charizard",
		jp_name: "リザードン",
		desc: {
			"default": "Flame Pokémon",
		}, 
		type: {
			"default": [13, 3],
		}, 
		mega: {
			"x": {
				type: [13, 0],
			},
			"y": {
				type: [13, 3],
			},
		}, 
		g_max: {
			default: {
				g_max_move: "G-Max Wildfire",
				g_max_type: 13,
			}
		}, 
	}, 
	{
		id: 7,
		name: "Squirtle",
		jp_name: "ゼニガメ",
		desc: {
			"default": "Tiny Turtle Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 8,
		name: "Wartotle",
		jp_name: "カメール",
		desc: {
			"default": "Turtle Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 9,
		name: "Blastoise",
		jp_name: "カメックス",
		desc: {
			"default": "Shellfish Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: {
			default: {
				type: [6, -1],
			},
		}, 
		g_max: {
			default: {
				g_max_move: "G-Max Cannonade",
				g_max_type: 6,
			}
		}, 
	}, 
	{
		id: 10,
		name: "Caterpie",
		jp_name: "キャタピラー",
		desc: {
			"default": "Worm Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 11,
		name: "Metapod",
		jp_name: "トランセル",
		desc: {
			"default": "Cocoon Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 12,
		name: "Butterfree",
		jp_name: "バタフリー",
		desc: {
			"default": "Butterfly Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Befuddle",
				g_max_type: 5,
			}
		}, 
	}, 
	{
		id: 13,
		name: "Weedle",
		jp_name: "ビードル",
		desc: {
			"default": "Hairy Bug Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 14,
		name: "Kakuna",
		jp_name: "コクーン",
		desc: {
			"default": "Cocoon Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 15,
		name: "Beedrill",
		jp_name: "スピアー",
		desc: {
			"default": "Poison Bee Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: {
			default: {
				type: [5, 4],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 16,
		name: "Pidgey",
		jp_name: "ポッポ",
		desc: {
			"default": "Tiny Bird Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 17,
		name: "Pidgeotto",
		jp_name: "ピジョン",
		desc: {
			"default": "Bird Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 18,
		name: "Pidgeot",
		jp_name: "ピジョット",
		desc: {
			"default": "Bird Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: {
			default: {
				type: [12, 3],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 19,
		name: "Rattata",
		jp_name: "コラッタ",
		desc: {
			"default": "Mouse Pokémon",
			"alola_variant": "Mouse Pokémon",
		}, 
		type: {
			"default": [12, -1],
			"alola_variant": [10, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 20,
		name: "Raticate",
		jp_name: "ラッタ",
		desc: {
			"default": "Mouse Pokémon",
			"alola_variant": "Mouse Pokémon",
		}, 
		type: {
			"default": [12, -1],
			"alola_variant": [10, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 21,
		name: "Spearow",
		jp_name: "オニスズメ",
		desc: {
			"default": "Tiny Bird Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 22,
		name: "Fearow",
		jp_name: "オニドリル",
		desc: {
			"default": "Beak Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 23,
		name: "Ekans",
		jp_name: "アーボ",
		desc: {
			"default": "Snake Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 24,
		name: "Arbok",
		jp_name: "アーボック",
		desc: {
			"default": "Cobra Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 25,
		name: "Pikachu",
		jp_name: "ピカチュウ",
		desc: {
			"default": "Mouse Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Volt Crash",
				g_max_type: 7,
			}
		}, 
	}, 
	{
		id: 26,
		name: "Raichu",
		jp_name: "ライチュウ",
		desc: {
			"default": "Mouse Pokémon",
			"alola_variant": "Mouse Pokémon",
		}, 
		type: {
			"default": [7, -1],
			"alola_variant": [7, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 27,
		name: "Sandshrew",
		jp_name: "サンド",
		desc: {
			"default": "Mouse Pokémon",
			"alola_variant": "Mouse Pokémon",
		}, 
		type: {
			"default": [2, -1],
			"alola_variant": [11, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 28,
		name: "Sandslash",
		jp_name: "サンドパン",
		desc: {
			"default": "Mouse Pokémon",
			"alola_variant": "Mouse Pokémon",
		}, 
		type: {
			"default": [2, -1],
			"alola_variant": [11, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 29,
		name: "Nidoran ♀",
		jp_name: "ニドラン♀",
		desc: {
			"default": "Poison Pin Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 30,
		name: "Nidorina",
		jp_name: "ニドリーナ",
		desc: {
			"default": "Poison Pin Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 31,
		name: "Nidoqueen",
		jp_name: "ニドクイン",
		desc: {
			"default": "Drill Pokémon",
		}, 
		type: {
			"default": [8, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 32,
		name: "Nidoran ♂",
		jp_name: "ニドラン♂",
		desc: {
			"default": "Poison Pin Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 33,
		name: "Nidorino",
		jp_name: "ニドリーノ",
		desc: {
			"default": "Poison Pin Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 34,
		name: "Nidoking",
		jp_name: "ニドクイン",
		desc: {
			"default": "Drill Pokémon",
		}, 
		type: {
			"default": [8, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 35,
		name: "Clefairy",
		jp_name: "ピッピ",
		desc: {
			"default": "Fairy Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 36,
		name: "Clefable",
		jp_name: "ピクシー",
		desc: {
			"default": "Fairy Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 37,
		name: "Vulpix",
		jp_name: "ロコン",
		desc: {
			"default": "Fox Pokémon",
			"alola_variant": "Fox Pokémon",
		}, 
		type: {
			"default": [13, -1],
			"alola_variant": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 38,
		name: "Ninetales",
		jp_name: "キュウコン",
		desc: {
			"default": "Fox Pokémon",
			"alola_variant": "Fox Pokémon",
		}, 
		type: {
			"default": [13, -1],
			"alola_variant": [11, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 39,
		name: "Jigglypuff",
		jp_name: "プリン",
		desc: {
			"default": "Balloon Pokémon",
		}, 
		type: {
			"default": [12, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 40,
		name: "Wigglypuff",
		jp_name: "プクリン",
		desc: {
			"default": "Balloon Pokémon",
		}, 
		type: {
			"default": [12, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 41,
		name: "Zubat",
		jp_name: "ズバット",
		desc: {
			"default": "Bat Pokémon",
		}, 
		type: {
			"default": [4, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 42,
		name: "Golbat",
		jp_name: "ゴルバット",
		desc: {
			"default": "Bat Pokémon",
		}, 
		type: {
			"default": [4, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 43,
		name: "Oddish",
		jp_name: "ナゾノクサ",
		desc: {
			"default": "Weed Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 44,
		name: "Gloom",
		jp_name: "クサイハナ",
		desc: {
			"default": "Weed Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 45,
		name: "Vileplume",
		jp_name: "ラフレシア",
		desc: {
			"default": "Flower Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 46,
		name: "Paras",
		jp_name: "パラス",
		desc: {
			"default": "Mushroom Pokémon",
		}, 
		type: {
			"default": [5, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 47,
		name: "Parasect",
		jp_name: "パラセクト",
		desc: {
			"default": "Mushroom Pokémon",
		}, 
		type: {
			"default": [5, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 48,
		name: "Venonat",
		jp_name: "コンパン",
		desc: {
			"default": "Insect Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 49,
		name: "Venomoth",
		jp_name: "モルフォン",
		desc: {
			"default": "Poison Moth Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 50,
		name: "Diglett",
		jp_name: "ディグダ",
		desc: {
			"default": "Mole Pokémon",
			"alola_variant": "Mole Pokémon",
		}, 
		type: {
			"default": [2, -1],
			"alola_variant": [2, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 51,
		name: "Dugtrio",
		jp_name: "ダグトリオ",
		desc: {
			"default": "Mole Pokémon",
			"alola_variant": "Mole Pokémon",
		}, 
		type: {
			"default": [2, -1],
			"alola_variant": [2, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 52,
		name: "Meowth",
		jp_name: "ニャース",
		desc: {
			"default": "Scratch Cat Pokémon",
			"alola_variant": "Scratch Cat Pokémon",
			"galar_variant": "Scratch Cat Pokémon",
		}, 
		type: {
			"default": [12, -1],
			"alola_variant": [10, -1],
			"galar_variant": [15, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Gold Rush",
				g_max_type: 12,
			}
		}, 
	}, 
	{
		id: 53,
		name: "Persian",
		jp_name: "ペルシアン",
		desc: {
			"default": "Classy Cat Pokémon",
			"alola_variant": "Classy Cat Pokémon",
		}, 
		type: {
			"default": [12, -1],
			"alola_variant": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 54,
		name: "Psyduck",
		jp_name: "コダック",
		desc: {
			"default": "Duck Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 55,
		name: "Golduck",
		jp_name: "ゴルダック",
		desc: {
			"default": "Duck Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 56,
		name: "Mankey",
		jp_name: "マンキー",
		desc: {
			"default": "Pig Monkey Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 57,
		name: "Primeape",
		jp_name: "オコリザル",
		desc: {
			"default": "Pig Monkey Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 58,
		name: "Growlithe",
		jp_name: "ガーディ",
		desc: {
			"default": "Puppy Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 59,
		name: "Arcanine",
		jp_name: "ウインティ",
		desc: {
			"default": "Legendary Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 60,
		name: "Poliwag",
		jp_name: "ニョロモ",
		desc: {
			"default": "Tadpole Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 61,
		name: "Poliwhirl",
		jp_name: "ニョロゾ",
		desc: {
			"default": "Tadpole Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 62,
		name: "Poliwrath",
		jp_name: "ニョロボン",
		desc: {
			"default": "Tadpole Pokémon",
		}, 
		type: {
			"default": [6, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 63,
		name: "Abra",
		jp_name: "ケーシィ",
		desc: {
			"default": "Psi Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 64,
		name: "Kadabra",
		jp_name: "ユンゲラー",
		desc: {
			"default": "Psi Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 65,
		name: "Alakazam",
		jp_name: "フーディン",
		desc: {
			"default": "Psi Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: {
			default: {
				type: [16, -1],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 66,
		name: "Machop",
		jp_name: "ワンリキー",
		desc: {
			"default": "Superpower Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 67,
		name: "Machoke",
		jp_name: "ゴーリキー",
		desc: {
			"default": "Superpower Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 68,
		name: "Machamp",
		jp_name: "カイリキー",
		desc: {
			"default": "Superpower Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Chi Strike",
				g_max_type: 14,
			}
		}, 
	}, 
	{
		id: 69,
		name: "Bellsprout",
		jp_name: "マダツボミ",
		desc: {
			"default": "Flower Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 70,
		name: "Weepinbell",
		jp_name: "ウツドン",
		desc: {
			"default": "Flycatcher Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 71,
		name: "Victreebell",
		jp_name: "ウツボット",
		desc: {
			"default": "Flycatcher Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 72,
		name: "Tentacool",
		jp_name: "メノクラゲ",
		desc: {
			"default": "Jellyfish Pokémon",
		}, 
		type: {
			"default": [6, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 73,
		name: "Tentacruel",
		jp_name: "ドククラゲ",
		desc: {
			"default": "Jellyfish Pokémon",
		}, 
		type: {
			"default": [6, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 74,
		name: "Geodude",
		jp_name: "イシツブテ",
		desc: {
			"default": "Rock Pokémon",
			"alola_variant": "Rock Pokémon",
		}, 
		type: {
			"default": [8, 2],
			"alola_variant": [8, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 75,
		name: "Graveler",
		jp_name: "ゴローン",
		desc: {
			"default": "Rock Pokémon",
			"alola_variant": "Rock Pokémon",
		}, 
		type: {
			"default": [8, 2],
			"alola_variant": [8, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 76,
		name: "Golem",
		jp_name: "ゴローニャ",
		desc: {
			"default": "Megaton Pokémon",
			"alola_variant": "Megaton Pokémon",
		}, 
		type: {
			"default": [8, 2],
			"alola_variant": [8, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 77,
		name: "Ponyta",
		jp_name: "ポニータ",
		desc: {
			"default": "Fire Horse Pokémon",
			"galar_variant": "Unique Horn Pokémon",
		}, 
		type: {
			"default": [13, -1],
			"galar_variant": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 78,
		name: "Rapidash",
		jp_name: "ギャロップ",
		desc: {
			"default": "Fire Horse Pokémon",
			"galar_variant": "Unique Horn Pokémon",
		}, 
		type: {
			"default": [13, -1],
			"galar_variant": [16, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 79,
		name: "Slowpoke",
		jp_name: "ヤドン",
		desc: {
			"default": "Dopey Pokémon",
			"galar_variant": "Dopey Pokémon",
		}, 
		type: {
			"default": [6, 16],
			"galar_variant": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 80,
		name: "Slowbro",
		jp_name: "ヤドラン",
		desc: {
			"default": "Hermit Crab Pokémon",
			"galar_variant": "Hermit Crab Pokémon",
		}, 
		type: {
			"default": [6, 16],
			"galar_variant": [4, 16],
		}, 
		mega: {
			default: {
				type: [6, 16],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 81,
		name: "Magnemite",
		jp_name: "コイル",
		desc: {
			"default": "Magnet Pokémon",
		}, 
		type: {
			"default": [7, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 82,
		name: "Magneton",
		jp_name: "レアコイル",
		desc: {
			"default": "Magnet Pokémon",
		}, 
		type: {
			"default": [7, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 83,
		name: "Farfetch'd",
		jp_name: "カモネギ",
		desc: {
			"default": "Wild Duck Pokémon",
			"galar_variant": "Wild Duck Pokémon",
		}, 
		type: {
			"default": [12, 3],
			"galar_variant": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 84,
		name: "Doduo",
		jp_name: "ドードー",
		desc: {
			"default": "Twin Bird Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 85,
		name: "Dodrio",
		jp_name: "ドードリオ",
		desc: {
			"default": "Triple Bird Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 86,
		name: "Seel",
		jp_name: "パウワウ",
		desc: {
			"default": "Sea Lion Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 87,
		name: "Dewgong",
		jp_name: "ジュゴン",
		desc: {
			"default": "Sea Lion Pokémon",
		}, 
		type: {
			"default": [6, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 88,
		name: "Grimer",
		jp_name: "ベトベター",
		desc: {
			"default": "Sludge Pokémon",
			"alola_variant": "Sludge Pokémon",
		}, 
		type: {
			"default": [4, -1],
			"alola_variant": [4, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 89,
		name: "Muk",
		jp_name: "ベトベト",
		desc: {
			"default": "Sludge Pokémon",
			"alola_variant": "Sludge Pokémon",
		}, 
		type: {
			"default": [4, -1],
			"alola_variant": [4, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 90,
		name: "Shellder",
		jp_name: "シェルダー",
		desc: {
			"default": "Bivalve Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 91,
		name: "Cloyster",
		jp_name: "パルシェン",
		desc: {
			"default": "Bivalve Pokémon",
		}, 
		type: {
			"default": [6, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 92,
		name: "Gastly",
		jp_name: "ゴース",
		desc: {
			"default": "Gas Pokémon",
		}, 
		type: {
			"default": [1, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 93,
		name: "Haunter",
		jp_name: "ゴースト",
		desc: {
			"default": "Gas Pokémon",
		}, 
		type: {
			"default": [1, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 94,
		name: "Gengar",
		jp_name: "ゲンガー",
		desc: {
			"default": "Shadow Pokémon",
		}, 
		type: {
			"default": [1, 4],
		}, 
		mega: {
			default: {
				type: [0, 1],
			},
		}, 
		g_max: {
			default: {
				g_max_move: "G-Max Terror",
				g_max_type: 1,
			}
		}, 
	}, 
	{
		id: 95,
		name: "Onix",
		jp_name: "イワーク",
		desc: {
			"default": "Rock Snake Pokémon",
		}, 
		type: {
			"default": [8, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 96,
		name: "Drowzee",
		jp_name: "スリープ",
		desc: {
			"default": "Hypnosis Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 97,
		name: "Hypno",
		jp_name: "スリーパー",
		desc: {
			"default": "Hypnosis Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 98,
		name: "Krabby",
		jp_name: "クラブ",
		desc: {
			"default": "River Crab Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 99,
		name: "Kingler",
		jp_name: "キングラー",
		desc: {
			"default": "Pincer Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Foam Burst",
				g_max_type: 6,
			}
		}, 
	}, 
	{
		id: 100,
		name: "Voltorb",
		jp_name: "ビリリダマ",
		desc: {
			"default": "Ball Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 101,
		name: "Electrode",
		jp_name: "マルマイン",
		desc: {
			"default": "Ball Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 102,
		name: "Exeggcute",
		jp_name: "タマタマ",
		desc: {
			"default": "Egg Pokémon",
		}, 
		type: {
			"default": [9, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 103,
		name: "Exeggutor",
		jp_name: "ナッシー",
		desc: {
			"default": "Coconut Pokémon",
			"alola_variant": "Coconut Pokémon",
		}, 
		type: {
			"default": [9, 16],
			"alola_variant": [9, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 104,
		name: "Cubone",
		jp_name: "カラカラ",
		desc: {
			"default": "Lonely Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 105,
		name: "Marowak",
		jp_name: "ガラガラ",
		desc: {
			"default": "Bone Keeper Pokémon",
			"alola_variant": "Bone Keeper Pokémon",
		}, 
		type: {
			"default": [2, -1],
			"alola_variant": [13, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 106,
		name: "Hitmonlee",
		jp_name: "サワムラー",
		desc: {
			"default": "Kicking Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 107,
		name: "Hitmonchan",
		jp_name: "エビワラー",
		desc: {
			"default": "Punching Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 108,
		name: "Lickitung",
		jp_name: "ベロリンガ",
		desc: {
			"default": "Licking Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 109,
		name: "Koffing",
		jp_name: "ドガース",
		desc: {
			"default": "Poison Gas Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 110,
		name: "Weezing",
		jp_name: "マタドガース",
		desc: {
			"default": "Poison Gas Pokémon",
			"galar_variant": "Poison Gas Pokémon",
		}, 
		type: {
			"default": [4, -1],
			"galar_variant": [4, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 111,
		name: "Rhyhorn",
		jp_name: "サイホーン",
		desc: {
			"default": "Spikes Pokémon",
		}, 
		type: {
			"default": [2, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 112,
		name: "Rhydon",
		jp_name: "サイド",
		desc: {
			"default": "Drill Pokémon",
		}, 
		type: {
			"default": [2, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 113,
		name: "Chansey",
		jp_name: "ラッキー",
		desc: {
			"default": "Egg Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 114,
		name: "Tangela",
		jp_name: "モンジャラ",
		desc: {
			"default": "Vine Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 115,
		name: "Kangaskhan",
		jp_name: "ガルーラ",
		desc: {
			"default": "Parent Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: {
			default: {
				type: [12, -1],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 116,
		name: "Horsea",
		jp_name: "タッツー",
		desc: {
			"default": "Dragon Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 117,
		name: "Seadra",
		jp_name: "シードラ",
		desc: {
			"default": "Dragon Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 118,
		name: "Goldeen",
		jp_name: "トサキント",
		desc: {
			"default": "Goldfish Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 119,
		name: "Seaking",
		jp_name: "アズマオウ",
		desc: {
			"default": "Goldfish Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 120,
		name: "Staryu",
		jp_name: "ヒトデマン",
		desc: {
			"default": "Star Shape Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 121,
		name: "Starmie",
		jp_name: "スターミー",
		desc: {
			"default": "Mysterious Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 122,
		name: "Mr. Mime",
		jp_name: "バリヤード",
		desc: {
			"default": "Barrier Pokémon",
			"galar_variant": "Dancing Pokémon",
		}, 
		type: {
			"default": [16, 17],
			"galar_variant": [11, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 123,
		name: "Scyther",
		jp_name: "ストライク",
		desc: {
			"default": "Mantis Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 124,
		name: "Jynx",
		jp_name: "ルージュラ",
		desc: {
			"default": "Human Shape Pokémon",
		}, 
		type: {
			"default": [11, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 125,
		name: "Electabuzz",
		jp_name: "エレブー",
		desc: {
			"default": "Electric Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 126,
		name: "Magmar",
		jp_name: "ブーバー",
		desc: {
			"default": "Spitfire Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 127,
		name: "Pinsir",
		jp_name: "カイロス",
		desc: {
			"default": "Stag Beetle Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: {
			default: {
				type: [5, 3],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 128,
		name: "Tauros",
		jp_name: "ケンタロス",
		desc: {
			"default": "Wild Bull Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 129,
		name: "Magikarp",
		jp_name: "コイキング",
		desc: {
			"default": "Fish Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 130,
		name: "Gyarados",
		jp_name: "ギャラドス",
		desc: {
			"default": "Atrocious Pokémon",
		}, 
		type: {
			"default": [6, 3],
		}, 
		mega: {
			default: {
				type: [6, 10],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 131,
		name: "Lapras",
		jp_name: "ラプラス",
		desc: {
			"default": "Transport Pokémon",
		}, 
		type: {
			"default": [6, 11],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Resonance",
				g_max_type: 11,
			}
		}, 
	}, 
	{
		id: 132,
		name: "Ditto",
		jp_name: "メタモン",
		desc: {
			"default": "Transform Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 133,
		name: "Eevee",
		jp_name: "イーブイ",
		desc: {
			"default": "Evolution Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Cuddle",
				g_max_type: 12,
			}
		}, 
	}, 
	{
		id: 134,
		name: "Vaporeon",
		jp_name: "シャワーズ",
		desc: {
			"default": "Bubble Jet Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 135,
		name: "Jolteon",
		jp_name: "サンダース",
		desc: {
			"default": "Lightning Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 136,
		name: "Flareon",
		jp_name: "ブースター",
		desc: {
			"default": "Flame Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 137,
		name: "Porygon",
		jp_name: "ポリゴン",
		desc: {
			"default": "Virtual Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 138,
		name: "Omanyte",
		jp_name: "オマナイト",
		desc: {
			"default": "Spiral Pokémon",
		}, 
		type: {
			"default": [8, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 139,
		name: "Omastar",
		jp_name: "オマスター",
		desc: {
			"default": "Spiral Pokémon",
		}, 
		type: {
			"default": [8, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 140,
		name: "Kabuto",
		jp_name: "カブト",
		desc: {
			"default": "Shellfish Pokémon",
		}, 
		type: {
			"default": [8, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 141,
		name: "Kabutops",
		jp_name: "カブトプス",
		desc: {
			"default": "Shellfish Pokémon",
		}, 
		type: {
			"default": [8, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 142,
		name: "Aerodactyl",
		jp_name: "プテラ",
		desc: {
			"default": "Fossil Pokémon",
		}, 
		type: {
			"default": [8, 3],
		}, 
		mega: {
			default: {
				type: [8, 3],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 143,
		name: "Snorlax",
		jp_name: "カビゴン",
		desc: {
			"default": "Sleeping Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Replenish",
				g_max_type: 12,
			}
		}, 
	}, 
	{
		id: 144,
		name: "Articuno",
		jp_name: "フリーザー",
		desc: {
			"default": "Freeze Pokémon",
			"galar_variant": "Cruel Pokémon",
		}, 
		type: {
			"default": [11, 3],
			"galar_variant": [16, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 145,
		name: "Zapdos",
		jp_name: "サンダー",
		desc: {
			"default": "Electric Pokémon",
			"galar_variant": "Electric Pokémon",
		}, 
		type: {
			"default": [7, 3],
			"galar_variant": [14, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 146,
		name: "Moltres",
		jp_name: "ファイヤー",
		desc: {
			"default": "Flame Pokémon",
			"galar_variant": "Flame Pokémon",
		}, 
		type: {
			"default": [13, 3],
			"galar_variant": [10, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 147,
		name: "Dratini",
		jp_name: "ミニリュウ",
		desc: {
			"default": "Dragon Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 148,
		name: "Dragonair",
		jp_name: "ハクリュウ",
		desc: {
			"default": "Dragon Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 149,
		name: "Dragonite",
		jp_name: "カイリュー",
		desc: {
			"default": "Dragon Pokémon",
		}, 
		type: {
			"default": [0, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 150,
		name: "Mewtwo",
		jp_name: "ミュウツー",
		desc: {
			"default": "Genetic Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: {
			"x": {
				type: [16, 14],
			},
			"y": {
				type: [16, -1],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 151,
		name: "Mew",
		jp_name: "ミュウ",
		desc: {
			"default": "New Species Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 152,
		name: "Chikorita",
		jp_name: "チコリータ",
		desc: {
			"default": "Leaf Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 153,
		name: "Bayleef",
		jp_name: "ベイリーフ",
		desc: {
			"default": "Leaf Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 154,
		name: "Meganium",
		jp_name: "メガニウム",
		desc: {
			"default": "Herb Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 155,
		name: "Cyndaquil",
		jp_name: "ヒノアラシ",
		desc: {
			"default": "Fire Mouse Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 156,
		name: "Quilava",
		jp_name: "マグマラシ",
		desc: {
			"default": "Volcano Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 157,
		name: "Typhlosion",
		jp_name: "バクフーン",
		desc: {
			"default": "Volcano Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 158,
		name: "Totodile",
		jp_name: "ワニノコ",
		desc: {
			"default": "Big Jaw Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 159,
		name: "Croconaw",
		jp_name: "アリゲイツ",
		desc: {
			"default": "Big Jaw Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 160,
		name: "Feraligatr",
		jp_name: "オーダイル",
		desc: {
			"default": "Big Jaw Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 161,
		name: "Sentret",
		jp_name: "オタチ",
		desc: {
			"default": "Scout Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 162,
		name: "Furret",
		jp_name: "オオタチ",
		desc: {
			"default": "Long Body Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 163,
		name: "Hoothoot",
		jp_name: "ホーホー",
		desc: {
			"default": "Owl Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 164,
		name: "Noctowl",
		jp_name: "ヨルノズク",
		desc: {
			"default": "Owl Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 165,
		name: "Ledyba",
		jp_name: "レディバ",
		desc: {
			"default": "Five Star Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 166,
		name: "Ledian",
		jp_name: "レディアン",
		desc: {
			"default": "Five Star Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 167,
		name: "Spinarak",
		jp_name: "イトマル",
		desc: {
			"default": "String Spit Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 168,
		name: "Ariados",
		jp_name: "アリアドス",
		desc: {
			"default": "Long Leg Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 169,
		name: "Crobat",
		jp_name: "クロバット",
		desc: {
			"default": "Bat Pokémon",
		}, 
		type: {
			"default": [4, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 170,
		name: "Chinchou",
		jp_name: "チョンチー",
		desc: {
			"default": "Angler Pokémon",
		}, 
		type: {
			"default": [6, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 171,
		name: "Lanturn",
		jp_name: "ランターン",
		desc: {
			"default": "Light Pokémon",
		}, 
		type: {
			"default": [6, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 172,
		name: "Pichu",
		jp_name: "ピチュー",
		desc: {
			"default": "Tiny Mouse Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 173,
		name: "Cleffa",
		jp_name: "ピィ",
		desc: {
			"default": "Star Shape Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 174,
		name: "Igglybuff",
		jp_name: "ププリン",
		desc: {
			"default": "Balloon Pokémon",
		}, 
		type: {
			"default": [12, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 175,
		name: "Togepi",
		jp_name: "トゲピー",
		desc: {
			"default": "Spike Ball Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 176,
		name: "Togetic",
		jp_name: "トゲチック",
		desc: {
			"default": "Happiness Pokémon",
		}, 
		type: {
			"default": [17, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 177,
		name: "Natu",
		jp_name: "ネイティ",
		desc: {
			"default": "Tiny Bird Pokémon",
		}, 
		type: {
			"default": [16, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 178,
		name: "Xatu",
		jp_name: "ネイティオ",
		desc: {
			"default": "Mystic Pokémon",
		}, 
		type: {
			"default": [16, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 179,
		name: "Mareep",
		jp_name: "メリープ",
		desc: {
			"default": "Wool Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 180,
		name: "Flaaffy",
		jp_name: "モココ",
		desc: {
			"default": "Wool Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 181,
		name: "Ampharos",
		jp_name: "デンリュウ",
		desc: {
			"default": "Light Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: {
			default: {
				type: [7, 0],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 182,
		name: "Bellossom",
		jp_name: "キレイハナ",
		desc: {
			"default": "Flower Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 183,
		name: "Marill",
		jp_name: "マリル",
		desc: {
			"default": "Aqua Mouse Pokémon",
		}, 
		type: {
			"default": [6, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 184,
		name: "Azumarill",
		jp_name: "マリルリ",
		desc: {
			"default": "Aqua Rabbit Pokémon",
		}, 
		type: {
			"default": [6, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 185,
		name: "Sudowoodo",
		jp_name: "ウソッキー",
		desc: {
			"default": "Imitation Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 186,
		name: "Politoed",
		jp_name: "ニョロトノ",
		desc: {
			"default": "Frog Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 187,
		name: "Hoppip",
		jp_name: "ハネッコ",
		desc: {
			"default": "Cottonweed Pokémon",
		}, 
		type: {
			"default": [9, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 188,
		name: "Skiploom",
		jp_name: "ポポッコ",
		desc: {
			"default": "Cottonweed Pokémon",
		}, 
		type: {
			"default": [9, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 189,
		name: "Jumpluff",
		jp_name: "ワタッコ",
		desc: {
			"default": "Cottonweed Pokémon",
		}, 
		type: {
			"default": [9, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 190,
		name: "Aipom",
		jp_name: "エイパム",
		desc: {
			"default": "Long Tail Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 191,
		name: "Sunkern",
		jp_name: "ヒマナッツ",
		desc: {
			"default": "Seed Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 192,
		name: "Sunflora",
		jp_name: "キマワリ",
		desc: {
			"default": "Sun Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 193,
		name: "Yanma",
		jp_name: "ヤニャンマ",
		desc: {
			"default": "Clear Wing Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 194,
		name: "Wooper",
		jp_name: "ウパー",
		desc: {
			"default": "Water Fish Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 195,
		name: "Quagsire",
		jp_name: "ヌオー",
		desc: {
			"default": "Water Fish Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 196,
		name: "Espeon",
		jp_name: "エーフィ",
		desc: {
			"default": "Sun Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 197,
		name: "Umbreon",
		jp_name: "ブラッキー",
		desc: {
			"default": "Moonlight Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 198,
		name: "Murkrow",
		jp_name: "ヤミカラス",
		desc: {
			"default": "Darkness Pokémon",
		}, 
		type: {
			"default": [10, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 199,
		name: "Slowking",
		jp_name: "ヤドキング",
		desc: {
			"default": "Royal Pokémon",
		}, 
		type: {
			"default": [6, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 200,
		name: "Misdreavus",
		jp_name: "ムウマ",
		desc: {
			"default": "Screech Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 201,
		name: "Unown",
		jp_name: "アンオーン",
		desc: {
			"default": "Symbol Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 202,
		name: "Wobuffet",
		jp_name: "ソーナンス",
		desc: {
			"default": "Patient Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 203,
		name: "Girafarig",
		jp_name: "キリンリキ",
		desc: {
			"default": "Long Neck Pokémon",
		}, 
		type: {
			"default": [12, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 204,
		name: "Pineco",
		jp_name: "クヌギダマ",
		desc: {
			"default": "Bagworm Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 205,
		name: "Forretress",
		jp_name: "フォレトス",
		desc: {
			"default": "Bagworm Pokémon",
		}, 
		type: {
			"default": [5, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 206,
		name: "Dunsparce",
		jp_name: "ノコッチ",
		desc: {
			"default": "Land Snake Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 207,
		name: "Gligar",
		jp_name: "グライガー",
		desc: {
			"default": "Fly Scorpion Pokémon",
		}, 
		type: {
			"default": [2, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 208,
		name: "Steelix",
		jp_name: "ハガネール",
		desc: {
			"default": "Iron Snake Pokémon",
		}, 
		type: {
			"default": [15, 2],
		}, 
		mega: {
			default: {
				type: [15, 2],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 209,
		name: "Snubbull",
		jp_name: "ブルー",
		desc: {
			"default": "Fairy Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 210,
		name: "Granbull",
		jp_name: "グランブル",
		desc: {
			"default": "Fairy Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 211,
		name: "Qwilfish",
		jp_name: "バリーセン",
		desc: {
			"default": "Balloon Pokémon",
		}, 
		type: {
			"default": [6, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 212,
		name: "Scizor",
		jp_name: "ハッサム",
		desc: {
			"default": "Pincer Pokémon",
		}, 
		type: {
			"default": [5, 15],
		}, 
		mega: {
			default: {
				type: [5, 15],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 213,
		name: "Shuckle",
		jp_name: "ツボツボ",
		desc: {
			"default": "Mold Pokémon",
		}, 
		type: {
			"default": [5, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 214,
		name: "Heracross",
		jp_name: "ヘラクロス",
		desc: {
			"default": "Single Horn Pokémon",
		}, 
		type: {
			"default": [5, 14],
		}, 
		mega: {
			default: {
				type: [5, 14],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 215,
		name: "Sneasel",
		jp_name: "ニューラ",
		desc: {
			"default": "Sharp Claw Pokémon",
		}, 
		type: {
			"default": [10, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 216,
		name: "Teddiursa",
		jp_name: "ヒメグマ",
		desc: {
			"default": "Little Bear Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 217,
		name: "Ursaring",
		jp_name: "リングマ",
		desc: {
			"default": "Hibernator Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 218,
		name: "Slugma",
		jp_name: "マグマッグ",
		desc: {
			"default": "Lava Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 219,
		name: "Magcargo",
		jp_name: "マグカルゴ",
		desc: {
			"default": "Lava Pokémon",
		}, 
		type: {
			"default": [13, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 220,
		name: "Swinub",
		jp_name: "ウリムー",
		desc: {
			"default": "Pig Pokémon",
		}, 
		type: {
			"default": [11, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 221,
		name: "Piloswine",
		jp_name: "イノムー",
		desc: {
			"default": "Swine Pokémon",
		}, 
		type: {
			"default": [11, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 222,
		name: "Corsola",
		jp_name: "サニーゴ",
		desc: {
			"default": "Coral Pokémon",
			"galar_variant": "Coral Pokémon",
		}, 
		type: {
			"default": [6, 8],
			"galar_variant": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 223,
		name: "Remoraid",
		jp_name: "テッポウオ",
		desc: {
			"default": "Jet Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 224,
		name: "Octillery",
		jp_name: "オクタン",
		desc: {
			"default": "Jet Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 225,
		name: "Delibird",
		jp_name: "デリバード",
		desc: {
			"default": "Delivery Pokémon",
		}, 
		type: {
			"default": [11, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 226,
		name: "Mantine",
		jp_name: "マンタイン",
		desc: {
			"default": "Kite Pokémon",
		}, 
		type: {
			"default": [6, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 227,
		name: "Skarmory",
		jp_name: "エアームド",
		desc: {
			"default": "Armor Bird Pokémon",
		}, 
		type: {
			"default": [15, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 228,
		name: "Houndour",
		jp_name: "デルビル",
		desc: {
			"default": "Dark Pokémon",
		}, 
		type: {
			"default": [10, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 229,
		name: "Houndoom",
		jp_name: "ヘルガー",
		desc: {
			"default": "Dark Pokémon",
		}, 
		type: {
			"default": [10, 13],
		}, 
		mega: {
			default: {
				type: [10, 13],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 230,
		name: "Kingdra",
		jp_name: "キングドラ",
		desc: {
			"default": "Dragon Pokémon",
		}, 
		type: {
			"default": [6, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 231,
		name: "Phanpy",
		jp_name: "ゴマゾウ",
		desc: {
			"default": "Long Nose Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 232,
		name: "Donphan",
		jp_name: "ドンファン",
		desc: {
			"default": "Armor Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 233,
		name: "Porygon2",
		jp_name: "ポリゴン２",
		desc: {
			"default": "Virtual Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 234,
		name: "Stantler",
		jp_name: "オドシシ",
		desc: {
			"default": "Big Horn Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 235,
		name: "Smeargle",
		jp_name: "ドーブル",
		desc: {
			"default": "Painter Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 236,
		name: "Tyrogue",
		jp_name: "バルキー",
		desc: {
			"default": "Scuffle Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 237,
		name: "Hitmontop",
		jp_name: "カポエラー",
		desc: {
			"default": "Handstand Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 238,
		name: "Smoochum",
		jp_name: "ムチュール",
		desc: {
			"default": "Kiss Pokémon",
		}, 
		type: {
			"default": [11, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 239,
		name: "Elekid",
		jp_name: "エレキッド",
		desc: {
			"default": "Electric Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 240,
		name: "Magby",
		jp_name: "ブビィ",
		desc: {
			"default": "Live Coal Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 241,
		name: "Miltank",
		jp_name: "ミルタンク",
		desc: {
			"default": "Milk Cow Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 242,
		name: "Blissey",
		jp_name: "ハピナス",
		desc: {
			"default": "Happiness Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 243,
		name: "Raikou",
		jp_name: "ライコウ",
		desc: {
			"default": "Thunder Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 244,
		name: "Entei",
		jp_name: "エンテイ",
		desc: {
			"default": "Volcano Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 245,
		name: "Suicune",
		jp_name: "スイクン",
		desc: {
			"default": "Aurora Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 246,
		name: "Larvitar",
		jp_name: "ヨーギラス",
		desc: {
			"default": "Rock Skin Pokémon",
		}, 
		type: {
			"default": [8, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 247,
		name: "Pupitar",
		jp_name: "サナギラス",
		desc: {
			"default": "Hard Shell Pokémon",
		}, 
		type: {
			"default": [8, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 248,
		name: "Tyranitar",
		jp_name: "バンギラス",
		desc: {
			"default": "Armor Pokémon",
		}, 
		type: {
			"default": [8, 10],
		}, 
		mega: {
			default: {
				type: [8, 10],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 249,
		name: "Lugia",
		jp_name: "ルギア",
		desc: {
			"default": "Diving Pokémon",
		}, 
		type: {
			"default": [16, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 250,
		name: "Ho-oh",
		jp_name: "ホウオウ",
		desc: {
			"default": "Rainbow Pokémon",
		}, 
		type: {
			"default": [13, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 251,
		name: "Celebi",
		jp_name: "セレビィ",
		desc: {
			"default": "Time Travel Pokémon",
		}, 
		type: {
			"default": [16, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 252,
		name: "Treecko",
		jp_name: "キモリ",
		desc: {
			"default": "Wood Gecko Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 253,
		name: "Grovyle",
		jp_name: "ジュプトル",
		desc: {
			"default": "Wood Gecko Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 254,
		name: "Sceptile",
		jp_name: "ジュカイン",
		desc: {
			"default": "Forest Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: {
			default: {
				type: [9, 0],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 255,
		name: "Torchic",
		jp_name: "アチャモ",
		desc: {
			"default": "Chick Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 256,
		name: "Combusken",
		jp_name: "ワカシャモ",
		desc: {
			"default": "Young Fowl Pokémon",
		}, 
		type: {
			"default": [13, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 257,
		name: "Blaziken",
		jp_name: "バシャーモ",
		desc: {
			"default": "Blaze Pokémon",
		}, 
		type: {
			"default": [13, 14],
		}, 
		mega: {
			default: {
				type: [13, 14],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 258,
		name: "Mudkip",
		jp_name: "ミズゴロウ",
		desc: {
			"default": "Mud Fish Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 259,
		name: "Marshtomp",
		jp_name: "ヌマクロー",
		desc: {
			"default": "Mud Fish Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 260,
		name: "Swampert",
		jp_name: "ラグラージ",
		desc: {
			"default": "Mud Fish Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: {
			default: {
				type: [6, 2],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 261,
		name: "Poochyena",
		jp_name: "ポチエナ",
		desc: {
			"default": "Bite Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 262,
		name: "Mightyena",
		jp_name: "グラエナ",
		desc: {
			"default": "Bite Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 263,
		name: "Zigzagoon",
		jp_name: "ジグザグマ",
		desc: {
			"default": "Tiny Racoon Pokémon",
			"galar_variant": "Tiny Racoon Pokémon",
		}, 
		type: {
			"default": [12, -1],
			"galar_variant": [10, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 264,
		name: "Linoone",
		jp_name: "マッスグマ",
		desc: {
			"default": "Rushing Pokémon",
			"galar_variant": "Rushing Pokémon",
		}, 
		type: {
			"default": [12, -1],
			"galar_variant": [10, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 265,
		name: "Wurmple",
		jp_name: "ケムッソ",
		desc: {
			"default": "Worm Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 266,
		name: "Silcoon",
		jp_name: "カラサリス",
		desc: {
			"default": "Cocoon Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 267,
		name: "Beautifly",
		jp_name: "アゲハント",
		desc: {
			"default": "Butterfly Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 268,
		name: "Cascoon",
		jp_name: "マユルド",
		desc: {
			"default": "Cocoon Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 269,
		name: "Dustox",
		jp_name: "ドクケイル",
		desc: {
			"default": "Poison Moth Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 270,
		name: "Lotad",
		jp_name: "ハスボー",
		desc: {
			"default": "Water Weed Pokémon",
		}, 
		type: {
			"default": [6, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 271,
		name: "Lombre",
		jp_name: "ハスブレロ",
		desc: {
			"default": "Jolly Pokémon",
		}, 
		type: {
			"default": [6, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 272,
		name: "Ludicolo",
		jp_name: "ルンパッパ",
		desc: {
			"default": "Carefree Pokémon",
		}, 
		type: {
			"default": [6, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 273,
		name: "Seedot",
		jp_name: "タネボー",
		desc: {
			"default": "Acorn Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 274,
		name: "Nuzleaf",
		jp_name: "コノハナ",
		desc: {
			"default": "Willy Pokémon",
		}, 
		type: {
			"default": [9, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 275,
		name: "Shiftry",
		jp_name: "ダーテング",
		desc: {
			"default": "Wicked Pokémon",
		}, 
		type: {
			"default": [9, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 276,
		name: "Taillow",
		jp_name: "スバメ",
		desc: {
			"default": "Tiny Swallow Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 277,
		name: "Swellow",
		jp_name: "オオスバメ",
		desc: {
			"default": "Swallow Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 278,
		name: "Wingull",
		jp_name: "キャモメ",
		desc: {
			"default": "Seagull Pokémon",
		}, 
		type: {
			"default": [6, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 279,
		name: "Pelipper",
		jp_name: "ぺリッパー",
		desc: {
			"default": "Water Bird Pokémon",
		}, 
		type: {
			"default": [6, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 280,
		name: "Raltz",
		jp_name: "ラルトス",
		desc: {
			"default": "Feeling Pokémon",
		}, 
		type: {
			"default": [16, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 281,
		name: "Kirlia",
		jp_name: "キルリア",
		desc: {
			"default": "Emotion Pokémon",
		}, 
		type: {
			"default": [16, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 282,
		name: "Gardevoir",
		jp_name: "サーナイト",
		desc: {
			"default": "Embrace Pokémon",
		}, 
		type: {
			"default": [16, 17],
		}, 
		mega: {
			default: {
				type: [16, 17],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 283,
		name: "Surskit",
		jp_name: "アメタマ",
		desc: {
			"default": "Pond Skater Pokémon",
		}, 
		type: {
			"default": [5, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 284,
		name: "Masquerain",
		jp_name: "アメモース",
		desc: {
			"default": "Eyeball Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 285,
		name: "Shroomish",
		jp_name: "キノココ",
		desc: {
			"default": "Mushroom Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 286,
		name: "Breloom",
		jp_name: "キノガッサ",
		desc: {
			"default": "Mushroom Pokémon",
		}, 
		type: {
			"default": [9, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 287,
		name: "Slakoth",
		jp_name: "ナマケロ",
		desc: {
			"default": "Slacker Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 288,
		name: "Vigoroth",
		jp_name: "ヤルキモノ",
		desc: {
			"default": "Wild Monkey Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 289,
		name: "Slaking",
		jp_name: "ケッキング",
		desc: {
			"default": "Lazy Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 290,
		name: "Nincada",
		jp_name: "ツチニン",
		desc: {
			"default": "Trainee Pokémon",
		}, 
		type: {
			"default": [5, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 291,
		name: "Ninjask",
		jp_name: "テッカニン",
		desc: {
			"default": "Ninja Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 292,
		name: "Shedinja",
		jp_name: "ヌケニン",
		desc: {
			"default": "Shed Pokémon",
		}, 
		type: {
			"default": [5, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 293,
		name: "Whismur",
		jp_name: "ゴニョニョ",
		desc: {
			"default": "Whisper Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 294,
		name: "Loudred",
		jp_name: "ドゴーム",
		desc: {
			"default": "Big Voice Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 295,
		name: "Exploud",
		jp_name: "バクオング",
		desc: {
			"default": "Loud Noise Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 296,
		name: "Makuhita",
		jp_name: "マクノシタ",
		desc: {
			"default": "Guts Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 297,
		name: "Hariyama",
		jp_name: "ハリテヤマ",
		desc: {
			"default": "Arm Thrust Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 298,
		name: "Azurill",
		jp_name: "ルリリ",
		desc: {
			"default": "Polka Dot Pokémon",
		}, 
		type: {
			"default": [12, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 299,
		name: "Nosepass",
		jp_name: "ノズパス",
		desc: {
			"default": "Compass Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 300,
		name: "Skitty",
		jp_name: "エネコ",
		desc: {
			"default": "Kitten Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 301,
		name: "Delcatty",
		jp_name: "エネコロロ",
		desc: {
			"default": "Prim Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 302,
		name: "Sableye",
		jp_name: "ヤミラミ",
		desc: {
			"default": "Darkness Pokémon",
		}, 
		type: {
			"default": [10, 1],
		}, 
		mega: {
			default: {
				type: [0, 1],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 303,
		name: "Mawile",
		jp_name: "クチート",
		desc: {
			"default": "Deceiver Pokémon",
		}, 
		type: {
			"default": [15, 17],
		}, 
		mega: {
			default: {
				type: [15, 17],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 304,
		name: "Aron",
		jp_name: "ココドラ",
		desc: {
			"default": "Iron Armor Pokémon",
		}, 
		type: {
			"default": [15, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 305,
		name: "Lairon",
		jp_name: "コドラ",
		desc: {
			"default": "Iron Armor Pokémon",
		}, 
		type: {
			"default": [15, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 306,
		name: "Aggron",
		jp_name: "ボスゴドラ",
		desc: {
			"default": "Iron Armor Pokémon",
		}, 
		type: {
			"default": [15, 8],
		}, 
		mega: {
			default: {
				type: [15, 8],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 307,
		name: "Meditite",
		jp_name: "アサナン",
		desc: {
			"default": "Meditate Pokémon",
		}, 
		type: {
			"default": [14, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 308,
		name: "Medicham",
		jp_name: "チャーレム",
		desc: {
			"default": "Meditate Pokémon",
		}, 
		type: {
			"default": [14, 16],
		}, 
		mega: {
			default: {
				type: [14, 16],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 309,
		name: "Electrike",
		jp_name: "ラクライ",
		desc: {
			"default": "Lightning Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 310,
		name: "Manectric",
		jp_name: "ライボルト",
		desc: {
			"default": "Discharge Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: {
			default: {
				type: [14, -1],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 311,
		name: "Plusle",
		jp_name: "プラスル",
		desc: {
			"default": "Cheering Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 312,
		name: "Minun",
		jp_name: "マイナン",
		desc: {
			"default": "Cheering Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 313,
		name: "Volbeat",
		jp_name: "バルビート",
		desc: {
			"default": "Firefly Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 314,
		name: "Illumise",
		jp_name: "イルミーゼ",
		desc: {
			"default": "Firefly Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 315,
		name: "Roselia",
		jp_name: "ロゼリア",
		desc: {
			"default": "Thorn Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 316,
		name: "Gulpin",
		jp_name: "ゴクリン",
		desc: {
			"default": "Stomach Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 317,
		name: "Swalot",
		jp_name: "マルノーム",
		desc: {
			"default": "Poison Bag Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 318,
		name: "Carvanha",
		jp_name: "キバニア",
		desc: {
			"default": "Savage Pokémon",
		}, 
		type: {
			"default": [6, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 319,
		name: "Sharpedo",
		jp_name: "サメハダー",
		desc: {
			"default": "Brutal Pokémon",
		}, 
		type: {
			"default": [6, 10],
		}, 
		mega: {
			default: {
				type: [6, 10],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 320,
		name: "Wailmer",
		jp_name: "ホエルコ",
		desc: {
			"default": "Ball Whale Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 321,
		name: "Wailord",
		jp_name: "ホエルオー",
		desc: {
			"default": "Float Whale Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 322,
		name: "Numel",
		jp_name: "ドンメル",
		desc: {
			"default": "Numb Pokémon",
		}, 
		type: {
			"default": [13, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 323,
		name: "Camerupt",
		jp_name: "バクーダ",
		desc: {
			"default": "Eruption Pokémon",
		}, 
		type: {
			"default": [13, 2],
		}, 
		mega: {
			default: {
				type: [13, 2],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 324,
		name: "Torkoal",
		jp_name: "コータス",
		desc: {
			"default": "Coal Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 325,
		name: "Spoink",
		jp_name: "バネブー",
		desc: {
			"default": "Bounce Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 326,
		name: "Grumpig",
		jp_name: "ブーピッグ",
		desc: {
			"default": "Manipulate Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 327,
		name: "Spinda",
		jp_name: "パッチール",
		desc: {
			"default": "Spot Panda Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 328,
		name: "Trapinch",
		jp_name: "ナックラー",
		desc: {
			"default": "Ant Pit Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 329,
		name: "Vibrava",
		jp_name: "ビブラーバ",
		desc: {
			"default": "Vibration Pokémon",
		}, 
		type: {
			"default": [2, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 330,
		name: "Flygon",
		jp_name: "フライゴン",
		desc: {
			"default": "Mystic Pokémon",
		}, 
		type: {
			"default": [2, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 331,
		name: "Cacnea",
		jp_name: "サボネア",
		desc: {
			"default": "Cactus Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 332,
		name: "Cacturne",
		jp_name: "ノクタス",
		desc: {
			"default": "Scarecrow Pokémon",
		}, 
		type: {
			"default": [9, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 333,
		name: "Swablu",
		jp_name: "チルット",
		desc: {
			"default": "Cotton Bird Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 334,
		name: "Altaria",
		jp_name: "チルタリス",
		desc: {
			"default": "Humming Pokémon",
		}, 
		type: {
			"default": [0, 3],
		}, 
		mega: {
			default: {
				type: [0, 17],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 335,
		name: "Zangoose",
		jp_name: "ザングース",
		desc: {
			"default": "Cat Ferret Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 336,
		name: "Seviper",
		jp_name: "ハブネーク",
		desc: {
			"default": "Fang Snake Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 337,
		name: "Lunatone",
		jp_name: "ルナトーン",
		desc: {
			"default": "Meteorite Pokémon",
		}, 
		type: {
			"default": [8, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 338,
		name: "Solrock",
		jp_name: "ソルロック",
		desc: {
			"default": "Meteorite Pokémon",
		}, 
		type: {
			"default": [8, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 339,
		name: "Barboach",
		jp_name: "ドジョッチ",
		desc: {
			"default": "Whiskers Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 340,
		name: "Whiscash",
		jp_name: "ナマズン",
		desc: {
			"default": "Whiskers Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 341,
		name: "Corphish",
		jp_name: "ヘイガニ",
		desc: {
			"default": "Ruffian Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 342,
		name: "Crawdunt",
		jp_name: "シザリガー",
		desc: {
			"default": "Rogue Pokémon",
		}, 
		type: {
			"default": [6, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 343,
		name: "Baltoy",
		jp_name: "ヤジロン",
		desc: {
			"default": "Clay Doll Pokémon",
		}, 
		type: {
			"default": [2, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 344,
		name: "Claydol",
		jp_name: "ネンドール",
		desc: {
			"default": "Clay Doll Pokémon",
		}, 
		type: {
			"default": [2, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 345,
		name: "Lileep",
		jp_name: "リリーラ",
		desc: {
			"default": "Sea Lily Pokémon",
		}, 
		type: {
			"default": [8, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 346,
		name: "Cradily",
		jp_name: "ユレイドル",
		desc: {
			"default": "Barnacle Pokémon",
		}, 
		type: {
			"default": [8, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 347,
		name: "Anorith",
		jp_name: "アノプス",
		desc: {
			"default": "Old Shrimp Pokémon",
		}, 
		type: {
			"default": [8, 5],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 348,
		name: "Armaldo",
		jp_name: "アーマルド",
		desc: {
			"default": "Plate Pokémon",
		}, 
		type: {
			"default": [8, 5],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 349,
		name: "Feebas",
		jp_name: "ヒンバス",
		desc: {
			"default": "Fish Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 350,
		name: "Milotic",
		jp_name: "ミロカロス",
		desc: {
			"default": "Tender Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 351,
		name: "Castform",
		jp_name: "ポワルン",
		desc: {
			"normal_form": "Weather Pokémon",
			"sunny_form": "Weather Pokémon",
			"rainy_form": "Weather Pokémon",
			"snowy_form": "Weather Pokémon",
		}, 
		jp_desc: {
			"normal_form": "ポワルンのすがた",
			"sunny_form": "たいようのすがた",
			"rainy_form": "あまみずのすがた",
			"snowy_form": "ゆきぐものすがた",
		}, 
		type: {
			"normal_form": [12, -1],
			"sunny_form": [13, -1],
			"rainy_form": [6, -1],
			"snowy_form": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 352,
		name: "Kecleon",
		jp_name: "カクレオン",
		desc: {
			"default": "Color Swap Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 353,
		name: "Shuppet",
		jp_name: "カゲボウズ",
		desc: {
			"default": "Puppet Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 354,
		name: "Banette",
		jp_name: "ジュペッタ",
		desc: {
			"default": "Marionette Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: {
			default: {
				type: [1, -1],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 355,
		name: "Duskull",
		jp_name: "ヨマラウ",
		desc: {
			"default": "Requiem Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 356,
		name: "Dusclops",
		jp_name: "サマヨール",
		desc: {
			"default": "Beckon Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 357,
		name: "Tropius",
		jp_name: "トロピウス",
		desc: {
			"default": "Fruit Pokémon",
		}, 
		type: {
			"default": [9, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 358,
		name: "Chimecho",
		jp_name: "チリーン",
		desc: {
			"default": "Wind Chime Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 359,
		name: "Absol",
		jp_name: "アブソル",
		desc: {
			"default": "Disaster Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: {
			default: {
				type: [10, -1],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 360,
		name: "Wynaut",
		jp_name: "ソーナノ",
		desc: {
			"default": "Bright Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 361,
		name: "Snorunt",
		jp_name: "ユキワラシ",
		desc: {
			"default": "Snow Hat Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: {
			default: {
				type: [11, -1],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 362,
		name: "Glalie",
		jp_name: "オニゴーリ",
		desc: {
			"default": "Face Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 363,
		name: "Spheal",
		jp_name: "タマザラシ",
		desc: {
			"default": "Clap Pokémon",
		}, 
		type: {
			"default": [11, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 364,
		name: "Sealeo",
		jp_name: "トドグラー",
		desc: {
			"default": "Ball Roll Pokémon",
		}, 
		type: {
			"default": [11, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 365,
		name: "Walrein",
		jp_name: "トドゼルガ",
		desc: {
			"default": "Ice Break Pokémon",
		}, 
		type: {
			"default": [11, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 366,
		name: "Clamperl",
		jp_name: "パールル",
		desc: {
			"default": "Bivalve Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 367,
		name: "Huntail",
		jp_name: "ハンテール",
		desc: {
			"default": "Deep Sea Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 368,
		name: "Gorebyss",
		jp_name: "サクラビス",
		desc: {
			"default": "South Sea Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 369,
		name: "Relicanth",
		jp_name: "ジーランス",
		desc: {
			"default": "Longevity Pokémon",
		}, 
		type: {
			"default": [6, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 370,
		name: "Luvdisc",
		jp_name: "ラブカス",
		desc: {
			"default": "Rendezvous Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 371,
		name: "Bagon",
		jp_name: "タツベイ",
		desc: {
			"default": "Rock Head Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 372,
		name: "Shelgon",
		jp_name: "コモルー",
		desc: {
			"default": "Endurance Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 373,
		name: "Salamence",
		jp_name: "ボーマンダ",
		desc: {
			"default": "Dragon Pokémon",
		}, 
		type: {
			"default": [0, 3],
		}, 
		mega: {
			default: {
				type: [0, 3],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 374,
		name: "Beldum",
		jp_name: "ダンバル",
		desc: {
			"default": "Iron Ball Pokémon",
		}, 
		type: {
			"default": [15, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 375,
		name: "Metang",
		jp_name: "メタング",
		desc: {
			"default": "Iron Claw Pokémon",
		}, 
		type: {
			"default": [15, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 376,
		name: "Metagross",
		jp_name: "メタグロス",
		desc: {
			"default": "Iron Leg Pokémon",
		}, 
		type: {
			"default": [15, 16],
		}, 
		mega: {
			default: {
				type: [15, 16],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 377,
		name: "Regirock",
		jp_name: "レジロック",
		desc: {
			"default": "Rock Peak Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 378,
		name: "Regice",
		jp_name: "レジアイス",
		desc: {
			"default": "Iceberg Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 379,
		name: "Registeel",
		jp_name: "レジスチル",
		desc: {
			"default": "Iron Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 380,
		name: "Latias",
		jp_name: "ラティアス",
		desc: {
			"default": "Eon Pokémon",
		}, 
		type: {
			"default": [0, 16],
		}, 
		mega: {
			default: {
				type: [0, 16],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 381,
		name: "Latios",
		jp_name: "ラティオス",
		desc: {
			"default": "Eon Pokémon",
		}, 
		type: {
			"default": [0, 16],
		}, 
		mega: {
			default: {
				type: [0, 16],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 382,
		name: "Kyogre",
		jp_name: "カイオーガ",
		desc: {
			"default": "Sea Basin Pokémon",
			"primal": "Sea Basin Pokémon",
		}, 
		type: {
			"default": [6, -1],
			"primal": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 383,
		name: "Groudon",
		jp_name: "グラードン",
		desc: {
			"default": "Continent Pokémon",
			"primal": "Continent Pokémon",
		}, 
		type: {
			"default": [2, -1],
			"primal": [2, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 384,
		name: "Rayquaza",
		jp_name: "レックウザ",
		desc: {
			"default": "Sky High Pokémon",
		}, 
		type: {
			"default": [0, 3],
		}, 
		mega: {
			default: {
				type: [0, 3],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 385,
		name: "Jirachi",
		jp_name: "ジラーチ",
		desc: {
			"default": "Wish Pokémon",
		}, 
		type: {
			"default": [15, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 386,
		name: "Deoxys",
		jp_name: "デオキシス",
		desc: {
			"normal_forme": "DNA Pokémon",
			"attack_forme": "DNA Pokémon",
			"defense_forme": "DNA Pokémon",
			"speed_forme": "DNA Pokémon",
		}, 
		jp_desc: {
			"normal_forme": "ノーマルフォルム",
			"attack_forme": "アタックフォルム",
			"defense_forme": "ディフィンスッフォルム",
			"speed_forme": "スピードフォルム",
		}, 
		type: {
			"normal_forme": [16, -1],
			"attack_forme": [16, -1],
			"defense_forme": [16, -1],
			"speed_forme": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 387,
		name: "Turtwig",
		jp_name: "ナエトル",
		desc: {
			"default": "Tiny Leaf Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 388,
		name: "Grotle",
		jp_name: "ハヤシガメ",
		desc: {
			"default": "Grove Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 389,
		name: "Torterra",
		jp_name: "ドダイトス",
		desc: {
			"default": "Continent Pokémon",
		}, 
		type: {
			"default": [9, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 390,
		name: "Chimchar",
		jp_name: "ヒコザル",
		desc: {
			"default": "Chimp Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 391,
		name: "Monferno",
		jp_name: "モウカザル",
		desc: {
			"default": "Playful Pokémon",
		}, 
		type: {
			"default": [13, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 392,
		name: "Infernape",
		jp_name: "ゴウカザル",
		desc: {
			"default": "Flame Pokémon",
		}, 
		type: {
			"default": [13, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 393,
		name: "Piplup",
		jp_name: "ポッチャマ",
		desc: {
			"default": "Penguin Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 394,
		name: "Prinplup",
		jp_name: "ポッタイシ",
		desc: {
			"default": "Penguin Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 395,
		name: "Empoleon",
		jp_name: "エンペルト",
		desc: {
			"default": "Emperor Pokémon",
		}, 
		type: {
			"default": [6, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 396,
		name: "Starly",
		jp_name: "ムックル",
		desc: {
			"default": "Starling Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 397,
		name: "Staravia",
		jp_name: "ムクバード",
		desc: {
			"default": "Starling Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 398,
		name: "Staraptor",
		jp_name: "ムクホーク",
		desc: {
			"default": "Predator Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 399,
		name: "Bidoof",
		jp_name: "ビッパ",
		desc: {
			"default": "Plump Mouse Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 400,
		name: "Bibarel",
		jp_name: "ビーダル",
		desc: {
			"default": "Beaver Pokémon",
		}, 
		type: {
			"default": [12, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 401,
		name: "Kricketot",
		jp_name: "コロボーシ",
		desc: {
			"default": "Cricket Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 402,
		name: "Kricketune",
		jp_name: "コロトック",
		desc: {
			"default": "Cricket Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 403,
		name: "Shinx",
		jp_name: "コリンク",
		desc: {
			"default": "Flash Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 404,
		name: "Luxio",
		jp_name: "ルクシオ",
		desc: {
			"default": "Spark Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 405,
		name: "Luxray",
		jp_name: "レントラー",
		desc: {
			"default": "Gleam Eyes Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 406,
		name: "Budew",
		jp_name: "スボミー",
		desc: {
			"default": "Bud Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 407,
		name: "Roserade",
		jp_name: "ロズレイド",
		desc: {
			"default": "Bouquet Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 408,
		name: "Cranidos",
		jp_name: "ズガイドス",
		desc: {
			"default": "Head Butt Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 409,
		name: "Rampardos",
		jp_name: "ラムパルド",
		desc: {
			"default": "Head Butt Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 410,
		name: "Shieldon",
		jp_name: "タテトプス",
		desc: {
			"default": "Shield Pokémon",
		}, 
		type: {
			"default": [8, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 411,
		name: "Bastiodon",
		jp_name: "トリデプス",
		desc: {
			"default": "Shield Pokémon",
		}, 
		type: {
			"default": [8, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 412,
		name: "Burmy",
		jp_name: "ミノムッチ",
		desc: {
			"default": "Bagworm Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 413,
		name: "Wormadam",
		jp_name: "ミノマダム",
		desc: {
			"plant_cloak": "Bagworm Pokémon",
			"sandy_cloak": "Bagworm Pokémon",
			"trash_cloak": "Bagworm Pokémon",
		}, 
		jp_desc: {
			"plant_cloak": "くさきのミノ",
			"sandy_cloak": "すなちのミノ",
			"trash_cloak": "ゴミの",
		}, 
		type: {
			"plant_cloak": [5, 9],
			"sandy_cloak": [5, 2],
			"trash_cloak": [5, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 414,
		name: "Mothim",
		jp_name: "ガーメイル",
		desc: {
			"default": "Moth Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 415,
		name: "Combee",
		jp_name: "ミツハニー",
		desc: {
			"default": "Tiny Bee Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 416,
		name: "Vespiquen",
		jp_name: "ビークイン",
		desc: {
			"default": "Beehive Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 417,
		name: "Pachirisu",
		jp_name: "パチリス",
		desc: {
			"default": "EleSquirrel Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 418,
		name: "Buizel",
		jp_name: "ブイゼル",
		desc: {
			"default": "Sea Weasel Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 419,
		name: "Floatzel",
		jp_name: "フローゼル",
		desc: {
			"default": "Sea Weasel Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 420,
		name: "Cherubi",
		jp_name: "チェリンボ",
		desc: {
			"default": "Cherry Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 421,
		name: "Cherrim",
		jp_name: "チェリム",
		desc: {
			"default": "Blossom Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 422,
		name: "Shellos",
		jp_name: "カラナクシ",
		desc: {
			"default": "Sea Slug Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 423,
		name: "Gastrodon",
		jp_name: "トリトドン",
		desc: {
			"default": "Sea Slug Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 424,
		name: "Ambipom",
		jp_name: "エテボース",
		desc: {
			"default": "Long Tail Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 425,
		name: "Drifloon",
		jp_name: "フワンテ",
		desc: {
			"default": "Balloon Pokémon",
		}, 
		type: {
			"default": [1, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 426,
		name: "Drifblim",
		jp_name: "フワライド",
		desc: {
			"default": "Blimp Pokémon",
		}, 
		type: {
			"default": [1, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 427,
		name: "Buneary",
		jp_name: "ミミロル",
		desc: {
			"default": "Rabbit Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 428,
		name: "Lopuny",
		jp_name: "ミミロップ",
		desc: {
			"default": "Rabbit Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: {
			default: {
				type: [12, 14],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 429,
		name: "Mismagius",
		jp_name: "ムウマージ",
		desc: {
			"default": "Magical Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 430,
		name: "Honchkrow",
		jp_name: "ドンカラス",
		desc: {
			"default": "Big Boss Pokémon",
		}, 
		type: {
			"default": [10, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 431,
		name: "Glameow",
		jp_name: "ニャルマー",
		desc: {
			"default": "Catty Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 432,
		name: "Purugly",
		jp_name: "ブニャット",
		desc: {
			"default": "Tiger Cat Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 433,
		name: "Chingling",
		jp_name: "リーシャン",
		desc: {
			"default": "Bell Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 434,
		name: "Stunky",
		jp_name: "スカンプー",
		desc: {
			"default": "Skunk Pokémon",
		}, 
		type: {
			"default": [4, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 435,
		name: "Skunktank",
		jp_name: "スカタンク",
		desc: {
			"default": "Skunk Pokémon",
		}, 
		type: {
			"default": [4, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 436,
		name: "Bronzor",
		jp_name: "ドーミラー",
		desc: {
			"default": "Bronze Pokémon",
		}, 
		type: {
			"default": [15, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 437,
		name: "Bronzong",
		jp_name: "ドータンクン",
		desc: {
			"default": "Bronze Bell Pokémon",
		}, 
		type: {
			"default": [15, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 438,
		name: "Bonsly",
		jp_name: "ウソハチ",
		desc: {
			"default": "Bonsai Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 439,
		name: "Mime Jr.",
		jp_name: "マネネ",
		desc: {
			"default": "Mime Pokémon",
		}, 
		type: {
			"default": [16, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 440,
		name: "Happiny",
		jp_name: "ピンプク",
		desc: {
			"default": "Playhouse Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 441,
		name: "Chatot",
		jp_name: "ぺラップ",
		desc: {
			"default": "Music Note Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 442,
		name: "Spiritomb",
		jp_name: "ミカルゲ",
		desc: {
			"default": "Forbidden Pokémon",
		}, 
		type: {
			"default": [1, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 443,
		name: "Gible",
		jp_name: "フカマル",
		desc: {
			"default": "Land Shark Pokémon",
		}, 
		type: {
			"default": [0, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 444,
		name: "Gabite",
		jp_name: "がバイト",
		desc: {
			"default": "Cave Pokémon",
		}, 
		type: {
			"default": [0, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 445,
		name: "Garchomp",
		jp_name: "ガブリアス",
		desc: {
			"default": "Mach Pokémon",
		}, 
		type: {
			"default": [0, 2],
		}, 
		mega: {
			default: {
				type: [0, 2],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 446,
		name: "Munchlax",
		jp_name: "ゴンベ",
		desc: {
			"default": "Big Eater Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 447,
		name: "Riolu",
		jp_name: "リオル",
		desc: {
			"default": "Emanation Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 448,
		name: "Lucario",
		jp_name: "ルカリオ",
		desc: {
			"default": "Aura Pokémon",
		}, 
		type: {
			"default": [14, 15],
		}, 
		mega: {
			default: {
				type: [14, 15],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 449,
		name: "Hippopotas",
		jp_name: "ヒポポタス",
		desc: {
			"default": "Hippo Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 450,
		name: "Hippowdon",
		jp_name: "カバルドン",
		desc: {
			"default": "Heavyweight Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 451,
		name: "Skorupi",
		jp_name: "スコルピ",
		desc: {
			"default": "Scorpion Pokémon",
		}, 
		type: {
			"default": [4, 5],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 452,
		name: "Drapion",
		jp_name: "ドラピオン",
		desc: {
			"default": "Ogre Scorpion Pokémon",
		}, 
		type: {
			"default": [4, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 453,
		name: "Croagunk",
		jp_name: "グレッグル",
		desc: {
			"default": "Toxic Mouth Pokémon",
		}, 
		type: {
			"default": [4, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 454,
		name: "Toxicroak",
		jp_name: "ドクロッグ",
		desc: {
			"default": "Toxic Mouth Pokémon",
		}, 
		type: {
			"default": [4, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 455,
		name: "Carnivine",
		jp_name: "マスキッパ",
		desc: {
			"default": "Bug Catcher Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 456,
		name: "Finneon",
		jp_name: "ケイコウオ",
		desc: {
			"default": "Wing Fish Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 457,
		name: "Lumineon",
		jp_name: "ネオラント",
		desc: {
			"default": "Neon Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 458,
		name: "Mantyke",
		jp_name: "タマンタ",
		desc: {
			"default": "Kite Pokémon",
		}, 
		type: {
			"default": [6, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 459,
		name: "Snover",
		jp_name: "ユキカブリ",
		desc: {
			"default": "Frost Tree Pokémon",
		}, 
		type: {
			"default": [9, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 460,
		name: "Abomasnow",
		jp_name: "ユキノオー",
		desc: {
			"default": "Frost Tree Pokémon",
		}, 
		type: {
			"default": [9, 11],
		}, 
		mega: {
			default: {
				type: [9, 11],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 461,
		name: "Weavile",
		jp_name: "マニューラ",
		desc: {
			"default": "Magnet Area Pokémon",
		}, 
		type: {
			"default": [10, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 462,
		name: "Magnezone",
		jp_name: "ジバコイル",
		desc: {
			"default": "",
		}, 
		type: {
			"default": [7, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 463,
		name: "Lickilicky",
		jp_name: "べろベルト",
		desc: {
			"default": "Licking Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 464,
		name: "Rhyperior",
		jp_name: "ドサイドン",
		desc: {
			"default": "Drill Pokémon",
		}, 
		type: {
			"default": [2, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 465,
		name: "Tangrowth",
		jp_name: "モジャンボ",
		desc: {
			"default": "Vine Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 466,
		name: "Electivire",
		jp_name: "エレキブル",
		desc: {
			"default": "Thunderbolt Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 467,
		name: "Magmotar",
		jp_name: "ブーバーン",
		desc: {
			"default": "Blast Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 468,
		name: "Togekiss",
		jp_name: "トゲキッス",
		desc: {
			"default": "Jubilee Pokémon",
		}, 
		type: {
			"default": [17, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 469,
		name: "Yanmega",
		jp_name: "メガヤンマ",
		desc: {
			"default": "Ogre Darner Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 470,
		name: "Leafeon",
		jp_name: "リーフィア",
		desc: {
			"default": "Verdant Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 471,
		name: "Glaceon",
		jp_name: "グレイシア",
		desc: {
			"default": "Fresh Snow Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 472,
		name: "Gliscor",
		jp_name: "グライオン",
		desc: {
			"default": "Fang Scorpion Pokémon",
		}, 
		type: {
			"default": [2, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 473,
		name: "Mamoswine",
		jp_name: "マンムー",
		desc: {
			"default": "Twin Tusk Pokémon",
		}, 
		type: {
			"default": [11, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 474,
		name: "Porygon-z",
		jp_name: "ポリゴンZ",
		desc: {
			"default": "Blade Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 475,
		name: "Gallade",
		jp_name: "エルレイド",
		desc: {
			"default": "",
		}, 
		type: {
			"default": [16, 14],
		}, 
		mega: {
			default: {
				type: [16, 14],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 476,
		name: "Probopass",
		jp_name: "ダイノーズ",
		desc: {
			"default": "Compass Pokémon",
		}, 
		type: {
			"default": [8, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 477,
		name: "Dusknoir",
		jp_name: "ヨノワール",
		desc: {
			"default": "Gripper Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 478,
		name: "Froslass",
		jp_name: "ユキメノコ",
		desc: {
			"default": "Snow Land Pokémon",
		}, 
		type: {
			"default": [11, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 479,
		name: "Rotom",
		jp_name: "ロトム",
		desc: {
			"default": "Plasma Pokémon",
			"heat_rotom": "Plasma Pokémon",
			"wash_rotom": "Plasma Pokémon",
			"frost_rotom": "Plasma Pokémon",
			"fan_rotom": "Plasma Pokémon",
			"mow_rotom": "Plasma Pokémon",
		}, 
		jp_desc: {
			"heat_rotom": "ヒートロトム",
			"wash_rotom": "ウォッシュロトム",
			"frost_rotom": "フロストロトム",
			"fan_rotom": "スピンロトム",
			"mow_rotom": "カットロトム",
		}, 
		type: {
			"default": [7, 1],
			"heat_rotom": [7, 13],
			"wash_rotom": [7, 6],
			"frost_rotom": [7, 11],
			"fan_rotom": [7, 3],
			"mow_rotom": [7, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 480,
		name: "Uxie",
		jp_name: "ユクシー",
		desc: {
			"default": "Knowledge Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 481,
		name: "Mesprit",
		jp_name: "エムリット",
		desc: {
			"default": "Emotion Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 482,
		name: "Azelf",
		jp_name: "アグノム",
		desc: {
			"default": "Willpower Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 483,
		name: "Dialga",
		jp_name: "ディアルガ",
		desc: {
			"default": "Temporal Pokémon",
		}, 
		type: {
			"default": [15, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 484,
		name: "Palkia",
		jp_name: "パルキア",
		desc: {
			"default": "Spatial Pokémon",
		}, 
		type: {
			"default": [6, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 485,
		name: "Heatran",
		jp_name: "ヒードラン",
		desc: {
			"default": "Lava Dome Pokémon",
		}, 
		type: {
			"default": [13, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 486,
		name: "Regigigas",
		jp_name: "レジギガス",
		desc: {
			"default": "Colossal Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 487,
		name: "Giratina",
		jp_name: "ギラティナ",
		desc: {
			"default": "Renegade Pokémon",
		}, 
		type: {
			"default": [1, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 488,
		name: "Cresselia",
		jp_name: "クレセリア",
		desc: {
			"default": "Lunar Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 489,
		name: "Phione",
		jp_name: "フィオネ",
		desc: {
			"default": "Sea Drifter Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 490,
		name: "Manaphy",
		jp_name: "マナフィ",
		desc: {
			"default": "Seafaring Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 491,
		name: "Darkrai",
		jp_name: "ダークライ",
		desc: {
			"default": "Pitch-Black Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 492,
		name: "Shaymin",
		jp_name: "シェイミ",
		desc: {
			"land_forme": "Gratitude Pokémon",
			"sky_forme": "Gratitude Pokémon",
		}, 
		jp_desc: {
			"land_forme": "ランドフォルム",
			"sky_forme": "スカイフォルム",
		}, 
		type: {
			"land_forme": [9, -1],
			"sky_forme": [9, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 493,
		name: "Arceus",
		jp_name: "アルセウス",
		desc: {
			"default": "Alpha Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 494,
		name: "Victini",
		jp_name: "ビクティニ",
		desc: {
			"default": "Victory Pokémon",
		}, 
		type: {
			"default": [16, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 495,
		name: "Snivy",
		jp_name: "ツタージャ",
		desc: {
			"default": "Grass Snake Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 496,
		name: "Servine",
		jp_name: "ジャノビー",
		desc: {
			"default": "Grass Snake Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 497,
		name: "Serperior",
		jp_name: "ジャローダ",
		desc: {
			"default": "Regal Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 498,
		name: "Tepig",
		jp_name: "ポカブ",
		desc: {
			"default": "Fire Pig Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 499,
		name: "Pignite",
		jp_name: "チャオブー",
		desc: {
			"default": "Fire Pig Pokémon",
		}, 
		type: {
			"default": [13, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 500,
		name: "Emboar",
		jp_name: "エンブオー",
		desc: {
			"default": "Mega Fire Pig Pokémon",
		}, 
		type: {
			"default": [13, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 501,
		name: "Oshawott",
		jp_name: "ミジュマル",
		desc: {
			"default": "Sea Otter Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 502,
		name: "Dewott",
		jp_name: "フタチマル",
		desc: {
			"default": "Discipline Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 503,
		name: "Samurott",
		jp_name: "ダイケンキ",
		desc: {
			"default": "Formidable Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 504,
		name: "Patrat",
		jp_name: "ミネズミ",
		desc: {
			"default": "Scout Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 505,
		name: "Watchog",
		jp_name: "ミルホッグ",
		desc: {
			"default": "Lookout Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 506,
		name: "Lillipup",
		jp_name: "ヨーテリー",
		desc: {
			"default": "Puppy Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 507,
		name: "Herdier",
		jp_name: "ハーデリア",
		desc: {
			"default": "Loyal Dog Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 508,
		name: "Stoutland",
		jp_name: "ムーランド",
		desc: {
			"default": "Big-Hearted Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 509,
		name: "Purrloin",
		jp_name: "チョロネコ",
		desc: {
			"default": "Devious Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 510,
		name: "Liepard",
		jp_name: "レパルダス",
		desc: {
			"default": "Cruel Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 511,
		name: "Pansage",
		jp_name: "ヤナップ",
		desc: {
			"default": "Grass Monkey Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 512,
		name: "Simisage",
		jp_name: "ヤナッキー",
		desc: {
			"default": "Thorn Monkey Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 513,
		name: "Pansear",
		jp_name: "バオップ",
		desc: {
			"default": "High Temp Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 514,
		name: "Simisear",
		jp_name: "バオッキー",
		desc: {
			"default": "Ember Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 515,
		name: "Panpour",
		jp_name: "ヒヤップ",
		desc: {
			"default": "Spray Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 516,
		name: "Simipour",
		jp_name: "ヒヤッキー",
		desc: {
			"default": "Geyser Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 517,
		name: "Munna",
		jp_name: "ムンナ",
		desc: {
			"default": "Dream Eating Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 518,
		name: "Musharna",
		jp_name: "ムシャーナ",
		desc: {
			"default": "Drowsing Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 519,
		name: "Pidove",
		jp_name: "マメパト",
		desc: {
			"default": "Tiny Pigeon Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 520,
		name: "Tranquil",
		jp_name: "ハトーボー",
		desc: {
			"default": "Wild Pigeon Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 521,
		name: "Unfezant",
		jp_name: "ケンホロウ",
		desc: {
			"default": "Proud Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 522,
		name: "Blitzle",
		jp_name: "シママ",
		desc: {
			"default": "Electrified Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 523,
		name: "Zebstrika",
		jp_name: "ゼブライカ",
		desc: {
			"default": "Thunderbolt Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 524,
		name: "Roggenrola",
		jp_name: "ダンゴロ",
		desc: {
			"default": "Mantle Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 525,
		name: "Boldore",
		jp_name: "ガントル",
		desc: {
			"default": "Ore Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 526,
		name: "Gigalith",
		jp_name: "ギガイアス",
		desc: {
			"default": "Compressed Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 527,
		name: "Woobat",
		jp_name: "コロモリ",
		desc: {
			"default": "Bat Pokémon",
		}, 
		type: {
			"default": [16, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 528,
		name: "Swoobat",
		jp_name: "ココロモリ",
		desc: {
			"default": "Courting Pokémon",
		}, 
		type: {
			"default": [16, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 529,
		name: "Drilbur",
		jp_name: "モグリュー",
		desc: {
			"default": "Mole Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 530,
		name: "Excadrill",
		jp_name: "ドリュウズ",
		desc: {
			"default": "Subterrene Pokémon",
		}, 
		type: {
			"default": [2, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 531,
		name: "Audino",
		jp_name: "タブンネ",
		desc: {
			"default": "Hearing Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: {
			default: {
				type: [12, 17],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 532,
		name: "Timburr",
		jp_name: "ドッコラー",
		desc: {
			"default": "Muscular Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 533,
		name: "Gurdurr",
		jp_name: "ドテッコツ",
		desc: {
			"default": "Muscular Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 534,
		name: "Conkeldurr",
		jp_name: "ローブシン",
		desc: {
			"default": "Muscular Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 535,
		name: "Tympole",
		jp_name: "オタマロ",
		desc: {
			"default": "Tadpole Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 536,
		name: "Palipitoad",
		jp_name: "ガマガル",
		desc: {
			"default": "Vibration Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 537,
		name: "Seismitoad",
		jp_name: "ガマゲロゲ",
		desc: {
			"default": "Vibration Pokémon",
		}, 
		type: {
			"default": [6, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 538,
		name: "Throh",
		jp_name: "ナゲキ",
		desc: {
			"default": "Judo Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 539,
		name: "Sawk",
		jp_name: "ダゲキ",
		desc: {
			"default": "Karate Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 540,
		name: "Sewaddle",
		jp_name: "クルミル",
		desc: {
			"default": "Sewing Pokémon",
		}, 
		type: {
			"default": [5, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 541,
		name: "Swadloon",
		jp_name: "クルマユ",
		desc: {
			"default": "Leaf-Wrapped Pokémon",
		}, 
		type: {
			"default": [5, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 542,
		name: "Leavanny",
		jp_name: "ハハコモリ",
		desc: {
			"default": "Nurturing Pokémon",
		}, 
		type: {
			"default": [5, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 543,
		name: "Venipede",
		jp_name: "フシデ",
		desc: {
			"default": "Centipede Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 544,
		name: "Whirlipede",
		jp_name: "ホイーガ",
		desc: {
			"default": "Curlipede Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 545,
		name: "Scolipede",
		jp_name: "ペンドラー",
		desc: {
			"default": "Megapede Pokémon",
		}, 
		type: {
			"default": [5, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 546,
		name: "Cottonee",
		jp_name: "モンメン",
		desc: {
			"default": "Cotton Puff Pokémon",
		}, 
		type: {
			"default": [9, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 547,
		name: "Whimsicott",
		jp_name: "エルフーン",
		desc: {
			"default": "Windveiled Pokémon",
		}, 
		type: {
			"default": [9, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 548,
		name: "Petilil",
		jp_name: "チュリネ",
		desc: {
			"default": "Bulb Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 549,
		name: "Lilligant",
		jp_name: "ドレディア",
		desc: {
			"default": "Flowering Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 550,
		name: "Basculin",
		jp_name: "バスラオ",
		desc: {
			"default": "Hostile Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 551,
		name: "Sandile",
		jp_name: "メグロコ",
		desc: {
			"default": "Desert Croc Pokémon",
		}, 
		type: {
			"default": [2, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 552,
		name: "Krokorok",
		jp_name: "ワルビル",
		desc: {
			"default": "Desert Croc Pokémon",
		}, 
		type: {
			"default": [2, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 553,
		name: "Krookodile",
		jp_name: "ワルビアル",
		desc: {
			"default": "Intimidation Pokémon",
		}, 
		type: {
			"default": [2, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 554,
		name: "Darumaka",
		jp_name: "ダルマッカ",
		desc: {
			"default": "Zen Charm Pokémon",
			"galar_variant": "Zen Charm Pokémon",
		}, 
		type: {
			"default": [13, -1],
			"galar_variant": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 555,
		name: "Darmanitan",
		jp_name: "ヒヒダルマ",
		desc: {
			"galar_standard_mode": "Zen Charm Pokémon",
			"galar_zen_mode": "Zen Charm Pokémon",
			"standard_mode": "Blazing Pokémon",
			"zen_mode": "Blazing Pokémon",
		}, 
		jp_desc: {
			"galar_standard_mode": "ガラルノーマルモード",
			"galar_zen_mode": "ガラルダルマモード",
			"standard_mode": "ノーマルモード",
			"zen_mode": "ダルマモード",
		}, 
		type: {
			"galar_standard_mode": [11, -1],
			"galar_zen_mode": [11, 13],
			"standard_mode": [13, -1],
			"zen_mode": [13, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 556,
		name: "Maractus",
		jp_name: "マラカッチ",
		desc: {
			"default": "Cactus Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 557,
		name: "Dwebble",
		jp_name: "イシズマイ",
		desc: {
			"default": "Rock Inn Pokémon",
		}, 
		type: {
			"default": [5, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 558,
		name: "Crustle",
		jp_name: "イワパレス",
		desc: {
			"default": "Stone Home Pokémon",
		}, 
		type: {
			"default": [5, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 559,
		name: "Scraggy",
		jp_name: "ズルッグ",
		desc: {
			"default": "Shredding Pokémon",
		}, 
		type: {
			"default": [10, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 560,
		name: "Scrafty",
		jp_name: "ズルズキン",
		desc: {
			"default": "Hoodlum Pokémon",
		}, 
		type: {
			"default": [10, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 561,
		name: "Sigilyph",
		jp_name: "シンボラー",
		desc: {
			"default": "Avianoid Pokémon",
		}, 
		type: {
			"default": [16, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 562,
		name: "Yamask",
		jp_name: "デスマス",
		desc: {
			"default": "Spirit Pokémon",
			"galar_variant": "Spirit Pokémon",
		}, 
		type: {
			"default": [1, -1],
			"galar_variant": [2, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 563,
		name: "Cofagrigus",
		jp_name: "デスカーン",
		desc: {
			"default": "Coffin Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 564,
		name: "Tirtouga",
		jp_name: "プロトーガ",
		desc: {
			"default": "Prototurtle Pokémon",
		}, 
		type: {
			"default": [6, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 565,
		name: "Carracosta",
		jp_name: "アバゴーラ",
		desc: {
			"default": "Prototurtle Pokémon",
		}, 
		type: {
			"default": [6, 8],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 566,
		name: "Archen",
		jp_name: "アーケン",
		desc: {
			"default": "First Bird Pokémon",
		}, 
		type: {
			"default": [8, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 567,
		name: "Archeops",
		jp_name: "アーケオス",
		desc: {
			"default": "First Bird Pokémon",
		}, 
		type: {
			"default": [8, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 568,
		name: "Trubbish",
		jp_name: "ヤブクロン",
		desc: {
			"default": "Trash Bag Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 569,
		name: "Garbodor",
		jp_name: "ダストダス",
		desc: {
			"default": "Trash Heap Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Malodor",
				g_max_type: 4,
			}
		}, 
	}, 
	{
		id: 570,
		name: "Zorua",
		jp_name: "ゾロア",
		desc: {
			"default": "Tricky Fox Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 571,
		name: "Zoroark",
		jp_name: "ゾロアーク",
		desc: {
			"default": "Illusion Fox Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 572,
		name: "Minccino",
		jp_name: "チラーミィ",
		desc: {
			"default": "Chinchilla Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 573,
		name: "Cinccino",
		jp_name: "チラチーノ",
		desc: {
			"default": "Scarf Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 574,
		name: "Gothita",
		jp_name: "ゴチム",
		desc: {
			"default": "Fixation Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 575,
		name: "Gothorita",
		jp_name: "ゴチミル",
		desc: {
			"default": "Manipulate Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 576,
		name: "Gothitelle",
		jp_name: "ゴチルゼル",
		desc: {
			"default": "Astral Body Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 577,
		name: "Solosis",
		jp_name: "ユニラン",
		desc: {
			"default": "Cell Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 578,
		name: "Duosion",
		jp_name: "ダブラン",
		desc: {
			"default": "Mitosis Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 579,
		name: "Reuniclus",
		jp_name: "ランクルス",
		desc: {
			"default": "Multiplying Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 580,
		name: "Ducklett",
		jp_name: "コアルヒー",
		desc: {
			"default": "Water Bird Pokémon",
		}, 
		type: {
			"default": [6, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 581,
		name: "Swanna",
		jp_name: "スワンナ",
		desc: {
			"default": "White Bird Pokémon",
		}, 
		type: {
			"default": [6, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 582,
		name: "Vanillite",
		jp_name: "バニプッチ",
		desc: {
			"default": "Fresh Snow Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 583,
		name: "Vanillish",
		jp_name: "バニリッチ",
		desc: {
			"default": "Icy Snow Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 584,
		name: "Vanilluxe",
		jp_name: "バイバニラ",
		desc: {
			"default": "Snowstorm Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 585,
		name: "Deerling",
		jp_name: "シキジカ",
		desc: {
			"default": "Season Pokémon",
		}, 
		type: {
			"default": [12, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 586,
		name: "Sawsbuck",
		jp_name: "メブキジカ",
		desc: {
			"default": "Season Pokémon",
		}, 
		type: {
			"default": [12, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 587,
		name: "Emolga",
		jp_name: "エモンガ",
		desc: {
			"default": "Sky Squirrel Pokémon",
		}, 
		type: {
			"default": [7, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 588,
		name: "Karrablast",
		jp_name: "カブルモ",
		desc: {
			"default": "Clamping Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 589,
		name: "Escavalier",
		jp_name: "シュバルゴ",
		desc: {
			"default": "Cavalry Pokémon",
		}, 
		type: {
			"default": [5, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 590,
		name: "Foongus",
		jp_name: "タマゲタケ",
		desc: {
			"default": "Mushroom Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 591,
		name: "Amoonguss",
		jp_name: "モロバレル",
		desc: {
			"default": "Mushroom Pokémon",
		}, 
		type: {
			"default": [9, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 592,
		name: "Frillish",
		jp_name: "プルリル",
		desc: {
			"default": "Floating Pokémon",
		}, 
		type: {
			"default": [6, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 593,
		name: "Jellicent",
		jp_name: "ブルンゲル",
		desc: {
			"default": "Floating Pokémon",
		}, 
		type: {
			"default": [6, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 594,
		name: "Alomomola",
		jp_name: "ママンボウ",
		desc: {
			"default": "Caring Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 595,
		name: "Joltik",
		jp_name: "バチュル",
		desc: {
			"default": "Attaching Pokémon",
		}, 
		type: {
			"default": [5, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 596,
		name: "Galvantula",
		jp_name: "デンチュラ",
		desc: {
			"default": "EleSpider Pokémon",
		}, 
		type: {
			"default": [5, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 597,
		name: "Ferroseed",
		jp_name: "テッシード",
		desc: {
			"default": "Thorn Seed Pokémon",
		}, 
		type: {
			"default": [9, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 598,
		name: "Ferrothorn",
		jp_name: "ナットレイ",
		desc: {
			"default": "Thorn Pod Pokémon",
		}, 
		type: {
			"default": [9, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 599,
		name: "Klink",
		jp_name: "ギアル",
		desc: {
			"default": "Gear Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 600,
		name: "Klang",
		jp_name: "ギギアル",
		desc: {
			"default": "Gear Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 601,
		name: "Klinklang",
		jp_name: "ギギギアル",
		desc: {
			"default": "Gear Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 602,
		name: "Tynamo",
		jp_name: "シビシラス",
		desc: {
			"default": "EleFish Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 603,
		name: "Eelektrik",
		jp_name: "シビビール",
		desc: {
			"default": "EleFish Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 604,
		name: "Eelektross",
		jp_name: "シビルドン",
		desc: {
			"default": "EleFish Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 605,
		name: "Elgyem",
		jp_name: "リグレー",
		desc: {
			"default": "Cerebral Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 606,
		name: "Beheeyem",
		jp_name: "オーベム",
		desc: {
			"default": "Cerebral Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 607,
		name: "Litwick",
		jp_name: "ヒトモシ",
		desc: {
			"default": "Candle Pokémon",
		}, 
		type: {
			"default": [1, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 608,
		name: "Lampent",
		jp_name: "ランプラー",
		desc: {
			"default": "Lamp Pokémon",
		}, 
		type: {
			"default": [1, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 609,
		name: "Chandelure",
		jp_name: "シャンデラ",
		desc: {
			"default": "Luring Pokémon",
		}, 
		type: {
			"default": [1, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 610,
		name: "Axew",
		jp_name: "キバゴ",
		desc: {
			"default": "Tusk Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 611,
		name: "Fraxure",
		jp_name: "オノンド",
		desc: {
			"default": "Axe Jaw Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 612,
		name: "Haxorus",
		jp_name: "オノノクス",
		desc: {
			"default": "Axe Jaw Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 613,
		name: "Cubchoo",
		jp_name: "クマシュン",
		desc: {
			"default": "Chill Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 614,
		name: "Beartic",
		jp_name: "ツンベアー",
		desc: {
			"default": "Freezing Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 615,
		name: "Cryogonal",
		jp_name: "フリージオ",
		desc: {
			"default": "Crystallizing Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 616,
		name: "Shelmet",
		jp_name: "チョボマキ",
		desc: {
			"default": "Snail Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 617,
		name: "Accelgor",
		jp_name: "アギルダー",
		desc: {
			"default": "Shell Out Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 618,
		name: "Stunfisk",
		jp_name: "マッギョ",
		desc: {
			"default": "Trap Pokémon",
			"galar_variant": "Trap Pokémon",
		}, 
		type: {
			"default": [2, 7],
			"galar_variant": [2, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 619,
		name: "Mienfoo",
		jp_name: "コジョフー",
		desc: {
			"default": "Martial Arts Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 620,
		name: "Mienshao",
		jp_name: "コジョンド",
		desc: {
			"default": "Martial Arts Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 621,
		name: "Druddigon",
		jp_name: "クリムガン",
		desc: {
			"default": "Cave Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 622,
		name: "Golett",
		jp_name: "ゴビット",
		desc: {
			"default": "Automaton Pokémon",
		}, 
		type: {
			"default": [2, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 623,
		name: "Golurk",
		jp_name: "ゴルーグ",
		desc: {
			"default": "Automaton Pokémon",
		}, 
		type: {
			"default": [2, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 624,
		name: "Pawniard",
		jp_name: "コマタナ",
		desc: {
			"default": "Sharp Blade Pokémon",
		}, 
		type: {
			"default": [10, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 625,
		name: "Bisharp",
		jp_name: "キリキザン",
		desc: {
			"default": "Sword Blade Pokémon",
		}, 
		type: {
			"default": [10, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 626,
		name: "Bouffalant",
		jp_name: "バッフロン",
		desc: {
			"default": "Bash Buffalo Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 627,
		name: "Rufflet",
		jp_name: "ワシボン",
		desc: {
			"default": "Eaglet Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 628,
		name: "Braviary",
		jp_name: "ウォーグル",
		desc: {
			"default": "Valiant Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 629,
		name: "Vullaby",
		jp_name: "バルチャイ",
		desc: {
			"default": "Diapered Pokémon",
		}, 
		type: {
			"default": [10, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 630,
		name: "Mandibuzz",
		jp_name: "バルジーナ",
		desc: {
			"default": "Bone Vulture Pokémon",
		}, 
		type: {
			"default": [10, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 631,
		name: "Heatmor",
		jp_name: "クイタラン",
		desc: {
			"default": "Anteater Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 632,
		name: "Durant",
		jp_name: "アイアント",
		desc: {
			"default": "Iron Ant Pokémon",
		}, 
		type: {
			"default": [5, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 633,
		name: "Deino",
		jp_name: "モノズ",
		desc: {
			"default": "Irate Pokémon",
		}, 
		type: {
			"default": [10, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 634,
		name: "Zweilous",
		jp_name: "ジヘッド",
		desc: {
			"default": "Hostile Pokémon",
		}, 
		type: {
			"default": [10, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 635,
		name: "Hydriegon",
		jp_name: "サザンドラ",
		desc: {
			"default": "Brutal Pokémon",
		}, 
		type: {
			"default": [10, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 636,
		name: "Larvesta",
		jp_name: "メラルバ",
		desc: {
			"default": "Torch Pokémon",
		}, 
		type: {
			"default": [5, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 637,
		name: "Volcarona",
		jp_name: "ウルがオス",
		desc: {
			"default": "Sun Pokémon",
		}, 
		type: {
			"default": [5, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 638,
		name: "Cobalion",
		jp_name: "コバルオン",
		desc: {
			"default": "Iron Will Pokémon",
		}, 
		type: {
			"default": [15, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 639,
		name: "Terrakion",
		jp_name: "テラキオン",
		desc: {
			"default": "Cavern Pokémon",
		}, 
		type: {
			"default": [8, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 640,
		name: "Virizion",
		jp_name: "ビリジオン",
		desc: {
			"default": "Grassland Pokémon",
		}, 
		type: {
			"default": [9, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 641,
		name: "Tornadus",
		jp_name: "トルネロス",
		desc: {
			"default": "Cyclone Pokémon",
		}, 
		type: {
			"default": [3, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 642,
		name: "Thundurus",
		jp_name: "ボルトロス",
		desc: {
			"default": "Bolt Strike Pokémon",
		}, 
		type: {
			"default": [7, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 643,
		name: "Reshiram",
		jp_name: "レシラム",
		desc: {
			"default": "Vast White Pokémon",
		}, 
		type: {
			"default": [0, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 644,
		name: "Zekrom",
		jp_name: "ゼクロム",
		desc: {
			"default": "Deep Black Pokémon",
		}, 
		type: {
			"default": [0, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 645,
		name: "Landorus",
		jp_name: "ランドロス",
		desc: {
			"default": "Abundance Pokémon",
		}, 
		type: {
			"default": [2, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 646,
		name: "Kyurem",
		jp_name: "キュレム",
		desc: {
			"default": "Boundary Pokémon",
		}, 
		type: {
			"default": [0, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 647,
		name: "Keldeo",
		jp_name: "ケルディオ",
		desc: {
			"default": "Colt Pokémon",
		}, 
		type: {
			"default": [6, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 648,
		name: "Meloetta",
		jp_name: "メロエッタ",
		desc: {
			"aria_forme": "Melody Pokémon",
			"step_forme": "Melody Pokémon",
		}, 
		jp_desc: {
			"aria_forme": "ボイスフォルム",
			"step_forme": "ステップフォルム",
		}, 
		type: {
			"aria_forme": [12, 16],
			"step_forme": [12, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 649,
		name: "Genesect",
		jp_name: "ゲノセクト",
		desc: {
			"default": "Paleozoic Pokémon",
		}, 
		type: {
			"default": [5, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 650,
		name: "Chespin",
		jp_name: "ハリマロン",
		desc: {
			"default": "Spiny Nut Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 651,
		name: "Quilladin",
		jp_name: "ハリボーグ",
		desc: {
			"default": "Spiny Armor Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 652,
		name: "Chesnaught",
		jp_name: "ブリガロン",
		desc: {
			"default": "Spiny Armor Pokémon",
		}, 
		type: {
			"default": [9, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 653,
		name: "Fennekin",
		jp_name: "フォッコ",
		desc: {
			"default": "Fox Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 654,
		name: "Braixen",
		jp_name: "テールナー",
		desc: {
			"default": "Fox Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 655,
		name: "Delphox",
		jp_name: "マフォクシー",
		desc: {
			"default": "Fox Pokémon",
		}, 
		type: {
			"default": [13, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 656,
		name: "Froakie",
		jp_name: "ケロマツ",
		desc: {
			"default": "Bubble Frog Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 657,
		name: "Frogadier",
		jp_name: "ゲコガシラ",
		desc: {
			"default": "Bubble Frog Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 658,
		name: "Greninja",
		jp_name: "ゲッコウガ",
		desc: {
			"default": "Ninja Pokémon",
		}, 
		type: {
			"default": [6, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 659,
		name: "Bunnelby",
		jp_name: "ホルビー",
		desc: {
			"default": "Digging Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 660,
		name: "Diggersby",
		jp_name: "ホルード",
		desc: {
			"default": "Digging Pokémon",
		}, 
		type: {
			"default": [12, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 661,
		name: "Fletchling",
		jp_name: "ヤヤコマ",
		desc: {
			"default": "Tiny Robin Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 662,
		name: "Fletchinder",
		jp_name: "ヒノヤコマ",
		desc: {
			"default": "Ember Pokémon",
		}, 
		type: {
			"default": [13, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 663,
		name: "Talonflame",
		jp_name: "ファイアロー",
		desc: {
			"default": "Scorching Pokémon",
		}, 
		type: {
			"default": [13, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 664,
		name: "Scatterbug",
		jp_name: "コフキムシ",
		desc: {
			"default": "Scatterdust Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 665,
		name: "Spewpa",
		jp_name: "コフーライ",
		desc: {
			"default": "Scatterdust Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 666,
		name: "Vivillon",
		jp_name: "ビビヨン",
		desc: {
			"default": "Scale Pokémon",
		}, 
		type: {
			"default": [5, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 667,
		name: "Litleo",
		jp_name: "シシコ",
		desc: {
			"default": "Lion Cub Pokémon",
		}, 
		type: {
			"default": [13, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 668,
		name: "Pyroar",
		jp_name: "カエンジシ",
		desc: {
			"default": "Royal Pokémon",
		}, 
		type: {
			"default": [13, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 669,
		name: "FlabÉbÉ",
		jp_name: "フラべべ",
		desc: {
			"default": "Single Bloom Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 670,
		name: "Floette",
		jp_name: "フラエッテ",
		desc: {
			"default": "Single Bloom Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 671,
		name: "Florges",
		jp_name: "フラージェス",
		desc: {
			"default": "Garden Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 672,
		name: "Skiddo",
		jp_name: "メェークル",
		desc: {
			"default": "Mount Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 673,
		name: "Gogoat",
		jp_name: "ゴーゴート",
		desc: {
			"default": "Mount Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 674,
		name: "Pancham",
		jp_name: "ヤンチャム",
		desc: {
			"default": "Playful Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 675,
		name: "Pangoro",
		jp_name: "ゴロンダ",
		desc: {
			"default": "Daunting Pokémon",
		}, 
		type: {
			"default": [14, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 676,
		name: "Furfrou",
		jp_name: "トリミアン",
		desc: {
			"default": "Poodle Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 677,
		name: "Espurr",
		jp_name: "ニャスパー",
		desc: {
			"default": "Restraint Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 678,
		name: "Meowstic",
		jp_name: "ニャオニクス",
		desc: {
			"default": "Constraint Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 679,
		name: "Honedge",
		jp_name: "ヒトツキ",
		desc: {
			"default": "Sword Pokémon",
		}, 
		type: {
			"default": [15, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 680,
		name: "Doublade",
		jp_name: "ニダンギル",
		desc: {
			"default": "Sword Pokémon",
		}, 
		type: {
			"default": [15, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 681,
		name: "Aegislash",
		jp_name: "ギルガルド",
		desc: {
			"default": "Royal Sword Pokémon",
		}, 
		type: {
			"default": [15, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 682,
		name: "Spritzee",
		jp_name: "シュシュプ",
		desc: {
			"default": "Perfume Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 683,
		name: "Aromatisse",
		jp_name: "フレフワン",
		desc: {
			"default": "Fragrance Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 684,
		name: "Swirlix",
		jp_name: "ペロッパフ",
		desc: {
			"default": "Cotton Candy Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 685,
		name: "Slurpuff",
		jp_name: "ペロリーム",
		desc: {
			"default": "Meringue Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 686,
		name: "Inkay",
		jp_name: "マーイーカ",
		desc: {
			"default": "Revolving Pokémon",
		}, 
		type: {
			"default": [10, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 687,
		name: "Malamar",
		jp_name: "カラマネロ",
		desc: {
			"default": "Overturning Pokémon",
		}, 
		type: {
			"default": [10, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 688,
		name: "Binacle",
		jp_name: "カメテテ",
		desc: {
			"default": "Two-Handed Pokémon",
		}, 
		type: {
			"default": [8, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 689,
		name: "Barbaracle",
		jp_name: "ガメノデス",
		desc: {
			"default": "Collective Pokémon",
		}, 
		type: {
			"default": [8, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 690,
		name: "Skrelp",
		jp_name: "クズもー",
		desc: {
			"default": "Mock Kelp Pokémon",
		}, 
		type: {
			"default": [4, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 691,
		name: "Dragalge",
		jp_name: "ドラミドロ",
		desc: {
			"default": "Mock Kelp Pokémon",
		}, 
		type: {
			"default": [4, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 692,
		name: "Clauncher",
		jp_name: "ウデッポウ",
		desc: {
			"default": "Water Gun Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 693,
		name: "Clawitzer",
		jp_name: "ブロスター",
		desc: {
			"default": "Howitzer Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 694,
		name: "Helioptile",
		jp_name: "エリキテル",
		desc: {
			"default": "Generator Pokémon",
		}, 
		type: {
			"default": [7, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 695,
		name: "Heliolisk",
		jp_name: "エレザード",
		desc: {
			"default": "Generator Pokémon",
		}, 
		type: {
			"default": [7, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 696,
		name: "Tyrunt",
		jp_name: "チゴラス",
		desc: {
			"default": "Royal Heir Pokémon",
		}, 
		type: {
			"default": [8, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 697,
		name: "Tyrantrum",
		jp_name: "ガチゴラス",
		desc: {
			"default": "Despot Pokémon",
		}, 
		type: {
			"default": [8, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 698,
		name: "Amaura",
		jp_name: "アマルス",
		desc: {
			"default": "Tundra Pokémon",
		}, 
		type: {
			"default": [8, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 699,
		name: "Aurorus",
		jp_name: "アマルルガ",
		desc: {
			"default": "Tundra Pokémon",
		}, 
		type: {
			"default": [8, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 700,
		name: "Sylveon",
		jp_name: "ニンフィア",
		desc: {
			"default": "Intertwining Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 701,
		name: "Hawlucha",
		jp_name: "ルチャブル",
		desc: {
			"default": "Wrestling Pokémon",
		}, 
		type: {
			"default": [14, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 702,
		name: "Dedenne",
		jp_name: "デデンネ",
		desc: {
			"default": "Antenna Pokémon",
		}, 
		type: {
			"default": [7, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 703,
		name: "Carbink",
		jp_name: "メレシー",
		desc: {
			"default": "Jewel Pokémon",
		}, 
		type: {
			"default": [8, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 704,
		name: "Goomy",
		jp_name: "ヌメラ",
		desc: {
			"default": "Soft Tissue Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 705,
		name: "Sliggoo",
		jp_name: "ヌメイル",
		desc: {
			"default": "Soft Tissue Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 706,
		name: "Goodra",
		jp_name: "ヌメルゴン",
		desc: {
			"default": "Dragon Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 707,
		name: "Klefki",
		jp_name: "クレッフィ",
		desc: {
			"default": "Key Ring Pokémon",
		}, 
		type: {
			"default": [15, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 708,
		name: "Phantump",
		jp_name: "ボクレー",
		desc: {
			"default": "Stump Pokémon",
		}, 
		type: {
			"default": [1, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 709,
		name: "Trevenant",
		jp_name: "オーロット",
		desc: {
			"default": "Elder Tree Pokémon",
		}, 
		type: {
			"default": [1, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 710,
		name: "Pumpkaboo",
		jp_name: "バケッチャ",
		desc: {
			"default": "Pumpkin Pokémon",
		}, 
		type: {
			"default": [1, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 711,
		name: "Gourgeist",
		jp_name: "パンプジン",
		desc: {
			"default": "Pumpkin Pokémon",
		}, 
		type: {
			"default": [1, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 712,
		name: "Bergmite",
		jp_name: "カチコール",
		desc: {
			"default": "Ice Chunk Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 713,
		name: "Avalugg",
		jp_name: "クレベース",
		desc: {
			"default": "Iceberg Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 714,
		name: "Noibat",
		jp_name: "オンバット",
		desc: {
			"default": "Sound Wave Pokémon",
		}, 
		type: {
			"default": [3, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 715,
		name: "Noivern",
		jp_name: "オンバーン",
		desc: {
			"default": "Sound Wave Pokémon",
		}, 
		type: {
			"default": [3, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 716,
		name: "Xerneas",
		jp_name: "ゼルネアス",
		desc: {
			"default": "Life Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 717,
		name: "Yveltal",
		jp_name: "イベルタル",
		desc: {
			"default": "Destruction Pokémon",
		}, 
		type: {
			"default": [10, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 718,
		name: "Zygarde",
		jp_name: "ジガルデ",
		desc: {
			"default": "Order Pokémon",
		}, 
		type: {
			"default": [0, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 719,
		name: "Diancie",
		jp_name: "ディアンシー",
		desc: {
			"default": "Jewel Pokémon",
		}, 
		type: {
			"default": [8, 17],
		}, 
		mega: {
			default: {
				type: [8, 17],
			},
		}, 
		gmax: false,
	}, 
	{
		id: 720,
		name: "Hoopa",
		jp_name: "フーパ",
		desc: {
			"hoopa_confined": "Mischief Pokémon",
			"hoopa_unbound": "Djinn Pokémon",
		}, 
		jp_desc: {
			"hoopa_confined": "いましめられしフーパ",
			"hoopa_unbound": "ときはなたれしフーパ",
		}, 
		type: {
			"hoopa_confined": [16, 1],
			"hoopa_unbound": [16, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 721,
		name: "Volcanion",
		jp_name: "ボルケニオン",
		desc: {
			"default": "Steam Pokémon",
		}, 
		type: {
			"default": [13, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 722,
		name: "Rowlet",
		jp_name: "モクロー",
		desc: {
			"default": "Grass Quill Pokémon",
		}, 
		type: {
			"default": [9, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 723,
		name: "Dartrix",
		jp_name: "フクスロー",
		desc: {
			"default": "Blade Quill Pokémon",
		}, 
		type: {
			"default": [9, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 724,
		name: "Decidueye",
		jp_name: "ジュナイパー",
		desc: {
			"default": "Arrow Quill Pokémon",
		}, 
		type: {
			"default": [9, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 725,
		name: "Litten",
		jp_name: "ニャビー",
		desc: {
			"default": "Fire Cat Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 726,
		name: "Torracat",
		jp_name: "ニャヒート",
		desc: {
			"default": "Fire Cat Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 727,
		name: "Incineroar",
		jp_name: "ガオガエン",
		desc: {
			"default": "Heel Pokémon",
		}, 
		type: {
			"default": [13, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 728,
		name: "Popplio",
		jp_name: "アシマリ",
		desc: {
			"default": "Sea Lion Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 729,
		name: "Brionne",
		jp_name: "オシャマリ",
		desc: {
			"default": "Pop Star Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 730,
		name: "Primarina",
		jp_name: "アシレーヌ",
		desc: {
			"default": "Soloist Pokémon",
		}, 
		type: {
			"default": [6, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 731,
		name: "Pikipek",
		jp_name: "ツツケラ",
		desc: {
			"default": "Woodpecker Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 732,
		name: "Trumbeak",
		jp_name: "ケララッパ",
		desc: {
			"default": "Bugle Beak Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 733,
		name: "Toucannon",
		jp_name: "ドデカバシ",
		desc: {
			"default": "Cannon Pokémon",
		}, 
		type: {
			"default": [12, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 734,
		name: "Yungoos",
		jp_name: "ヤングース",
		desc: {
			"default": "Loitering Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 735,
		name: "Gumshoos",
		jp_name: "デカグース",
		desc: {
			"default": "Stakeout Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 736,
		name: "Grubbin",
		jp_name: "アゴジムシ",
		desc: {
			"default": "Larva Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 737,
		name: "Charjabug",
		jp_name: "デンジムシ",
		desc: {
			"default": "Battery Pokémon",
		}, 
		type: {
			"default": [5, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 738,
		name: "Vikavolt",
		jp_name: "クワガノン",
		desc: {
			"default": "Stag Beetle Pokémon",
		}, 
		type: {
			"default": [5, 7],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 739,
		name: "Crabrawler",
		jp_name: "マケンカニ",
		desc: {
			"default": "Boxing Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 740,
		name: "Crabominable",
		jp_name: "ケケンカニ",
		desc: {
			"default": "Wooly Crab Pokémon",
		}, 
		type: {
			"default": [14, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 741,
		name: "Oricorio",
		jp_name: "オドリドリ",
		desc: {
			"baile_style": "Dancing Pokémon",
			"pompom_style": "Dancing Pokémon",
			"pa'u_style": "Dancing Pokémon",
			"sensu_style": "Dancing Pokémon",
		}, 
		jp_desc: {
			"baile_style": "メラメラスタイル",
			"pompom_style": "パチパチスタイル",
			"pa'u_style": "フラフラスタイル",
			"sensu_style": "まいまいスタイル",
		}, 
		type: {
			"baile_style": [13, 3],
			"pompom_style": [7, 3],
			"pa'u_style": [16, 3],
			"sensu_style": [1, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 742,
		name: "Cutiefly",
		jp_name: "アブリー",
		desc: {
			"default": "Bee Fly Pokémon",
		}, 
		type: {
			"default": [5, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 743,
		name: "Ribombee",
		jp_name: "アブリボン",
		desc: {
			"default": "Bee Fly Pokémon",
		}, 
		type: {
			"default": [5, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 744,
		name: "Rockruff",
		jp_name: "イワンコ",
		desc: {
			"default": "Puppy Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 745,
		name: "Lycanroc",
		jp_name: "ルガルガン",
		desc: {
			"default": "Wolf Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 746,
		name: "Wishiwashi",
		jp_name: "ヨワシ",
		desc: {
			"default": "Small Fry Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 747,
		name: "Mareanie",
		jp_name: "ヒドイデ",
		desc: {
			"default": "Brutal Star Pokémon",
		}, 
		type: {
			"default": [4, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 748,
		name: "Toxapex",
		jp_name: "ドヒドイデ",
		desc: {
			"default": "Brutal Star Pokémon",
		}, 
		type: {
			"default": [4, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 749,
		name: "Mudbray",
		jp_name: "ドロバンコ",
		desc: {
			"default": "Donkey Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 750,
		name: "Mudsdale",
		jp_name: "バンバドロ",
		desc: {
			"default": "Draft Horse Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 751,
		name: "Dewpider",
		jp_name: "シズクモ",
		desc: {
			"default": "Water Bubble Pokémon",
		}, 
		type: {
			"default": [6, 5],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 752,
		name: "Araquanid",
		jp_name: "オニシズクモ",
		desc: {
			"default": "Water Bubble Pokémon",
		}, 
		type: {
			"default": [6, 5],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 753,
		name: "Fomantis",
		jp_name: "カリキリ",
		desc: {
			"default": "Sickle Grass Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 754,
		name: "Lurantis",
		jp_name: "ラランテス",
		desc: {
			"default": "Bloom Sickle Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 755,
		name: "Morelull",
		jp_name: "ネマシュ",
		desc: {
			"default": "Illuminating Pokémon",
		}, 
		type: {
			"default": [9, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 756,
		name: "Shiinotic",
		jp_name: "マシェード",
		desc: {
			"default": "Illuminating Pokémon",
		}, 
		type: {
			"default": [9, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 757,
		name: "Salandit",
		jp_name: "ヤトウモリ",
		desc: {
			"default": "Toxic Lizard Pokémon",
		}, 
		type: {
			"default": [4, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 758,
		name: "Salazzle",
		jp_name: "エンニュート",
		desc: {
			"default": "Toxic Lizard Pokémon",
		}, 
		type: {
			"default": [4, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 759,
		name: "Stufful",
		jp_name: "ヌイコグマ",
		desc: {
			"default": "Flailing Pokémon",
		}, 
		type: {
			"default": [12, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 760,
		name: "Bewear",
		jp_name: "キテルグマ",
		desc: {
			"default": "Strong Arm Pokémon",
		}, 
		type: {
			"default": [12, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 761,
		name: "Bounsweet",
		jp_name: "アマカジ",
		desc: {
			"default": "Fruit Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 762,
		name: "Steenee",
		jp_name: "アママイコ",
		desc: {
			"default": "Fruit Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 763,
		name: "Tsareena",
		jp_name: "アマジョ",
		desc: {
			"default": "Fruit Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 764,
		name: "Comfey",
		jp_name: "キュワワー",
		desc: {
			"default": "Posy Picker Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 765,
		name: "Oranguru",
		jp_name: "ヤレユータン",
		desc: {
			"default": "Sage Pokémon",
		}, 
		type: {
			"default": [12, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 766,
		name: "Passimian",
		jp_name: "ナゲツケサル",
		desc: {
			"default": "Teamwork Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 767,
		name: "Wimpod",
		jp_name: "コソクムシ",
		desc: {
			"default": "Turn Tail Pokémon",
		}, 
		type: {
			"default": [5, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 768,
		name: "Golisopod",
		jp_name: "グソクムシャ",
		desc: {
			"default": "Hard Scale Pokémon",
		}, 
		type: {
			"default": [5, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 769,
		name: "Sandygast",
		jp_name: "スナバァ",
		desc: {
			"default": "Sand Heap Pokémon",
		}, 
		type: {
			"default": [1, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 770,
		name: "Palossand",
		jp_name: "シロデスナ",
		desc: {
			"default": "Sand Castle Pokémon",
		}, 
		type: {
			"default": [1, 2],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 771,
		name: "Pyukumuku",
		jp_name: "ナマコブシ",
		desc: {
			"default": "Sea Cucumber Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 772,
		name: "Type: Null",
		jp_name: "タイプ：ヌル",
		desc: {
			"default": "Synthetic Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 773,
		name: "Silvally",
		jp_name: "シルヴァディ",
		desc: {
			"default": "Synthetic Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 774,
		name: "Minior",
		jp_name: "メテノ",
		desc: {
			"default": "Meteor Pokémon",
		}, 
		type: {
			"default": [8, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 775,
		name: "Komala",
		jp_name: "ネッコアラ",
		desc: {
			"default": "Drowsing Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 776,
		name: "Turtonator",
		jp_name: "バクがメス",
		desc: {
			"default": "Blast Turtle Pokémon",
		}, 
		type: {
			"default": [13, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 777,
		name: "Togedemaru",
		jp_name: "トゲデマル",
		desc: {
			"default": "Roly-Poly Pokémon",
		}, 
		type: {
			"default": [7, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 778,
		name: "Mimikyu",
		jp_name: "ミミッキュ",
		desc: {
			"default": "Disguise Pokémon",
		}, 
		type: {
			"default": [1, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 779,
		name: "Bruxish",
		jp_name: "ハギギシリ",
		desc: {
			"default": "Gnash Teeth Pokémon",
		}, 
		type: {
			"default": [12, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 780,
		name: "Drampa",
		jp_name: "ジジーロン",
		desc: {
			"default": "Placid Pokémon",
		}, 
		type: {
			"default": [12, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 781,
		name: "Dhelmise",
		jp_name: "ダダリン",
		desc: {
			"default": "Sea Creeper Pokémon",
		}, 
		type: {
			"default": [1, 9],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 782,
		name: "Jangmo-o",
		jp_name: "ジャラコ",
		desc: {
			"default": "Scaly Pokémon",
		}, 
		type: {
			"default": [0, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 783,
		name: "Hakamo-o",
		jp_name: "ジャランゴ",
		desc: {
			"default": "Scaly Pokémon",
		}, 
		type: {
			"default": [0, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 784,
		name: "Kommo-o",
		jp_name: "ジャラランガ",
		desc: {
			"default": "Scaly Pokémon",
		}, 
		type: {
			"default": [0, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 785,
		name: "Tapu Koko",
		jp_name: "カプ・コケコ",
		desc: {
			"default": "Land Spirit Pokémon",
		}, 
		type: {
			"default": [7, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 786,
		name: "Tapu Lele",
		jp_name: "カプ・テテフ",
		desc: {
			"default": "Land Spirit Pokémon",
		}, 
		type: {
			"default": [16, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 787,
		name: "Tapu Bulu",
		jp_name: "カプ・ブルル",
		desc: {
			"default": "Land Spirit Pokémon",
		}, 
		type: {
			"default": [9, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 788,
		name: "Tapu Fini",
		jp_name: "カプ・レヒレ",
		desc: {
			"default": "Land Spirit Pokémon",
		}, 
		type: {
			"default": [6, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 789,
		name: "Cosmog",
		jp_name: "コスモッグ",
		desc: {
			"default": "Nebula Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 790,
		name: "Cosmoem",
		jp_name: "コスモウム",
		desc: {
			"default": "Protostar Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 791,
		name: "Solgaleo",
		jp_name: "ソルガレオ",
		desc: {
			"default": "Sunne Pokémon",
		}, 
		type: {
			"default": [16, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 792,
		name: "Lunala",
		jp_name: "ルナアーラ",
		desc: {
			"default": "Moone Pokémon",
		}, 
		type: {
			"default": [16, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 793,
		name: "Nihilego",
		jp_name: "ウツロイド",
		desc: {
			"default": "Parasite Pokémon",
		}, 
		type: {
			"default": [8, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 794,
		name: "Buzzwole",
		jp_name: "マッシブーン",
		desc: {
			"default": "Swollen Pokémon",
		}, 
		type: {
			"default": [5, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 795,
		name: "Pheromosa",
		jp_name: "フェローチェ",
		desc: {
			"default": "Lissome Pokémon",
		}, 
		type: {
			"default": [5, 14],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 796,
		name: "Xurkitree",
		jp_name: "デンジュモク",
		desc: {
			"default": "Glowing Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 797,
		name: "Celesteela",
		jp_name: "テッカグヤ",
		desc: {
			"default": "Launch Pokémon",
		}, 
		type: {
			"default": [15, 3],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 798,
		name: "Kartana",
		jp_name: "カミツルギ",
		desc: {
			"default": "Drawn Sword Pokémon",
		}, 
		type: {
			"default": [9, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 799,
		name: "Guzzlord",
		jp_name: "アクジキング",
		desc: {
			"default": "Junkivore Pokémon",
		}, 
		type: {
			"default": [10, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 800,
		name: "Necrozma",
		jp_name: "ネクロズマ",
		desc: {
			"default": "Prism Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 801,
		name: "Magearna",
		jp_name: "マギアナ",
		desc: {
			"default": "Artificial Pokémon",
		}, 
		type: {
			"default": [15, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 802,
		name: "Marshadow",
		jp_name: "マーシャドー",
		desc: {
			"default": "Gloomdweller Pokémon",
		}, 
		type: {
			"default": [14, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 803,
		name: "Poipole",
		jp_name: "べべノム",
		desc: {
			"default": "Poison Pin Pokémon",
		}, 
		type: {
			"default": [4, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 804,
		name: "Naganadel",
		jp_name: "アーゴヨン",
		desc: {
			"default": "Poison Pin Pokémon",
		}, 
		type: {
			"default": [4, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 805,
		name: "Stakataka",
		jp_name: "ツンデツンデ",
		desc: {
			"default": "Rampart Pokémon",
		}, 
		type: {
			"default": [8, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 806,
		name: "Blacephalon",
		jp_name: "ズガドーン",
		desc: {
			"default": "Fireworks Pokémon",
		}, 
		type: {
			"default": [13, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 807,
		name: "Zeraora",
		jp_name: "ゼラオラ",
		desc: {
			"default": "Thunderclap Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 808,
		name: "Meltan",
		jp_name: "メルタン",
		desc: {
			"default": "Hex Nut Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 809,
		name: "Melmetal",
		jp_name: "メルメタル",
		desc: {
			"default": "Hex Nut Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Meltdown",
				g_max_type: 15,
			}
		}, 
	}, 
	{
		id: 810,
		name: "Grookey",
		jp_name: "サルノリ",
		desc: {
			"default": "Chimp Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 811,
		name: "Thwackey",
		jp_name: "バチンキー",
		desc: {
			"default": "Beat Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 812,
		name: "Rillaboom",
		jp_name: "ゴリアンダー",
		desc: {
			"default": "Drummer Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Drum Solo",
				g_max_type: 9,
			}
		}, 
	}, 
	{
		id: 813,
		name: "Scorbunny",
		jp_name: "ヒバニー",
		desc: {
			"default": "Rabbit Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 814,
		name: "Raboot",
		jp_name: "ラビフット",
		desc: {
			"default": "Rabbit Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 815,
		name: "Cinderace",
		jp_name: "エースバーン",
		desc: {
			"default": "Striker Pokémon",
		}, 
		type: {
			"default": [13, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Fireball",
				g_max_type: 13,
			}
		}, 
	}, 
	{
		id: 816,
		name: "Sobble",
		jp_name: "メッソン",
		desc: {
			"default": "Water Lizard Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 817,
		name: "Drizzile",
		jp_name: "ジメレオン",
		desc: {
			"default": "Water Lizard Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 818,
		name: "Inteleon",
		jp_name: "インてレオン",
		desc: {
			"default": "Secret Agent Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Hydrosnipe",
				g_max_type: 6,
			}
		}, 
	}, 
	{
		id: 819,
		name: "Skwovet",
		jp_name: "ホシガリス",
		desc: {
			"default": "Cheeky Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 820,
		name: "Greedent",
		jp_name: "ヨクバリス",
		desc: {
			"default": "Greedy Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 821,
		name: "Rookidee",
		jp_name: "ココガラ",
		desc: {
			"default": "Tiny Bird Pokémon",
		}, 
		type: {
			"default": [3, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 822,
		name: "Corvisquire",
		jp_name: "アオガラス",
		desc: {
			"default": "Raven Pokémon",
		}, 
		type: {
			"default": [3, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 823,
		name: "Corviknight",
		jp_name: "アーマーガア",
		desc: {
			"default": "Raven Pokémon",
		}, 
		type: {
			"default": [3, 15],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Wind Rage",
				g_max_type: 3,
			}
		}, 
	}, 
	{
		id: 824,
		name: "Blipbug",
		jp_name: "サッチムシ",
		desc: {
			"default": "Larva Pokémon",
		}, 
		type: {
			"default": [5, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 825,
		name: "Dottler",
		jp_name: "レドームシ",
		desc: {
			"default": "Radome Pokémon",
		}, 
		type: {
			"default": [5, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 826,
		name: "Orbeetle",
		jp_name: "イオルブ",
		desc: {
			"default": "Seven Spot Pokémon",
		}, 
		type: {
			"default": [5, 16],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Gravitas",
				g_max_type: 16,
			}
		}, 
	}, 
	{
		id: 827,
		name: "Nickit",
		jp_name: "クスネ",
		desc: {
			"default": "Fox Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 828,
		name: "Thievul",
		jp_name: "フォクスライ",
		desc: {
			"default": "Fox Pokémon",
		}, 
		type: {
			"default": [10, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 829,
		name: "Gossifleur",
		jp_name: "ヒメンカ",
		desc: {
			"default": "Flowering Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 830,
		name: "Eldegoss",
		jp_name: "ワタシラガ",
		desc: {
			"default": "Cotton Bloom Pokémon",
		}, 
		type: {
			"default": [9, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 831,
		name: "Wooloo",
		jp_name: "ウールー",
		desc: {
			"default": "Sheep Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 832,
		name: "Dubwool",
		jp_name: "バイウールー",
		desc: {
			"default": "Sheep Pokémon",
		}, 
		type: {
			"default": [12, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 833,
		name: "Chewtle",
		jp_name: "カムカメ",
		desc: {
			"default": "Snapping Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 834,
		name: "Drednaw",
		jp_name: "カジリガメ",
		desc: {
			"default": "Bite Pokémon",
		}, 
		type: {
			"default": [6, 8],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Stonesurge",
				g_max_type: 6,
			}
		}, 
	}, 
	{
		id: 835,
		name: "Yamper",
		jp_name: "ワンパチ",
		desc: {
			"default": "Puppy Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 836,
		name: "Boltund",
		jp_name: "パルスワン",
		desc: {
			"default": "Dog Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 837,
		name: "Rolycoly",
		jp_name: "タンドン",
		desc: {
			"default": "Coal Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 838,
		name: "Carkoal",
		jp_name: "トロッゴン",
		desc: {
			"default": "Coal Pokémon",
		}, 
		type: {
			"default": [8, 13],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 839,
		name: "Coalossal",
		jp_name: "セキタンザン",
		desc: {
			"default": "Coal Pokémon",
		}, 
		type: {
			"default": [8, 13],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Volcalith",
				g_max_type: 8,
			}
		}, 
	}, 
	{
		id: 840,
		name: "Applin",
		jp_name: "カジッチュ",
		desc: {
			"default": "Apple Core Pokémon",
		}, 
		type: {
			"default": [9, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 841,
		name: "Flapple",
		jp_name: "アップリュー",
		desc: {
			"default": "Apple Wing Pokémon",
		}, 
		type: {
			"default": [9, 0],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Tartness",
				g_max_type: 9,
			}
		}, 
	}, 
	{
		id: 842,
		name: "Appletun",
		jp_name: "タルップル",
		desc: {
			"default": "Apple Nectar Pokémon",
		}, 
		type: {
			"default": [9, 0],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Sweetness",
				g_max_type: 9,
			}
		}, 
	}, 
	{
		id: 843,
		name: "Silicobra",
		jp_name: "スナヘビ",
		desc: {
			"default": "Sand Snake Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 844,
		name: "Sandaconda",
		jp_name: "サダイジャ",
		desc: {
			"default": "Sand Snake Pokémon",
		}, 
		type: {
			"default": [2, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Sandblast",
				g_max_type: 2,
			}
		}, 
	}, 
	{
		id: 845,
		name: "Cramorant",
		jp_name: "ウッウ",
		desc: {
			"default": "Gulp Pokémon",
		}, 
		type: {
			"default": [3, 6],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 846,
		name: "Arrokuda",
		jp_name: "サシカマス",
		desc: {
			"default": "Rush Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 847,
		name: "Barraskewda",
		jp_name: "カマスジュー",
		desc: {
			"default": "Skewer Pokémon",
		}, 
		type: {
			"default": [6, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 848,
		name: "Toxel",
		jp_name: "エレズン",
		desc: {
			"default": "Baby Pokémon",
		}, 
		type: {
			"default": [7, 4],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 849,
		name: "Toxtricity",
		jp_name: "ストリンダー",
		desc: {
			"default": "Punk Pokémon",
		}, 
		type: {
			"default": [7, 4],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Stun Shock",
				g_max_type: 7,
			}
		}, 
	}, 
	{
		id: 850,
		name: "Sizzlipede",
		jp_name: "ヤクデ",
		desc: {
			"default": "Radiator Pokémon",
		}, 
		type: {
			"default": [13, 5],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 851,
		name: "Centiskorch",
		jp_name: "マルヤクデ",
		desc: {
			"default": "Radiator Pokémon",
		}, 
		type: {
			"default": [13, 5],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Centiferno",
				g_max_type: 13,
			}
		}, 
	}, 
	{
		id: 852,
		name: "Clobbopus",
		jp_name: "タタッコ",
		desc: {
			"default": "Tantrum Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 853,
		name: "Grapploct",
		jp_name: "オトスパス",
		desc: {
			"default": "Jujitsu Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 854,
		name: "Sinistea",
		jp_name: "ヤバチャ",
		desc: {
			"default": "Black Tea Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 855,
		name: "Polteageist",
		jp_name: "ポットデス",
		desc: {
			"default": "Black Tea Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 856,
		name: "Hatenna",
		jp_name: "ミブリム",
		desc: {
			"default": "Calm Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 857,
		name: "Hattrem",
		jp_name: "テブリム",
		desc: {
			"default": "Serene Pokémon",
		}, 
		type: {
			"default": [16, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 858,
		name: "Hatterene",
		jp_name: "ブリムオン",
		desc: {
			"default": "Silent Pokémon",
		}, 
		type: {
			"default": [16, 17],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Smite",
				g_max_type: 17,
			}
		}, 
	}, 
	{
		id: 859,
		name: "Impidimp",
		jp_name: "ベロバー",
		desc: {
			"default": "Wily Pokémon",
		}, 
		type: {
			"default": [10, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 860,
		name: "Morgrem",
		jp_name: "ギモー",
		desc: {
			"default": "Devious Pokémon",
		}, 
		type: {
			"default": [10, 17],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 861,
		name: "Grimmsnarl",
		jp_name: "オーロンゲ",
		desc: {
			"default": "Bulk Up Pokémon",
		}, 
		type: {
			"default": [10, 17],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Snooze",
				g_max_type: 10,
			}
		}, 
	}, 
	{
		id: 862,
		name: "Obstagoon",
		jp_name: "タチフサグマ",
		desc: {
			"default": "Blocking Pokémon",
		}, 
		type: {
			"default": [10, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 863,
		name: "Perrserker",
		jp_name: "ニャイキング",
		desc: {
			"default": "Viking Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 864,
		name: "Cursola",
		jp_name: "サニゴーン",
		desc: {
			"default": "Coral Pokémon",
		}, 
		type: {
			"default": [1, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 865,
		name: "Sirfetch'd",
		jp_name: "ネギガナイト",
		desc: {
			"default": "Wild Duck Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 866,
		name: "Mr. Rime",
		jp_name: "バリコオル",
		desc: {
			"default": "Comedian Pokémon",
		}, 
		type: {
			"default": [11, 16],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 867,
		name: "Runerigus",
		jp_name: "デスバーン",
		desc: {
			"default": "Grudge Pokémon",
		}, 
		type: {
			"default": [2, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 868,
		name: "Milcery",
		jp_name: "マホミル",
		desc: {
			"default": "Cream Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 869,
		name: "Alcremie",
		jp_name: "マホイップ",
		desc: {
			"default": "Cream Pokémon",
		}, 
		type: {
			"default": [17, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Finale",
				g_max_type: 17,
			}
		}, 
	}, 
	{
		id: 870,
		name: "Falinks",
		jp_name: "タイレーつ",
		desc: {
			"default": "Formation Pokémon",
		}, 
		type: {
			"default": [14, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 871,
		name: "Pincurchin",
		jp_name: "バチンウニ",
		desc: {
			"default": "Sea Urchin Pokémon",
		}, 
		type: {
			"default": [7, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 872,
		name: "Snom",
		jp_name: "ユキハミ",
		desc: {
			"default": "Worm Pokémon",
		}, 
		type: {
			"default": [11, 5],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 873,
		name: "Frosmoth",
		jp_name: "モスノウ",
		desc: {
			"default": "Frosmoth Pokémon",
		}, 
		type: {
			"default": [11, 5],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 874,
		name: "Stonjourner",
		jp_name: "イシヘンジン",
		desc: {
			"default": "Big Rock Pokémon",
		}, 
		type: {
			"default": [8, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 875,
		name: "Eiscue",
		jp_name: "コオリッポ",
		desc: {
			"default": "Penguin Pokémon",
		}, 
		type: {
			"default": [11, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 876,
		name: "Indeedee",
		jp_name: "イエッサン",
		desc: {
			"default": "Emotion Pokémon",
		}, 
		type: {
			"default": [16, 12],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 877,
		name: "Morpeko",
		jp_name: "モルペコ",
		desc: {
			"default": "Two-Sided Pokémon",
		}, 
		type: {
			"default": [7, 10],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 878,
		name: "Cufant",
		jp_name: "ゾウドウ",
		desc: {
			"default": "Copperderm Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 879,
		name: "Copperajah",
		jp_name: "ダイオウドウ",
		desc: {
			"default": "Copperderm Pokémon",
		}, 
		type: {
			"default": [15, -1],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Steelsurge",
				g_max_type: 15,
			}
		}, 
	}, 
	{
		id: 880,
		name: "Dracozolt",
		jp_name: "パッチラゴン",
		desc: {
			"default": "Fossil Pokémon",
		}, 
		type: {
			"default": [7, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 881,
		name: "Arctozolt",
		jp_name: "パッチルドン",
		desc: {
			"default": "Fossil Pokémon",
		}, 
		type: {
			"default": [7, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 882,
		name: "Dracovish",
		jp_name: "ウオノラゴン",
		desc: {
			"default": "Fossil Pokémon",
		}, 
		type: {
			"default": [6, 0],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 883,
		name: "Arctovish",
		jp_name: "ウオチルドン",
		desc: {
			"default": "Fossil Pokémon",
		}, 
		type: {
			"default": [6, 11],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 884,
		name: "Duraludon",
		jp_name: "ジュラルドン",
		desc: {
			"default": "Alloy Pokémon",
		}, 
		type: {
			"default": [15, 0],
		}, 
		mega: false,
		g_max: {
			default: {
				g_max_move: "G-Max Depletion",
				g_max_type: 0,
			}
		}, 
	}, 
	{
		id: 885,
		name: "Dreepy",
		jp_name: "ドラメシヤ",
		desc: {
			"default": "Lingering Pokémon",
		}, 
		type: {
			"default": [0, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 886,
		name: "Drakloak",
		jp_name: "ドロンチ",
		desc: {
			"default": "Caretaker Pokémon",
		}, 
		type: {
			"default": [0, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 887,
		name: "Dragapult",
		jp_name: "ドラパルト",
		desc: {
			"default": "Stealth Pokémon",
		}, 
		type: {
			"default": [0, 1],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 888,
		name: "Zacian",
		jp_name: "ザシアン",
		desc: {
			"default": "Warrior Pokémon",
		}, 
		type: {
			"default": [17, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 889,
		name: "Zamazenta",
		jp_name: "ザマゼンタ",
		desc: {
			"default": "Warrior Pokémon",
		}, 
		type: {
			"default": [14, 15],
		}, 
		mega: false,
		gmax: false,
	}, 
	{
		id: 890,
		name: "Eternatus",
		jp_name: "ムゲンダイナ",
		desc: {
			"default": "Gigantic Pokémon",
		}, 
		type: {
			"default": [4, 0],
		}, 
		mega: false,
		gmax: false,
	},
];
