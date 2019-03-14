const SKIN_COLORS = [
  {"name": "Very pale", "value": "#FDDAC5"},
  {"name": "Pale", "value": "#FBD2B4"},
  {"name": "Light tan", "value": "#FCCC95"},
  {"name": "Tan", "value": "#E2B182"},
  {"name": "Brown", "value": "#DBA582", randomizer: false},
  {"name": "Dark brown", "value": "#A96C4F", randomizer: false},
];

const EYES_COLOR = [
  {"name": "Brown", "value": "#634e34"},
  {"name": "Blue", "value": "#2e536f"},
  {"name": "Light blue", "value": "#A6B6C2"},
  {"name": "Green", "value": "#3d671d"},
  {"name": "Light green", "value": "#1c7847"},
  {"name": "Green-grey", "value": "#497665"},
];

const HAIR_COLOR = [
  {"name": "Black", "value": "#090806"},
  {"name": "Ofblack", "value": "#2C222B"},
  {"name": "Dark grey", "value": "#71635A"},
  {"name": "Grey", "value": "#B7A69E"},
  {"name": "Light grey", "value": "#D6C4C2"},
  {"name": "Platinum Blonde", "value": "#CABFB1"},
  {"name": "White Blonde", "value": "#FFF5E1"},
  {"name": "Light Blonde", "value": "#E6CEA8"},
  {"name": "Golden Blonde", "value": "#E5C8A8"},
  {"name": "Ash Blonde", "value": "#DEBC99"},
  {"name": "Honey Blonde", "value": "#B89778"},
  {"name": "Strawberry Blonde", "value": "#A56B46"},
  {"name": "Light Red", "value": "#B55239"},
  {"name": "Dark Red", "value": "#8D4A43"},
  {"name": "Light Auburn", "value": "#91553D"},
  {"name": "Dark Auburn", "value": "#533D32"},
  {"name": "Dark Brown", "value": "#3B3024"},
  {"name": "Golden Brown", "value": "#554838"},
  {"name": "Medium Brown", "value": "#4E433F"},
  {"name": "Brown", "value": "#6A4E42"},
  {"name": "Light Brown", "value": "#A7856A"},
  {"name": "Ash Brown", "value": "#977961"},
];

const COLORS = [
  {"name": "Turquoise", "value": "#1abc9c"},
  {"name": "Emerland", "value": "#2ecc71"},
  {"name": "Peter river", "value": "#3498db"},
  {"name": "Amethyst", "value": "#9b59b6"},
  {"name": "Wet asphalt", "value": "#34495e"},
  {"name": "Green sea", "value": "#16a085"},
  {"name": "Nephritis", "value": "#27ae60"},
  {"name": "Belize hole", "value": "#2980b9"},
  {"name": "Wisteria", "value": "#8e44ad"},
  {"name": "Midnight blue", "value": "#2c3e50"},
  {"name": "Sun flower", "value": "#f1c40f"},
  {"name": "Carrot", "value": "#e67e22"},
  {"name": "Alizarin", "value": "#e74c3c"},
  {"name": "Clouds", "value": "#ecf0f1"},
  {"name": "Concrete", "value": "#95a5a6"},
  {"name": "Orange", "value": "#f39c12"},
  {"name": "Pumkin", "value": "#d35400"},
  {"name": "Pomegrate", "value": "#c0392b"},
  {"name": "Silver", "value": "#bdc3c7"},
  {"name": "Sabestos", "value": "#7f8c8d"},
  {"name": "Black", "value": "#000000"},
  {"name": "Grey", "value": "#333333"},
  {"name": "White", "value": "#FFFFFF"},
];

const LIP_COLOR = {"name": "No lipstick", "value": "#ef843b"};

