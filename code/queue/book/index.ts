import Queue from './Queue';

function hotPotato<T>(elementList: T[], num: number) {
  const queue = new Queue<T>();
  const elimitatedList: T[] = [];

  for (let index = 0; index < elementList.length; index++) {
    const element = elementList[index];
    queue.enqueue(element);
  }

  while (queue.size() > 0) {
    for (let index = 0; index < num; index++) {
      const r = queue.dequeue();
      r && queue.enqueue(r);
    }
    const rt = queue.dequeue();
    rt && elimitatedList.push(rt);
  }

  return {
    elimitatedList,
    winner: queue.dequeue(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// const result = hotPotato<string>(names, 7);

console.log(hotPotato(names, 3));
