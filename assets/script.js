const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  ];
  
const inventors1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  console.log(inventors1500s);
  
const inventorNames = inventors.map(inventor => ({ first: inventor.first, last: inventor.last }));
  console.log(inventorNames);
  
const sortedInventors = inventors.sort((a, b) => a.year - b.year);
  console.log(sortedInventors);

const adaInventor = inventors.find(inventor => inventor.first === 'Ada');
  console.log(adaInventor);
  
const totalYearsLived = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
  console.log(totalYearsLived);
  
const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  ];
  
const formattedNames = people.map(name => {
    const [last, first] = name.split(', ');
    return `${first} ${last}`;
  });
  console.log(formattedNames);
  
const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
const dataCounts = data.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});
  console.log(dataCounts);
  
const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
  ];
  
const isNineteenOrOlder = devs.some(dev => new Date().getFullYear() - dev.year >= 19);
  console.log(isNineteenOrOlder);
  
const isEveryoneNineteenOrOlder = devs.every(dev => new Date().getFullYear() - dev.year >= 19);
  console.log(isEveryoneNineteenOrOlder);
  
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
  ];
  
const commentWithId = comments.find(comment => comment.id === 823423);
  console.log(commentWithId);
  
const indexWithId = comments.findIndex(comment => comment.id === 123523);
  console.log(indexWithId);
  