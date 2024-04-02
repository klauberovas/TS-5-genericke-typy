// // console.log('hello world');

// // type Color = 'orange' | 'yellow' | 'green';
// // const color: Color = ['orange', 'orange', 'orange'];
// // //vyrábí z jednoho typy stejný typ
// // type Nullable<T> = T | null;
// // const x: Nullable<boolean>;

// // //
// // interface Pair<T> {
// //   first: T;
// //   second: T;
// // }
// // const splitEmail = (email: string): Pair<string> => {
// //   const [first, second] = email.split('@');
// //   return { first, second };
// // };

// // const splitLoot = (loot: number): Pair<number> => {
// //   const first = Math.floor(loot * 0.6); // 60%
// //   const second = Math.floor(loot * 0.4); // 40%
// //   return { first, second };
// // };

//  //-----------------------------------------------------

//  interface Pair2<T, U> {
//  first: T;
//  second: U;
// }
// // v Pair bude stejny typ
// type Pair<T> = Pair2<T, T>

// const splitEmail = (email: string): Pair<string> => {
//  const [first, second] = email.split('@');
//  return { first, second };
// };

// const splitLoot = (loot: number): Pair<number> => {
//  const first = Math.floor(loot * 0.6); // 60%
//  const second = Math.floor(loot * 0.4); // 40%
//  return { first, second };
// };

// ///----------------PROMISY----------------------------------
// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const fetchTodos = async (): Promise<Todo[]> => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json() as Todo[];
//   return data;
// }

// //podtržení protože nelze použit top level await
// const todos = await fetchTodos();

//--------------------------------------
// Funkce head vrátí první prvek pole nebo null, pokud je pole prázdné.

const head = <T>(arr: T[]): T | null => {
  return arr.length === 0 ? null : arr[0];
};

console.log(head([1, 2, 3, 4, 5, 6]));
console.log(head(['eva', 'petr', 'tomáš']));
console.log(head([]));

//Funkce tail vrátí všechny prvky pole kromě prvního nebo prázdné pole, pokud je vstupní pole prázdné.
const tail = <T>(arr: T[]): T[] | [] => {
  return arr.length === 0 ? [] : arr.slice(1);
};
console.log(tail([1, 2, 3, 4, 5, 6]));
console.log(tail(['eva', 'petr', 'tomáš']));

//Funkce butLast vrátí všechny prvky pole kromě posledního nebo prázdné pole, pokud je vstupní pole prázdné.
const butLast = <T>(arr: T[]): T[] => {
  return arr.slice(0, -1);
};
console.log(butLast([1, 2, 3, 4, 5, 6]));
console.log(butLast(['eva', 'petr', 'tomáš']));
console.log(butLast([]));

//Funkce last vrátí poslední prvek pole nebo null, pokud je pole prázdné.
const last = <T>(arr: T[]): T | null => {
  return arr.length === 0 ? null : arr[arr.length - 1];
};
console.log(last([1, 2, 3, 4, 5, 6]));
console.log(last(['eva', 'petr', 'tomáš']));
console.log(last([]));

//Funkce isEmpty vrátí true, pokud je pole prázdné, jinak false.

const isEmpty = <T>(arr: T[]): boolean => {
  return arr.length === 0;
};

console.log(isEmpty([1, 2, 3, 4, 5, 6]));
console.log(isEmpty(['eva', 'petr', 'tomáš']));
console.log(isEmpty([]));

//Funkce concat spojí dvě pole do jednoho pole.

const concat = <T>(first: T[], second: T[]): T[] => {
  return first.concat(second);
};

console.log(concat([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]));
console.log(concat(['eva', 'petr', 'tomáš'], ['eva', 'petr', 'tomáš']));

//Funkce contains vrátí true, pokud pole obsahuje hledaný prvek, jinak false.
// const contains = <T>(arr: T[], value: unknown): boolean => {
//   return arr.some((item) => item === value);
// };

const contains = <T>(arr: T[], value: T): boolean => {
  return arr.includes(value);
};
console.log(contains([1, 2, 3, 4, 5, 6], 5));
console.log(contains(['eva', 'petr', 'tomáš'], 'aleš'));

//Funkce strip bude brát pole, které jako své prvky může obsahovat hodnoty null a vrátí pole, které bude obsahovat jen ty prvky, které nejsou null.
const strip = <T>(arr: (T | null)[]): T[] => {
  return arr.filter((item) => item !== null) as T[];
  // arr.filter((item): item is T => item !== null)
};
console.log(strip([1, 2, null, null, 3, 4, 5, 6]));
console.log(strip(['eva', 'petr', null, null, 'tomáš']));
console.log(strip(['eva', 'petr', 'tomáš']));

//Funkce insert vloží na zadanou pozici do pole nový prvek a vrátí nové pole.
// insert([1, 2, 3], 1, 4); // [1, 4, 2, 3]
const insert = <T>(arr: T[], index: number, value: T): T[] => {
  return arr.slice(0, index).concat([value]).concat(arr.slice(index));
  // arr.splice(index, 0, value);
  // return arr;
};
console.log(insert([1, 2, 3], 1, 4));

//Funkce remove odebere prvek na zadané pozici a vrátí nové pole.
// [1, 3]
const remove = <T>(arr: T[], index: number): T[] => {
  arr.splice(index, 1);
  return arr;
};

console.log(remove([1, 2, 3], 1));
