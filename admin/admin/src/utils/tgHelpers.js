import React from "react";


//export const CMS_PATH = "https://streetsforpeople-cms.lacity.org";
//export const CMS_PATH = "https://streetsforpeople-cms-preview.lacity.org";
// export const CMS_PATH = 'http://192.168.0.138:1337';
export const CMS_PATH = 'http://localhost:1337';
//export const CMS_PATH = 'http://192.168.1.68:1337';


export const checkStatus = response => {
  if (response.ok) return response;
  else throw new Error(response.error);
};
export const cleanObj = myObj => {
  Object.keys(myObj).forEach(key => {
    !myObj[key] && delete myObj[key];
  });

  return myObj;
};
export const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj));
};
export const encodeData = data => {
  return Object.keys(data)
    .map(function (key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
    })
    .join("&");
};
export const getById = (state, id) => state.find(item => item.id === id);
export const getHighlightedText = (text, highlight) => {
  if (typeof highlight == "undefined") return text;

  // Split on highlight term and include term into parts, ignore case
  let parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {" "}
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? {fontWeight: "bold"}
              : {}
          }
        >
          {part}
        </span>
      ))}{" "}
    </span>
  );
};
export const intersection = (array1, array2) => {
  return array1.filter(element => array2.includes(element));
};
export const lowercaseFirstLetter = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};
export const nLinks = text => {
  return text.split("\n").map(item => {
    return item;
  });
};
export const nToP = text => {
  return text.split("\n").map((item, i) => {
    return <p key={i}>{item}</p>;
  });
};
export const parseJSON = data => {
  return data.json();
};
export const toCamelCase = str => {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) =>
      idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()
    )
    .replace(/\s+/g, "");
};
export const trimToWord = (str, maxLength) => {
  if (!str) return str;
  var trimmedString = str.substr(0, maxLength);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  return trimmedString;
};
export const updateOrAdd = (arr, item) => {
  let replaced = false;
  let newArr = arr.map(arr_item => {
    let match = arr_item.id == item.id;
    replaced = match ? true : replaced;
    return match ? {...arr_item, ...item} : arr_item;
  });
  return replaced ? newArr : [...arr, item];
};
export const urlParams = () => {
  return location.search
    .slice(1)
    .split("&")
    .map(p => p.split("="))
    .reduce((obj, pair) => {
      const [key, value] = pair.map(decodeURIComponent);
      return {...obj, [key]: value};
    }, {});
};


export const buildStrapiParams = (filters) => {
  filters = filters || [];
  let paramsStr = '';

  Object.keys(filters).forEach(filterKey => {
    let filter = filters[filterKey];
    if (Array.isArray(filter))
      filter.forEach(filterItem => {
        paramsStr += `${paramsStr.length > 0 ? '&' : ''}${filterKey}=${filterItem}`;
      });
    else if (typeof filter != "undefined" && filter.length > 0)
      paramsStr += `${paramsStr.length > 0 ? '&' : ''}${filterKey}=${filter}`;
  });

  return paramsStr;
};
export const loadEndpoint = (endpoint, id, data) => {
  data = {"Soft Delete_ne": true, ...data};

  let url = `${CMS_PATH}/${endpoint}`;
  url += id ? `/${id}` : ``;
  url += data ? (url.indexOf('?') >= 0 ? `&` : '?' + `${encodeData(data)}`) : '';

  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => console.log('---error---', err.message));
};
export const loadEndpointByFilters = (endpoint, filters) => {
  return loadEndpoint(`${endpoint}?${buildStrapiParams(filters)}`);
};