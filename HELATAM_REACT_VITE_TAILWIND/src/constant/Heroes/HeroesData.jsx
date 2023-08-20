//	https://img6.99.com/yhkd/image/data/hero/head/
// .jpg

var tag = {
    "1": "fuerza",
    "2": "agilidad",
    "3": "inteligencia"
}

var HeroesData = [
    { id: 3001, name: "Yang Jian", type: "2", hid: 119, newType: "Warrior", features: ['Ganker', 'Melee'] },
    { id: 240001, name: "Hades", type: "2", hid: 118, newType: "Asesino", features: ['Ganker', 'Nuker'] },
    { id: 128001, name: "Rocoso", type: "2", hid: 155, newType: "Tanque", },
    { id: 24001, name: "Silvana", type: "3", hid: 154, newType: "Apoyo", features: ['Ranged', 'Intelligence'] },
    { id: 75001, name: "Khaos", type: "1", hid: 153, newType: "Warrior", features: ['Melee', 'Strength'] },
    { id: 48001, name: "Lupus", type: "2", hid: 151, newType: "assassin" },
    { id: 182001, name: "Elvira", type: "1", hid: 152, newType: "Mago", },
    // { id: 164001, name: "æ½®æ±å®ˆæœ›è€…", type: "2", hid: 150, newType: "åˆºå®¢", },
    { id: 66001, name: "Caesar", type: "1", hid: 149, newType: "Tanque", features: ['Melee', 'Ganker'] },
    // { id: 902001, name: "é›…å„¿è´å¾·", type: "1", hid: 142, newType: "Apoyo", },
    // { id: 903001, name: "çµæ¢¦ç‹¼çŽ‹", type: "1", hid: 143, newType: "Apoyo", },
    { id: 904001, name: "Diana", type: "2", hid: 144, newType: "Tirador" },
    // { id: 905001, name: "å¨œè´æ‹‰å°”", type: "2", hid: 145, newType: "åˆºå®¢", },
    // { id: 906001, name: "è‰¾å¤šçŽ›", type: "1", hid: 146, newType: "Apoyo" },
    // { id: 907001, name: "æš–å¿ƒå¥³ä»†", type: "1", hid: 148, newType: "Apoyo", },
    // { id: 908001, name: "å¤æé›…", type: "1", hid: 147, newType: "Apoyo" },
    // { id: 909001, name: "è‹å½±", type: "2", hid: 140, newType: "åˆºå®¢" },
    { id: 155001, name: "Sprite Auric", type: "2", hid: 139, newType: "warrior", features: ['Melee', 'DPS'] },
    { id: 44001, name: "Rena", type: "3", hid: 138, newType: "Mago", features: ['Ranged', 'Intelligence', 'Nuker'] },
    { id: 158001, name: "Naya", type: "3", hid: 137, newType: "Tirador", features: ['Ranged', 'Carry'] },
    { id: 181001, name: "Prospero", type: "1", hid: 136, newType: "Tanque", features: ['Melee', 'Nuker', 'Disabler'] },
    { id: 180001, name: "Sirena", type: "3", hid: 135, newType: "Mago", features: ['Ranged', 'Nuker'] },
    { id: 175001, name: "Grua Maestra", type: "2", hid: 134, newType: "Asesino", features: ['Melee', 'Agility'] },
    // { id: 179001, name: "ä¸œæ–¹æœˆåˆ", type: "3", hid: 133, newType: "Mago", },
    // { id: 178001, name: "æ¶‚å±±çº¢çº¢", type: "1", hid: 132, newType: "Apoyo", },
    // { id: 177001, name: "ç™½æœˆåˆ", type: "2", hid: 131, newType: "åˆºå®¢" },
    // { id: 176001, name: "æ¶‚å±±è‹è‹", type: "3", hid: 130, newType: "Apoyo", },
    // { id: 163001, name: "é“æ‰‡å…¬ä¸»", type: "2", hid: 129, newType: "å°„æ‰‹", },
    { id: 161001, name: "Prometeo", type: "1", hid: 128, newType: "Tirador", features: ['Ranged', 'Carry', 'Pusher'] },
    { id: 139001, name: "Disco Glee", type: "3", hid: 127, newType: "Apoyo", features: ['Ganker', 'Disabler', 'Pusher'] },
    { id: 144001, name: "Sunmonk", type: "3", hid: 126, newType: "Apoyo", features: ['Ganker', 'Nuker'] },
    // { id: 174001, name: "ç±³èŽ‰å§†", type: "1", hid: 125, newType: "Apoyo", },
    { id: 145001, name: "Nayade", type: "3", hid: 124, newType: "Apoyo", features: ['Ranged', 'Support'] },
    { id: 124001, name: "Nina", type: "2", hid: 123, newType: "Asesino", features: ['Ganker', 'Disabler'] },
    { id: 135001, name: "Zoe", type: "3", hid: 122, newType: "Mago", features: ['Pusher', 'Nuker'] },
    // { id: 143001, name: "åˆ©å§†é²", type: "2", hid: 121, newType: "åˆºå®¢" },
    { id: 142001, name: "Ying Zheng", type: "3", hid: 120, newType: "Mago", features: ['Pusher', 'Nuker'] },
    { id: 153001, name: "Murry", type: "1", hid: 116, newType: "Warrior", features: ['Ganker', 'Disabler'] },
    { id: 90001, name: "Titan", type: "1", hid: 108, newType: "Tanque", features: ['TANK', 'DISABLER'] },
    { id: 160001, name: "Heredias", type: "1", hid: 115, newType: "Warrior", features: ['Ganker', 'Nuker'] },
    { id: 172001, name: "Omega", type: "3", hid: 113, newType: "Mago", features: ['Pusher', 'Nuker'] },
    { id: 154001, name: "Di Renjie", type: "2", hid: 112, newType: "Tirador", features: ['Ranged', 'Carry', 'Harasser'] },
    { id: 78001, name: "Lorelei", type: "3", hid: 109, newType: "Mago", features: ['Ranged', 'Durabler', 'Ganker'] },
    { id: 171001, name: "Mousia", type: "2", hid: 110, newType: "Tirador", features: ['Nuker', 'Pusher'] },
    { id: 10001, name: "Daimond", type: "2", hid: 107, newType: "Asessin", features: ['Melee', 'Roamer', 'Nuker'] },
    { id: 125001, name: "Brady", type: "1", hid: 105, newType: "Warrior", features: ['MELEE', 'GANKER', 'NUKER'] },
    { id: 168001, name: "Beiluo Shimen", type: "1", hid: 106, newType: "Warrior", features: ['Melee', 'Ganker', 'Durable'] },
    { id: 152001, name: "Xiahou Dun", type: "1", hid: 104, newType: "Warrior", features: ['Melee', 'Ganker', 'Disabler'] },
    // { id: 31001, name: "æ—¶ç©ºçŒŽæ‰‹", type: "3", hid: 103, newType: "Mago", },
    { id: 169001, name: "Momo", type: "1", hid: 111, newType: "Warrior", features: ['Ganker', 'Nuker'] },
    { id: 173001, name: "Pandora Jackert", type: "3", hid: 114, newType: "Mago", features: ['PUSHER', 'NUKER'] },
    { id: 29001, name: "Tiamat", type: "1", hid: 98, newType: "Tanque", features: ['MELEE', 'TANK', 'DISABLER'] },
    { id: 132001, name: "Lin Lin", type: "3", hid: 101, newType: "Mago", features: ['Ranged', 'Pusher', 'Mage'] },
    { id: 105001, name: "Methos", type: "2", hid: 96, newType: "Asessin", features: ['MELEE', 'GANKER', 'NUKER'] },
    { id: 167001, name: "Xia Ling", type: "3", hid: 102, newType: "Mago", features: ['Ranged', 'Ganker', 'Carry'] },
    { id: 166001, name: "Yangbing Cao", type: "3", hid: 100, newType: "Mago", features: ['Ranged', 'Nuker', 'Pusher'] },
    { id: 165001, name: "Young Yanbing", type: "2", hid: 99, newType: "Asassin", features: ['Melee', 'Ganker', 'Nuker'] },
    { id: 162001, name: "Asura", type: "2", hid: 97, newType: "['Melee', 'Ganker', 'Nuker']" },
    { id: 58001, name: "Fawna", type: "2", hid: 95, newType: "Archer", features: ['RANGED', 'ROAMER'] },
    { id: 148001, name: "Li Bai", type: "2", hid: 94, newType: "Assassin", features: ['Melee', 'Pusher', 'Nuker'] },
    { id: 21001, name: "Dr. Madd", type: "1", hid: 93, newType: "Archer", features: ['RANGED', 'CARRY', 'DISABLER'] },
    { id: 54001, name: "Fleur", type: "3", hid: 92, newType: "Mago", features: ['RANGED', 'INTELLIGENCE', 'MAGE'] },
    { id: 141001, name: "Condor", type: "1", hid: 91, newType: "Apoyo", features: ['Melee', 'Ganker', 'Nuker'] },
    { id: 137001, name: "Hegemon", type: "3", hid: 90, newType: "Mago", features: ['Ranged', 'Intelligence', 'Mage'] },
    { id: 133001, name: "Fumiko", type: "2", hid: 89, newType: "Assasin", features: ['Melee', 'Ganker', 'Nuker'] },
    { id: 87001, name: "Galahad", type: "1", hid: 88, newType: "Warrior", features: ['MELEE', 'GANKER', 'DISABLER'] },
    { id: 92001, name: "Leonidas", type: "1", hid: 87, newType: "Tanque", features: ['MELEE', 'GANKER', 'DISABLER'] },
    { id: 50001, name: "Psion", type: "2", hid: 71, newType: "Assasin", features: ['MELEE', 'AGILITY', 'ASSASSIN'] },
    { id: 72001, name: "Celestius", type: "3", hid: 85, newType: "Mago", features: ['RANGED', 'INTELLIGENCE', 'MAGE'] },
    { id: 76001, name: "Raker", type: "1", hid: 86, newType: "Tanque", features: ['MELEE', 'PUSHER', 'DURABLE'] },
    { id: 159001, name: "Ainz Ooal Gown", type: "3", hid: 83, newType: "Mago", features: ['Intelligence', 'Mage', 'Ranged'] },
    { id: 126001, name: "Chronia", type: "3", hid: 84, newType: "Apoyo", features: ['Ranged', 'Pusher', 'Ganker'] },
    { id: 140001, name: "Fusilia", type: "2", hid: 82, newType: "Tirador", features: ['Ranged', 'Carry', 'Pusher'] },
    { id: 25001, name: "Tartorus", type: "1", hid: 76, newType: "Tanque", features: ['MELEE', 'ROAMER', 'DISABLER'] },
    { id: 11001, name: "Elvira", type: "3", hid: 81, newType: "Mago", features: ['RANGED', 'NUKER', 'PUSHER'] },
    { id: 47001, name: "Hattori", type: "2", hid: 74, newType: "Assasin", features: ['MELEE', 'AGILITY', 'ASSASSIN'] },
    { id: 15001, name: "Borgon", type: "1", hid: 79, newType: "Tanque", features: ['MELEE', 'GANKER', 'DISABLE'] },
    { id: 84001, name: "Albus", type: "3", hid: 73, newType: "Mago", features: ['RANGED', 'DPS', 'PUSHER'] },
    { id: 134001, name: "Mulan", type: "1", hid: 72, newType: "Warrior", features: ['Melee', 'Ganker', 'Disabler'] },
    { id: 63001, name: "Atenea", type: "3", hid: 65, newType: "Mago", features: ['RANGED', 'NUKER'] },
    { id: 38001, name: "Absalon", type: "3", hid: 75, newType: "Mago", features: ['RANGED', 'NUKER', 'DISABLER'] },
    { id: 86001, name: "Escarlata", type: "2", hid: 78, newType: "Assasin", features: ['MELEE', 'NUKER', 'GANKER'] },
    { id: 35001, name: "Rahotep", type: "1", hid: 77, newType: "Tanque", features: ['MELEE', 'TANK', 'SUPPORT'] },
    { id: 64001, name: "Meleia", type: "2", hid: 69, newType: "Tanque", features: ['MELEE', 'NUKER', 'PUSHER'] },
    { id: 32001, name: "Damacus", type: "3", hid: 68, newType: "Mago", features: ['RANGED', 'NUKER', 'DPS'] },
    { id: 93001, name: "Stiletto", type: "2", hid: 70, newType: "Tirador", features: ['RANGED', 'DPS', 'PUSHER'] },
    { id: 40001, name: "Zeus", type: "3", hid: 67, newType: "Mago", features: ['NUKER', 'PUSHER'] },
    { id: 108001, name: "Lulu", type: "1", hid: 66, newType: "Tanque", features: ['MELEE', 'GANKER'] },
    { id: 127001, name: "Clarice", type: "2", hid: 63, newType: "Tirador", features: ['DPS', 'Pusher'] },
    { id: 36001, name: "Diao Chan", type: "3", hid: 64, newType: "Apoyo", features: ['RANGED', 'DISABLER', 'MAGICAL'] },
    { id: 146001, name: "Phobos", type: "1", hid: 62, newType: "Tanque", features: ['Melee', 'Pusher'] },
    { id: 151001, name: "Zorro", type: "2", hid: 61, newType: "Assasin", features: ['Melee', 'Nuker', 'Ganker'] },
    { id: 130001, name: "Bonnie", type: "1", hid: 60, newType: "Tirador", features: ['Ranged', 'DPS'] },
    { id: 60001, name: "Zed", type: "3", hid: 59, newType: "Mago", features: ['NUKER', 'RANGED'] },
    { id: 16001, name: "Wendy", type: "1", hid: 58, newType: "Tanque", features: ['MELEE', 'GANKER', 'DISABLER'] },
    { id: 150001, name: "E-stein", type: "3", hid: 57, newType: "Mago", features: ['Ranged', 'Pusher'] },
    { id: 138001, name: "Cherith", type: "1", hid: 56, newType: "Warrior", features: ['Melee', 'Disabler', 'Durable'] },
    { id: 14001, name: "Nazar", type: "1", hid: 53, newType: "Tanque", features: ['MELEE', 'PUSHER', 'TANK'] },
    { id: 149001, name: "Guerrero Dragon", type: "2", hid: 54, newType: "Assasin", features: ['Melee', 'Dash', 'Disabler'] },
    { id: 45001, name: "Lapina", type: "2", hid: 55, newType: "Tirador", features: ['RANGED', 'CARRY', 'PUSHER'] },
    { id: 4001, name: "Arlequin", type: "2", hid: 52, newType: "Tirador", features: ['RANGED', 'CARRY', 'PUSHER'] },
    { id: 2001, name: "Grom", type: "1", hid: 51, newType: "Tanque", features: ['MELEE', 'DISABLER', 'DURABLE'] },
    { id: 82001, name: "Freya", type: "2", hid: 47, newType: "Tirador", features: ['RANGED', 'CARRY', 'GANKER'] },
    { id: 71001, name: "Estrath", type: "2", hid: 50, newType: "åˆºå®¢", features: ['MELEE', 'DISABLER', 'ROAMER'] },
    { id: 122001, name: "Ares", type: "1", hid: 48, newType: "Warrior", features: ['MELEE', 'CARRY'] },
    { id: 69001, name: "Odin", type: "1", hid: 42, newType: "Warrior", features: ['MELEE', 'ROAMER', 'NUKER'] },
    { id: 18001, name: "Pandora", type: "3", hid: 49, newType: "Mago", features: ['RANGED', 'ROAMER', 'DISABLER'] },
    { id: 55001, name: "Besendar", type: "1", hid: 41, newType: "Tanque", features: ['MELEE', 'DISABLER', 'TANK'] },
    { id: 20001, name: "Nocturna", type: "2", hid: 40, newType: "Assasin", features: ['MELEE', 'CARRY', 'ROAMER'] },
    { id: 59001, name: "Vince", type: "2", hid: 39, newType: "Tirador", features: ['RANGED', 'PUSHER', 'CARRY'] },
    { id: 22001, name: "Arborus", type: "3", hid: 46, newType: "Mago", features: ['RANGED', 'NUKER', 'DISABLER'] },
    { id: 65001, name: "Flor de loto", type: "3", hid: 45, newType: "Apoyo", features: ['RANGED', 'NUKER', 'DISABLER'] },
    { id: 70001, name: "Pirro", type: "3", hid: 44, newType: "Mago", features: ['RANGED', 'NUKER', 'PUSHER'] },
    { id: 80001, name: "Flavia", type: "3", hid: 36, newType: "Mago", features: ['RANGED', 'DISABLER', 'GANKER'] },
    { id: 98001, name: "Ula", type: "3", hid: 43, newType: "Mago", features: ['RANGED', 'GANKER', 'PUSHER'] },
    { id: 53001, name: "Minos", type: "1", hid: 37, newType: "Tanque", features: ['MELEE', 'ROAMER', 'TANK'] },
    { id: 52001, name: "Sun Wukong", type: "2", hid: 38, newType: "Warrior", features: ['MELEE', 'PUSHER', 'CARRY'] },
    { id: 1001, name: "Venom", type: "1", hid: 34, newType: "Warrior", features: ['Melee', 'Ganker', 'Carry'] },
    { id: 9001, name: "Jeanne", type: "3", hid: 35, newType: "Apoyo", features: ['RANGED', 'PUSHER', 'DISABLE'] },
    { id: 101001, name: "Mikio", type: "2", hid: 26, newType: "Assasin", features: ['MELEE', 'GANKER', 'NUKER'] },
    { id: 13001, name: "Cao Cao", type: "2", hid: 9, newType: "Warrior", features: ['MELEE', 'PUSHER', 'CARRY'] },
    { id: 17001, name: "Saya", type: "3", hid: 20, newType: "Mago", features: ['RANGED', 'NUKER', 'DISABLER'] },
    { id: 33001, name: "Rocoso", type: "1", hid: 7, newType: "Tanque", features: ['MELEE', 'TANK'] },
    { id: 67001, name: "Gedeon", type: "1", hid: 21, newType: "Tanque", features: ['MELEE', 'CARRY'] },
    { id: 27001, name: "Lilith", type: "1", hid: 28, newType: "Tank", features: ['MELEE', 'TANK', 'ROAMER'] },
    { id: 51001, name: "Poseidon", type: "3", hid: 24, newType: "Mago", features: ['MELEE', 'NUKER', 'DISABLER'] },
    { id: 34001, name: "Guan yu", type: "1", hid: 18, newType: "Warrior", features: ['MELEE', 'DISABLER', 'CARRY'] },
    { id: 77001, name: "Eira", type: "3", hid: 4, newType: "Mago", features: ['Ranged', 'GANKER', 'Nuker'] },
    // { id: 8001, name: "Minerva", type: "2", hid: 31, newType: "Tirador" },
    { id: 107001, name: "Wolfram", type: "1", hid: 17, newType: "Warrior", features: ['MELEE', 'GANKER'] },
    { id: 30001, name: "Corvo", type: "2", hid: 16, newType: "Tirador", features: ['MELEE', 'RANGED', 'CARRY'] },
    { id: 37001, name: "Zhao yun", type: "2", hid: 1, newType: "Warrior", features: ['MELEE', 'GANKER', 'CARRY'] },
    { id: 49001, name: "Diana", type: "2", hid: 23, newType: "Archer", features: ['RANGED', 'PUSHER', 'CARRY'] },
    { id: 39001, name: "Lu Bu", type: "1", hid: 14, newType: "Warrior", features: ['MELEE', 'CARRY', 'TANK'] },
    { id: 61001, name: "Lunaria", type: "3", hid: 8, newType: "Mago", features: ['RANGED', 'ROAMER', 'NUKER'] },
    { id: 46001, name: "Bambu", type: "1", hid: 30, newType: "Tanque", features: ['MELEE', 'TANK', 'NUKER'] },
    { id: 85001, name: "Apolo", type: "1", hid: 29, newType: "Tanque", features: ['MELEE', 'GANKER'] },
    { id: 89001, name: "Zhang Fei", type: "1", hid: 10, newType: "Tank", features: ['MELEE', 'DURABLE', 'DISABLER'] },
    { id: 96001, name: "Pin Pin", type: "2", hid: 3, newType: "Tirador", features: ['RANGED', 'PUSHER', 'CARRY'] },
    { id: 68001, name: "Nezha", type: "2", hid: 13, newType: "Warrior", features: ['MELEE', 'CARRY'] },
    { id: 106001, name: "Magicka", type: "3", hid: 22, newType: "Mago", features: ['RANGED', 'GANKER', 'NUKER'] },
    { id: 62001, name: "Magnolia", type: "2", hid: 6, newType: "Warrior", features: ['MELEE', 'PUSHER', 'CARRY'] },
    { id: 56001, name: "Burninator", type: "1", hid: 15, newType: "Tank", features: ['MELEE', 'TANK', 'DISABLER'] },
    { id: 79001, name: "Solus", type: "2", hid: 12, newType: "Tirador", features: ['RANGED', 'CARRY', 'PUSHER'] },
    { id: 8001, name: "Minerva", type: "2", hid: 31, newType: "Tirador", features: ['RANGED', 'PUSHER', 'CARRY'] },
    { id: 94001, name: "Cleopatra", type: "3", hid: 27, newType: "Mago", features: ['RANGED', 'GANKER', 'NUKER'] },
    { id: 83001, name: "Ilfirin", type: "2", hid: 32, newType: "Tirador", features: ['RANGED', 'GANKER', 'CARRY'] },
    { id: 95001, name: "Yuki", type: "3", hid: 11, newType: "Mago", features: ['RANGED', 'GANKER', 'CARRY'] },
    { id: 97001, name: "Nosferatu", type: "3", hid: 25, newType: "Mago", features: ['RANGED', 'GANKER', 'NUKER'] },
    { id: 73001, name: "Dragos", type: "1", hid: 33, newType: "Warrior", features: ['MELEE', 'RANGED', 'CARRY'] },
];

export default {
    tag: tag,
    HeroesData: HeroesData
}
