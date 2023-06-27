import Queue from '../Queue';

function hotPotato(elementList: any[], num: number) {
  const queue = new Queue();
  const elimitatedList = [];

  for (let index = 0; index < elementList.length; index++) {
    const element = elementList[index];
    queue.enqueue(element);
  }

  while (queue.size() > 0) {
    for (let index = 0; index < num; index++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    elimitatedList,
    winner: queue.dequeue(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

console.log(hotPotato(names, 3));
