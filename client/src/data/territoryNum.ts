interface ObjectData {
  id: number;
  name: number;
  value: number;
}

const territoryNumArray: ObjectData[] = [];

for (let i = 1; i <= 34; i++) {
  territoryNumArray.push({
    id: i,
    name: i,
    value: i,
  });
}

export default territoryNumArray;
