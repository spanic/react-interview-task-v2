const data = [
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
];

const exampleData = [
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
      id: "V_F_Greenranger",
      source: "V",
      target: "F",
      color: "#FF36AB",
      name: "Greenranger",
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
];

const transformedData = transform(data);

export default function transform(data) {
  // TODO: implement data transformation logic here
  return [];
}

export { exampleData, transformedData };