const LIPSTICKS_COLORS = [
  {"name": "Lady danger", "value": "#DD2F28"},
  {"name": "Russian red", "value": "#63171D"},
  {"name": "Red", "value": "#7F0E0F"},
  {"name": "Sellectsaint", "value": "#AD3468"},
  {"name": "Wham", "value": "#C85F41"},
  {"name": "Glaringlyhip", "value": "#972E1A"},
  {"name": "Pink nouveau", "value": "#B03761"},
  {"name": "Viva Nicky", "value": "#C13539"},
  {"name": "Powerful", "value": "#B84F40"},
  {"name": "Show orchid", "value": "#CD6871"},
  {"name": "Fusion pink", "value": "#DA6798"},
  {"name": "Ruby woo", "value": "#C71418"},
  {"name": "Candy yum yum", "value": "#FD3686"},
  {"name": "Morange", "value": "#B6301E"},
  {"name": "Germain", "value": "#AE0923"},
  {"name": "Meltdown", "value": "#BD503C"},
  {"name": "Cyber", "value": "#22171A"},
  {"name": "Bright pink", "value": "#F659A2"},
  {"name": "Bubblegum", "value": "#B26991"},
  {"name": "Ladybug", "value": "#C73024"},
  LIP_COLOR,
];

export default {
  Female: {
    label: "Female",
    variants: [
      {
        label: "Skin color",
        component: "FemaleHeadShape",
        prop: "color",
        tab: "Skin",
        values: SKIN_COLORS
      },
      {
        label: "Eyes type",
        component: "Eyes",
        prop: "type",
        tab: "Eyes",
        values: [
          {name: "Open", value: "A"},
          {name: "Wink left", value: "B"},
          {name: "Wink right", value: "C"},
          {name: "Happy", value: "D"}
        ]
      },
      {
        label: "Eyes color",
        component: "Eyes",
        prop: "color",
        tab: "Eyes",
        values: EYES_COLOR
      },
      {
        label: "Smile",
        component: "Mouth",
        prop: "type",
        tab: "Mouth",
        values: [
          {name: "Normal", value: "A"},
          {name: "Wide", value: "B"},
          {name: "Smile", value: "C"},
          {name: "Clever", value: "D"},
        ]
      },
      {
        label: "Lips color",
        component: "Mouth",
        prop: "color",
        tab: "Lips",
        values: LIPSTICKS_COLORS
      },
      {
        label: "Hair type",
        component: "FemaleHair",
        prop: "type",
        tab: "Hair",
        values: [
          {name: "Wavy", value: "A"},
          {name: "Bun", value: "B"},
          {name: "Short", value: "C"},
          {name: "Curly", value: "D"},
          {name: "Elegant", value: "E"},
          {name: "Mikado", value: "F"},
          {name: "Straight long", value: "G"},
        ]
      },
      {
        label: "Hair color",
        component: "FemaleHair",
        prop: "color",
        tab: "Hair",
        values: HAIR_COLOR
      },
      {
        label: "Glasses type",
        component: "FemaleGlasses",
        prop: "type",
        tab: "Glasses",
        values: [
          {name: "No glasses", value: "A"},
          {name: "Big", value: "B"},
          {name: "Elegant", value: "FemaleA"},
          {name: "Sunglasses", value: "C"},
          {name: "Oldschool", value: "D"},
        ],
      },
      {
        label: "Glasses color",
        component: "FemaleGlasses",
        prop: "color",
        tab: "Glasses",
        values: COLORS
      },
      {
        label: "Clothes type",
        component: "FemaleClothes",
        prop: "type",
        tab: "Clothes",
        values: [
          {name: "Formal", value: "A"},
          {name: "Top", value: "B"},
          {name: "Elegant", value: "C"},
          {name: "T-shirt", value: "D"},
          {name: "Dress", value: "E"},
          {name: "V shirt", value: "F"},
        ]
      },
      {
        label: "Clothes color",
        component: "FemaleClothes",
        prop: "color",
        tab: "Clothes",
        values: COLORS
      },
      {
        label: "Clothes secondary color",
        component: "FemaleClothes",
        prop: "secondaryColor",
        tab: "Clothes",
        values: COLORS
      },
      {
        label: "Accessory type",
        component: "FemaleAccessory",
        prop: "type",
        tab: "Accessory",
        values: [
          {name: "No accessory", value: "A"},
          {name: "Headphones", value: "B"},
          {name: "Necklace", value: "FemaleA"},
          {name: "Headdress", value: "FemaleB"},
        ],
      },
      {
        label: "Accessory color",
        component: "FemaleAccessory",
        prop: "color",
        tab: "Accessory",
        values: COLORS
      },
      {
        label: "Nose color",
        component: "Nose",
        prop: "color",
        tab: "Skin",
        values: [LIP_COLOR]
      },
    ],
  },
  Male: {
    label: "Male",
    variants: [
      {
        label: "Skin color",
        component: "MaleHeadShape",
        prop: "color",
        tab: "Skin",
        values: SKIN_COLORS
      },
      {
        label: "Eyes type",
        component: "Eyes",
        prop: "type",
        tab: "Eyes",
        values: [
          {name: "Open", value: "A"},
          {name: "Wink left", value: "B"},
          {name: "Wink right", value: "C"},
          {name: "Happy", value: "D"}
        ]
      },
      {
        label: "Eyes color",
        component: "Eyes",
        prop: "color",
        tab: "Eyes",
        values: EYES_COLOR
      },
      {
        label: "Smile",
        component: "Mouth",
        prop: "type",
        tab: "Mouth",
        values: [
          {name: "Normal", value: "A"},
          {name: "Wide", value: "B"},
          {name: "Smile", value: "C"},
          {name: "Clever", value: "D"},
        ]
      },
      {
        label: "Lips color",
        component: "Mouth",
        prop: "color",
        tab: "Mouth",
        values: [LIP_COLOR]
      },
      {
        label: "Hair type",
        component: "MaleHair",
        prop: "type",
        tab: "Hair",
        values: [
          {name: "To side", value: "A"},
          {name: "Decent", value: "B"},
          {name: "Formal", value: "C"},
          {name: "Disheveled", value: "D"},
          {name: "Longer", value: "E"},
          {name: "Hipster", value: "F"},
          {name: "Ups", value: "G"},
        ]
      },
      {
        label: "Hair color",
        component: "MaleHair",
        prop: "color",
        tab: "Hair",
        values: HAIR_COLOR
      },
      {
        label: "Glasses type",
        component: "MaleGlasses",
        prop: "type",
        tab: "Glasses",
        values: [
          {name: "No glasses", value: "A"},
          {name: "Big", value: "B"},
          {name: "Elegant", value: "FemaleA"},
          {name: "Sunglasses", value: "C"},
          {name: "Oldschool", value: "D"},
        ],
      },
      {
        label: "Glasses color",
        component: "MaleGlasses",
        prop: "color",
        tab: "Glasses",
        values: COLORS
      },
      {
        label: "Clothes type",
        component: "MaleClothes",
        prop: "type",
        tab: "Clothes",
        values: [
          {name: "Hoodie", value: "A"},
          {name: "T-shirt", value: "B"},
          {name: "V shirt", value: "C"},
          {name: "Formal", value: "D"},
          {name: "Pullover", value: "E"},
          {name: "To neck", value: "F"},
        ]
      },
      {
        label: "Clothes color",
        component: "MaleClothes",
        prop: "color",
        tab: "Clothes",
        values: COLORS
      },
      {
        label: "Clothes secondary color",
        component: "MaleClothes",
        prop: "secondaryColor",
        tab: "Clothes",
        values: COLORS
      },
      {
        label: "Accessory type",
        component: "MaleAccessory",
        prop: "type",
        tab: "Accessory",
        values: [
          {name: "No accessory", value: "A"},
          {name: "Headphones", value: "B"},
        ],
      },
      {
        label: "Facial hair type",
        component: "MaleFacialHair",
        prop: "type",
        tab: "Facial hair",
        colorFrom: "MaleHair",
        values: [
          {name: "No", value: "A"},
          {name: "Beard", value: "B"},
          {name: "Hipster", value: "C"},
          {name: "Stubble", value: "D"},
          {name: "Moustache", value: "E"},
        ],
      },
      {
        label: "Accessory color",
        component: "MaleAccessory",
        prop: "color",
        tab: "Accessory",
        values: COLORS
      },
      {
        label: "Nose color",
        component: "Nose",
        prop: "color",
        tab: "Skin",
        values: [LIP_COLOR]
      },
    ]
  }
}
