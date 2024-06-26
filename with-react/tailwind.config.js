module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: { min: "200px", max: "767px" },
        md: { min: "768px", max: "1023px" },
      },
      colors: {
        medium_green: "#7F8C7D",
        dark_green: "#43593F",
        faint_green: "#f2f6f2",
        very_light_green: "#D2FB7B",
        light_blue: "#6780C9",
        light_green: "#E1F2DF",
        light_green_nav: "#EFF9EE",
        green_300: "#82b378",
        bluegray_50: "#ebf2f9",
        navy_blue: "#000080",
        dark_blueblack: "#262C25",
        black_900_b2: "#000000b2",
        red_400: "#cc6144",
        green_700: "#1b9e28",
        black_900_87: "#00000087",
        deep_orange_A700: "#e53b07",
        deep_purple_A201: "#9c4df4",
        deep_orange_500: "#ff6529",
        deep_purple_A200: "#8434dc",
        deep_orange_100: "#fbc2aa",
        teal_A700: "#00b59b",
        gray_900_26: "#0a033c26",
        gray_400: "#c1ada4",
        gray_401: "#dbc4bd",
        gray_802: "#594c4a",
        amber_500: "#ffc107",
        gray_800: "#424242",
        gray_801: "#433735",
        orange_600: "#f9880d",
        deep_orange_400_33: "#ff665233",
        black_900_0c: "#0000000c",
        orange_201: "#ffb973",
        orange_200: "#eebc74",
        bluegray_801: "#3e4d59",
        bluegray_800: "#3e4756",
        deep_purple_50: "#ecdbff",
        cyan_50: "#e5fff2",
        black_900_19: "#00000019",
        gray_52: "#f9f9f9",
        gray_51: "#f8fffb",
        green_200: "#a8d29f",
        gray_53: "#fafafa",
        red_300: "#d97356",
        red_53: "#fff0ec",
        deep_orange_400_87: "#ff665287",
        red_301: "#bc744a",
        red_51: "#ffede9",
        red_52: "#ffeee9",
        gray_50: "#f8f2ff",
        red_50: "#fff3f2",
        white_A700_33: "#ffffff33",
        deep_orange_800: "#c95c12",
        deep_orange_400_7f: "#ff65517f",
        deep_orange_401: "#e58638",
        deep_orange_400: "#ff6652",
        gray_700_99: "#5d5a6f99",
        yellow_100: "#fff2ce",
        gray_501: "#9b8580",
        gray_500: "#969696",
        gray_901: "#0a033c",
        gray_902: "#232323",
        gray_900: "#1c1c1b",
        gray_101: "#f5f5f5",
        gray_100: "#f7f7f7",
        bluegray_700: "#455a64",
        white_A700_b2: "#ffffffb2",
        deep_orange_A100: "#ffb27d",
        deep_orange_A101: "#fca56b",
        red_601: "#e04d3a",
        red_600: "#e93e30",
        red_602: "#e54935",
        deep_purple_400: "#8334db",
        deep_orange_300: "#fe8e68",
        deep_orange_301: "#eb996e",
        red_A700: "#c60000",
        gray_600: "#808080",
        orange_A200: "#ee9849",
        lime_900: "#874c2e",
        gray_200: "#ebebeb",
        gray_201: "#ececec",
        blue_50: "#e9f3fe",
        indigo_400: "#4a75cb",
        bluegray_600: "#516373",
        blue_300: "#699dee",
        white_A700: "#ffffff",
        indigo_800: "#1c468a",
        red_500: "#ff3333",
        red_100: "#eed9ce",
        black_900: "#000000",
        black_902: "#170600",
        black_901: "#1a0400",
        deep_orange_200: "#ffbe9d",
        gray_700: "#5d5a6f",
        gray_301: "#e0e0e0",
        indigo_50: "#d9e0fc",
        gray_900_00: "#0a023c00",
        gray_701: "#5a4f72",
        bluegray_100: "#d9d9d9",
        amber_200: "#ffdf7f",
        gray_300: "#dedde4",
        orange_300: "#ffb54a",
        teal_A400: "#07e5ca",
        white_A700_87: "#ffffff87",
        bluegray_900: "#283250",
        black_900_cc: "#000000cc",
        bluegray_102: "#d6ced7",
        bluegray_101: "#d7d7d7",
        indigo_900: "#163560",
        bluegray_903: "#263238",
        bluegray_902: "#2d2442",
        bluegray_901: "#3d302a",
      },
      borderRadius: {
        radius5: "5px",
        radius6: "6px",
        radius7: "7px",
        radius8: "8px",
        radius9: "9px",
        radius10: "10px",
        radius15: "15px",
        radius16: "16px",
        radius20: "20px",
        radius30: "30px",
        radius50: "50%",
        radius2155: "215.5px",
      },
      fontFamily: {
        inter: "Inter",
        metropolis: "Metropolis",
        airbnbcerealapp: "Airbnb Cereal App",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#0a023c00,#0a033c,#0a023c00)",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        "slate-400":
          "0 1px 3px rgba(15, 20, 25, 0.15), 0 1px 2px rgba(15, 20, 25, 0.1)",
        bs2: "0px 15px  50px 0px #ff665233",
        bs: "0px 50px  80px 0px #0000000c",
        bs3: "0px 50px  170px 0px #0000000c",
        bs1: "0px 50px  50px 0px #00000019",
      },
      letterSpacing: { ls1: "1px", ls048: "0.48px" },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
