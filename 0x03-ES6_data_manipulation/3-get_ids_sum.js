// A function that returns the sum of all the student ids.
const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
