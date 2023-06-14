const { map, reduce } = require('@laufire/utils/collection');

const data = {
  cost: 10,
  name: 'buildHouse',
  tasks: [
    {
      cost: 5,
      name: 'purchase material',
      tasks: [
        {
          cost: 10,
          name: 'purchase cement',
        },
        {
          cost: 15,
          name: 'purchase steel',
        },
      ],
    },
    {
      cost: 0,
      name: 'invite people',
    },
  ],
}

const renderData = (data) => {
  const costDetails = data.tasks ? data.tasks.map(costDetails) : '-';

  return {
    cost: (costDetails === "-") ? data.cost :
      data.cost + reduce(costDetails, (acc, cur) => acc + cur.cost, 0),
    tasks: costDetails
  };

}
const main = () => console.log(JSON.stringify(renderData(data), null, " "));

main();