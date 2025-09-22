export interface BlockType {
  id: string;
  name: string;
  color: string;
  shape: number[][];
}

export const BLOCKS: BlockType[] = [
  {
    id: "I",
    name: "I-Block",
    color: "#00f0f0",
    shape: [
      [1, 1, 1, 1]
    ]
  },
  {
    id: "O",
    name: "O-Block",
    color: "#f0f000",
    shape: [
      [1, 1],
      [1, 1]
    ]
  },
  {
    id: "T",
    name: "T-Block",
    color: "#a000f0",
    shape: [
      [0, 1, 0],
      [1, 1, 1]
    ]
  },
  {
    id: "L",
    name: "L-Block",
    color: "#f0a000",
    shape: [
      [0, 0, 1],
      [1, 1, 1]
    ]
  },
  {
    id: "J",
    name: "J-Block",
    color: "#0000f0",
    shape: [
      [1, 0, 0],
      [1, 1, 1]
    ]
  },
  {
    id: "S",
    name: "S-Block",
    color: "#00f000",
    shape: [
      [0, 1, 1],
      [1, 1, 0]
    ]
  },
  {
    id: "Z",
    name: "Z-Block",
    color: "#f00000",
    shape: [
      [1, 1, 0],
      [0, 1, 1]
    ]
  }
];

export const POWER_BLOCKS = [
  {
    id: "bomb",
    name: "Bomb Block",
    color: "#ff00ff",
    shape: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]
  },
  {
    id: "line-clear",
    name: "Line Clear",
    color: "#ffffff",
    shape: [
      [1],
      [1],
      [1],
      [1]
    ]
  },
  {
    id: "color-change",
    name: "Color Change",
    color: "#00ffff",
    shape: [
      [1, 1],
      [1, 1]
    ]
  }
];