const SKIN_COLORS = [
  {"name": "Velice světlá", "value": "#FDDAC5"},
  {"name": "Světlá", "value": "#FBD2B4"},
  {"name": "Lehké opálení", "value": "#FCCC95"},
  {"name": "Tmavší", "value": "#E2B182"},
  {"name": "Tmavá", "value": "#DBA582", randomizer: false},
  {"name": "Velice tmavá", "value": "#A96C4F", randomizer: false},
];

const EYES_COLOR = [
  {"name": "Hnědé", "value": "#634e34"},
  {"name": "Tmavě modré", "value": "#2e536f"},
  {"name": "Světle modré", "value": "#A6B6C2"},
  {"name": "Zelená", "value": "#3d671d"},
  {"name": "Světle zelené", "value": "#1c7847"},
  {"name": "Šedo-zelená", "value": "#497665"},
];

const HAIR_COLOR = [
  {"name": "Černá", "value": "#090806"},
  {"name": "Do černa", "value": "#2C222B"},
  {"name": "Tmavě šedá", "value": "#71635A"},
  {"name": "Šedá", "value": "#B7A69E"},
  {"name": "Světle šedá", "value": "#D6C4C2"},
  {"name": "Blond platina", "value": "#CABFB1"},
  {"name": "Blond bílá", "value": "#FFF5E1"},
  {"name": "Světle blond", "value": "#E6CEA8"},
  {"name": "Blond do zlata", "value": "#E5C8A8"},
  {"name": "Popelavě blond", "value": "#DEBC99"},
  {"name": "Medově blond", "value": "#B89778"},
  {"name": "Jahodově blond", "value": "#A56B46"},
  {"name": "Světle zrzavá", "value": "#B55239"},
  {"name": "Tmavě zrzavá", "value": "#8D4A43"},
  {"name": "Světle auburn", "value": "#91553D"},
  {"name": "Tmavě auburn", "value": "#533D32"},
  {"name": "Tmavě hnědá", "value": "#3B3024"},
  {"name": "Zlatavě hnědá", "value": "#554838"},
  {"name": "Středně hnědá", "value": "#4E433F"},
  {"name": "Hnědá", "value": "#6A4E42"},
  {"name": "Světle hnědá", "value": "#A7856A"},
  {"name": "Popelavě hnědá", "value": "#977961"},
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

const LIP_COLOR = {"name": "Bez rtěnky", "value": "#ef843b"};

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
    label: "Žena",
    variants: [
      {
        label: "Barva pleti",
        component: "FemaleHeadShape",
        prop: "color",
        tab: "Pleť",
        values: SKIN_COLORS
      },
      {
        label: "Typ očí",
        component: "Eyes",
        prop: "type",
        tab: "Oči",
        values: [
          {name: "Otevřené", value: "A"},
          {name: "Mrknutí levým", value: "B"},
          {name: "Mrknutí pravým", value: "C"},
          {name: "Zavřené", value: "D"}
        ]
      },
      {
        label: "Barva očí",
        component: "Eyes",
        prop: "color",
        tab: "Oči",
        values: EYES_COLOR
      },
      {
        label: "Úsměv",
        component: "Mouth",
        prop: "type",
        tab: "Rty",
        values: [
          {name: "Normální", value: "A"},
          {name: "Široký", value: "B"},
          {name: "Úsměv", value: "C"},
          {name: "Potutelný", value: "D"},
        ]
      },
      {
        label: "Barva rtů",
        component: "Mouth",
        prop: "color",
        tab: "Rty",
        values: LIPSTICKS_COLORS
      },
      {
        label: "Typ vlasů",
        component: "FemaleHair",
        prop: "type",
        tab: "Vlasy",
        values: [
          {name: "Vlnité", value: "A"},
          {name: "Drdol", value: "B"},
          {name: "Nakrátko", value: "C"},
          {name: "Kudrnaté", value: "D"},
          {name: "Elegantní", value: "E"},
          {name: "Mikádo", value: "F"},
          {name: "Rovné dlouhé", value: "G"},
        ]
      },
      {
        label: "Barva vlasů",
        component: "FemaleHair",
        prop: "color",
        tab: "Vlasy",
        values: HAIR_COLOR
      },
      {
        label: "Typ brýlí",
        component: "FemaleGlasses",
        prop: "type",
        tab: "Brýle",
        values: [
          {name: "Bez brýlí", value: "A"},
          {name: "Velké", value: "B"},
          {name: "Elegantní", value: "FemaleA"},
          {name: "Sluneční", value: "C"},
          {name: "Oldschool", value: "D"},
        ],
      },
      {
        label: "Barva brýlí",
        component: "FemaleGlasses",
        prop: "color",
        tab: "Brýle",
        values: COLORS
      },
      {
        label: "Typ oblečení",
        component: "FemaleClothes",
        prop: "type",
        tab: "Oblečení",
        values: [
          {name: "Slušné", value: "A"},
          {name: "Tílko", value: "B"},
          {name: "Elegantní triko", value: "C"},
          {name: "Triko", value: "D"},
          {name: "Šaty", value: "E"},
          {name: "Triko s véčkem", value: "F"},
        ]
      },
      {
        label: "Hlavní barva oblečení",
        component: "FemaleClothes",
        prop: "color",
        tab: "Oblečení",
        values: COLORS
      },
      {
        label: "Vedlejší barva oblečení",
        component: "FemaleClothes",
        prop: "secondaryColor",
        tab: "Oblečení",
        values: COLORS
      },
      {
        label: "Typ dopňku",
        component: "FemaleAccessory",
        prop: "type",
        tab: "Doplňky",
        values: [
          {name: "Bez doplňku", value: "A"},
          {name: "Sluchátka", value: "B"},
          {name: "Náhrdelník", value: "FemaleA"},
          {name: "Čelenka", value: "FemaleB"},
        ],
      },
      {
        label: "Barva doplňku",
        component: "FemaleAccessory",
        prop: "color",
        tab: "Doplňky",
        values: COLORS
      },
      {
        label: "Barva nosu",
        component: "Nose",
        prop: "color",
        tab: "Pleť",
        values: [LIP_COLOR]
      },
    ],
  },
  Male: {
    label: "Muž",
    variants: [
      {
        label: "Barva pleti",
        component: "MaleHeadShape",
        prop: "color",
        tab: "Pleť",
        values: SKIN_COLORS
      },
      {
        label: "Typ očí",
        component: "Eyes",
        prop: "type",
        tab: "Oči",
        values: [
          {name: "Otevřené", value: "A"},
          {name: "Mrknutí levým", value: "B"},
          {name: "Mrknutí pravým", value: "C"},
          {name: "Zavřené", value: "D"}
        ]
      },
      {
        label: "Barva očí",
        component: "Eyes",
        prop: "color",
        tab: "Oči",
        values: EYES_COLOR
      },
      {
        label: "Úsměv",
        component: "Mouth",
        prop: "type",
        tab: "Rty",
        values: [
          {name: "Normální", value: "A"},
          {name: "Široký", value: "B"},
          {name: "Úsměv", value: "C"},
          {name: "Potutelný", value: "D"},
        ]
      },
      {
        label: "Barva rtů",
        component: "Mouth",
        prop: "color",
        tab: "Rty",
        values: [LIP_COLOR]
      },
      {
        label: "Typ vlasů",
        component: "MaleHair",
        prop: "type",
        tab: "Vlasy",
        values: [
          {name: "Na stranu", value: "A"},
          {name: "Slušné", value: "B"},
          {name: "Patka", value: "C"},
          {name: "Rozcuch", value: "D"},
          {name: "Delší", value: "E"},
          {name: "Hipster", value: "F"},
          {name: "Ups", value: "G"},
        ]
      },
      {
        label: "Barva vlasů",
        component: "MaleHair",
        prop: "color",
        tab: "Vlasy",
        values: HAIR_COLOR
      },
      {
        label: "Typ brýlí",
        component: "MaleGlasses",
        prop: "type",
        tab: "Brýle",
        values: [
          {name: "Bez brýlí", value: "A"},
          {name: "Velké", value: "B"},
          {name: "Elegantní", value: "MaleA"},
          {name: "Sluneční", value: "C"},
          {name: "Oldschool", value: "D"},
        ],
      },
      {
        label: "Barva brýlí",
        component: "MaleGlasses",
        prop: "color",
        tab: "Brýle",
        values: COLORS
      },
      {
        label: "Typ oblečení",
        component: "MaleClothes",
        prop: "type",
        tab: "Oblečení",
        values: [
          {name: "Mikina", value: "A"},
          {name: "Triko", value: "B"},
          {name: "Triko s véčkem", value: "C"},
          {name: "Formální", value: "D"},
          {name: "Svetr", value: "E"},
          {name: "Ke krku", value: "F"},
        ]
      },
      {
        label: "Hlavní barva oblečení",
        component: "MaleClothes",
        prop: "color",
        tab: "Oblečení",
        values: COLORS
      },
      {
        label: "Vedlejší barva oblečení",
        component: "MaleClothes",
        prop: "secondaryColor",
        tab: "Oblečení",
        values: COLORS
      },
      {
        label: "Typ dopňku",
        component: "MaleAccessory",
        prop: "type",
        tab: "Doplňky",
        values: [
          {name: "Bez doplňku", value: "A"},
          {name: "Sluchátka", value: "B"},
        ],
      },
      {
        label: "Typ vousů",
        component: "MaleFacialHair",
        prop: "type",
        tab: "Vousy",
        colorFrom: "MaleHair",
        values: [
          {name: "Bez", value: "A"},
          {name: "Plnovous", value: "B"},
          {name: "Hipster", value: "C"},
          {name: "Strniště", value: "D"},
          {name: "Knír", value: "E"},
        ],
      },
      {
        label: "Barva doplňku",
        component: "MaleAccessory",
        prop: "color",
        tab: "Doplňky",
        values: COLORS
      },
      {
        label: "Barva nosu",
        component: "Nose",
        prop: "color",
        tab: "Pleť",
        values: [LIP_COLOR]
      },
    ]
  }
}
