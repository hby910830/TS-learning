interface Course {
  category: 'task' | 'live';
  category1?: string;
}

const Course:Course = {
  category: 'task'
}

console.log(Course);

type Dir = 'east' | 'west' | 'north' | 'south'

const dir:Dir = 'east'
console.log(dir);