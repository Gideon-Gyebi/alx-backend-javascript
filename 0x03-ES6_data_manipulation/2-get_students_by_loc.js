// A function returning an array of objects located in a specific city.
const getStudentsByLocation = (students, city) => {
  const arratyObjec = students.filter((funtion) => funtion.location === city);
  return arratyObjec;
};

export default getStudentsByLocation;
