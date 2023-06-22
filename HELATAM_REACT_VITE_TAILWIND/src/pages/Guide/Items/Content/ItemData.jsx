// const ITEM_IMG = "https://img6.99.com/yhkd/image/data/equip/"
// const ITEM_TYPE = {
//     "1" : "Fisico",
//     "2" : "Magico",
//     "3" : "Defensa",
//     "4" : "Botas",
//     "5" : "Accesorio",
// }

const ItemData = [
    {
        id: 12517,
        name: "RECOVERY RING",
        type: "3",
        img: "12517.jpg",
        prop: ["Health Regen +6s per second"],
        effect: [""],
        price: 600,
        lvl: 1,
    },
    {
        id: 10107,
        name: "PHANTOM CORSET",
        type: "1",
        img: "10107.jpg",
        prop: ["Agility +6", "Attack Speed +10%"],
        effect: ["Unique Passive: Recovers 5 Health with each attack"],
        price: 600,
        lvl: 1,
    },
    {
        id: 10011,
        name: "HASTE GLOVES",
        type: "1",
        img: "10011.jpg",
        prop: ["Attack Speed +15"],
        effect: [""],
        price: 450,
        lvl: 1,
    },
];

export default ItemData;
