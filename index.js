const { map ,reduce} = require('@laufire/utils/collection');

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
          cost:0,
          name: 'invite people',
      },
    ],
  }


const getList = (data) =>
{
  const renderData = data.tasks ? data.tasks.map((task) => getList(task)):'-';
  
    return { 
      cost : (renderData === "-")? data.cost : data.cost+reduce(renderData,(acc,cur)=>acc+cur.cost,0),
      tasks : renderData };
  
}
const main = () => console.log(JSON.stringify(getList(data),null," "));

main();