// A function that returns an array of ids from a list of object.
const getListStudentIds = (myArray) => {
  if (!Array.isArray(myArray)) {
    return [];
  }
  return myArray.map((studentId) => studentId.id);
};

export default getListStudentIds;
