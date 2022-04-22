import isJsonObject from './isJsonObject';

export default function getHouses(data) {

  const elements = data.allMysqlHouses.nodes;
  const houses = {};

  elements.forEach((item) => {
    if (houses[item.alias]) {
      houses[item.alias][item.name] = isJsonObject(item.value)
        ? JSON.parse(item.value)
        : item.value;

      if (item.name === 'modules') {
        houses[item.alias][item.name].forEach((module, index) => {
          if (module.rooms) {
            houses[item.alias][item.name][index].rooms = JSON.parse(
              houses[item.alias][item.name][index].rooms
            );
          }
        });
      }
    } else {
      houses[item.alias] = {};

      houses[item.alias][item.name] = isJsonObject(item.value)
        ? JSON.parse(item.value)
        : item.value;
      if (item.name === 'modules') {
        houses[item.alias][item.name].forEach((module, index) => {
          if (module.rooms) {
            houses[item.alias][item.name][index].rooms = JSON.parse(
              houses[item.alias][item.name][index].rooms
            );
          }
        });
      }

      houses[item.alias]['id'] = item.contentID;
    }
  });

  const houseArr = [];

  for (let key in houses) {
    houses[key]['alias'] = key;
    houseArr.push(houses[key]);
    houses[key]['countArea'] = (arr, field) => {
      let sum = 0;
      if (arr?.length > 0) {
        arr.forEach(
          (item) =>
            (sum += +(item[field] ? item[field].replace('К', '000') : 0))
        );
      }
      return sum;
    };
    houses[key]['takeFromBaseModule'] = (arr, field) => {
      if (arr?.length > 0) {
        let value = arr.filter(
          (module) => module.name === 'Базовый модуль'
        )?.[0]?.[field];
        if (value) {
          value = value.replace('К', '000');
        }
        return value;
      }
    };
  }
  console.log(houseArr)

  return houseArr;
}