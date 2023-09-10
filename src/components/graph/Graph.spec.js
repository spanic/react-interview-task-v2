import transform from "./graph-model";

describe("Graph data transform function", () => {
  const source = [
    [
      {
        name: "Greenranger",
        color: "#FF36AB",

        from: "V",
        to: "X",
        via: ["F", "G"],
      },
      {
        name: "Purplemage",
        from: "F",
        to: "X",
        via: ["G", "V"],
      },
      {
        name: "Silverhunter",
        color: "#F7B32B",

        from: "M",
        to: "V",
        via: ["G"],
      },
      {
        name: "Redwarrior",
        color: "#373276",

        from: "A",
        to: "C",
        via: ["B"],
      },
    ],
    [
      {
        name: "Starwind",
        color: "#FF36AB",

        from: "A",
        to: "E",
        via: ["B", "C", "D"],
      },
      {
        name: "Moonriver",
        from: "B",
        to: "C",
      },
      {
        name: "Thunderbear",
        color: "#F7B32B",

        from: "C",
        to: "E",
        via: ["B"],
      },
    ],
  ];

  const results = [
    [
      {
        data: {
          id: "V",
        },
      },
      {
        data: {
          id: "X",
        },
      },
      {
        data: {
          id: "F",
        },
      },
      {
        data: {
          id: "G",
        },
      },
      {
        data: {
          id: "M",
        },
      },
      {
        data: {
          id: "A",
        },
      },
      {
        data: {
          id: "C",
        },
      },
      {
        data: {
          id: "B",
        },
      },
      {
        data: {
          id: "V_F_Greenranger",
          source: "V",
          target: "F",
          color: "#FF36AB",
          name: "Greenranger",
        },
      },
      {
        data: {
          id: "F_G_Greenranger",
          source: "F",
          target: "G",
          color: "#FF36AB",
          name: "Greenranger",
        },
      },
      {
        data: {
          id: "G_X_Greenranger",
          source: "G",
          target: "X",
          color: "#FF36AB",
          name: "Greenranger",
        },
      },
      {
        data: {
          id: "F_G_Purplemage",
          source: "F",
          target: "G",
          name: "Purplemage",
        },
      },
      {
        data: {
          id: "G_V_Purplemage",
          source: "G",
          target: "V",
          name: "Purplemage",
        },
      },
      {
        data: {
          id: "V_X_Purplemage",
          source: "V",
          target: "X",
          name: "Purplemage",
        },
      },
      {
        data: {
          id: "M_G_Silverhunter",
          source: "M",
          target: "G",
          color: "#F7B32B",
          name: "Silverhunter",
        },
      },
      {
        data: {
          id: "G_V_Silverhunter",
          source: "G",
          target: "V",
          color: "#F7B32B",
          name: "Silverhunter",
        },
      },
      {
        data: {
          id: "A_B_Redwarrior",
          source: "A",
          target: "B",
          color: "#373276",
          name: "Redwarrior",
        },
      },
      {
        data: {
          id: "B_C_Redwarrior",
          source: "B",
          target: "C",
          color: "#373276",
          name: "Redwarrior",
        },
      },
    ],
    [
      {
        data: {
          id: "A",
        },
      },
      {
        data: {
          id: "E",
        },
      },
      {
        data: {
          id: "B",
        },
      },
      {
        data: {
          id: "C",
        },
      },
      {
        data: {
          id: "D",
        },
      },
      {
        data: {
          id: "A_B_Starwind",
          source: "A",
          target: "B",
          color: "#FF36AB",
          name: "Starwind",
        },
      },
      {
        data: {
          id: "B_C_Starwind",
          source: "B",
          target: "C",
          color: "#FF36AB",
          name: "Starwind",
        },
      },
      {
        data: {
          id: "C_D_Starwind",
          source: "C",
          target: "D",
          color: "#FF36AB",
          name: "Starwind",
        },
      },
      {
        data: {
          id: "D_E_Starwind",
          source: "D",
          target: "E",
          color: "#FF36AB",
          name: "Starwind",
        },
      },
      {
        data: {
          id: "B_C_Moonriver",
          source: "B",
          target: "C",
          name: "Moonriver",
        },
      },
      {
        data: {
          id: "C_B_Thunderbear",
          source: "C",
          target: "B",
          color: "#F7B32B",
          name: "Thunderbear",
        },
      },
      {
        data: {
          id: "B_E_Thunderbear",
          source: "B",
          target: "E",
          color: "#F7B32B",
          name: "Thunderbear",
        },
      },
    ],
  ];

  test.each(source.map((data, i) => [data, results[i]]))(
    "transforms the data %#",
    (input, result) => {
      expect(transform(input)).toEqual(result);
    }
  );
});
