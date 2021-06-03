var helpers = {
  deepCopy: (obj) => JSON.parse(JSON.stringify(obj)),
  numericOnly: (event) =>
    (event.charCode != 8 && event.charCode == 0) ||
    event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57),
  mapByKey: (arr, key) => {
    let outputObj = {};
    arr.forEach((obj) => {
      let objCopy = JSON.parse(JSON.stringify(obj));
    //   delete objCopy[key]; //remove key from inner object that would otherwise be redundant
      outputObj[obj[key]] = objCopy;
    });
    return outputObj;
  },
  formatDate(d, options) {
    if (!d) {
      return null;
    }
    if(!(d instanceof Date)){
        d = new Date(Date.parse(d))
    }
    if(!options){
      options = { dateStyle: "short", timeStyle: "short" };
    }
    return d.toLocaleString("en-GB", options);
  },
  dateParser(date) {
    if (date) {
      const s = date.split(".");
      if (s.length === 3) {
        return new Date(
          parseInt(s[2], 10),
          parseInt(s[1], 10) - 1,
          parseInt(s[0], 10),
          0,
          0,
          0,
          0
        );
      }
      return null;
    }
    return null;
  },
  groupByKey: (arr, key) => {
    let outputObj = {};
    arr.forEach((obj) => {
      if (obj[key] in outputObj) {
        outputObj[obj[key]].push(obj);
      } else {
        outputObj[obj[key]] = [obj];
      }
    });
    return outputObj;
  },
  getKeyByValue: (object, value) =>
    Object.keys(object).find((key) => object[key] === value),
  displayDate(d, full = true, raw = false) {
    let dt = new Date(d);
    if (dt) {
      if (raw) {
        return dt;
      }
      if (full) {
        return dt.toLocaleString();
      }
      return dt.toLocaleDateString();
    }
    return "";
  },
  sortData(data, key) {
    if (!data) {
      return data;
    }
    return data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  },
  safeParse(data) {
    try {
      return JSON.parse(data);
    } catch (SyntaxError) {
      return null;
    }
  },
  uid() {
    return (
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(8)
    );
  },
};

export { helpers };
