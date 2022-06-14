//==================Task1===============

const videos = [
  {
    id: 5445654465,
    title: "The Chamber",
  },
  {
    id: 23423423423,
    title: "Facture",
  },
];

const createNewObject = (videoList) => {
  const result = {};
  videoList.forEach((video) => {
    result[video.id] = video.title;
  });
  return result;
};
console.log(createNewObject(videos));

//==================Task2===============

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "Max Payne",
  },
  {
    width: 150,
    height: 200,
    url: "Neo",
  },
  {
    width: 300,
    height: 200,
    url: "Morpheus",
  },
  {
    width: 425,
    height: 150,
    url: "Smith",
  },
];

const maxArea = (box) => {
  const newBox = box.map((currentBox) => {
    return { area: currentBox.width * currentBox.height, url: currentBox.url };
  });
  const result = newBox.reduce((accum, currentValue) => {
    if (accum.area < currentValue.area) {
      accum = currentValue;
    }
    return accum;
  });
  return result.url;
};
console.log(maxArea(boxarts));
