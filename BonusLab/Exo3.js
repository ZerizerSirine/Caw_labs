//
const setOne = arr => arr.filter((value, index, self) => self.indexOf(value) === index);
//
const getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));
