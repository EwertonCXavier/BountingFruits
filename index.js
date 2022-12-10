(async () => {
  const response = await fetch('./data.json');
  const data = await response.json();


  console.log(data);

  const imagesList = document.getElementById("images-list");

  for (let i = 0; i < data.length; i++) {
    const node = document.createElement("div");
    node.classList.add("reduced-image");
    const image = document.createElement("img");
    // Adds the 'src' attribute of the image
    image.src = data[i].path;
    // Adds the 'id' attribute of the image
    image.id = `image-${i}`;
    node.appendChild(image);
    imagesList.appendChild(node);



    node.addEventListener('click', (info) => {
      const clickId = info.path[0].id;
      const filteredId = clickId.match(/\-(.*)$/gm)[0].replace('-', '');
      console.log({ filteredId });
      console.log('HERE IS THE INFO OF THIS GUY: ', filteredId);

      const mainImage = document.getElementById("main-image");
      mainImage.innerHTML = "";

      const newImageContainer = document.createElement("div");
      newImageContainer.classList.add("main-image");
      const newImageElement = document.createElement("img");
      newImageElement.src = data[filteredId].path;
      newImageContainer.appendChild(newImageElement);

      mainImage.appendChild(newImageContainer);
    })
  }

})();