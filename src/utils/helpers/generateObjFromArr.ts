const generateObjFromArr = (arr) => {
  return arr.reduce((acc, obj) => {
    acc[obj.id] = obj;
    return acc;
  }, {});
};

export default generateObjFromArr;
