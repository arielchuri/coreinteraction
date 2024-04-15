console.log("Hello world.")

fetch('my_data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

var mainContainer = document.getElementById("data_holder");

function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(i);
    var div = document.createElement("div");
    div.classList.add("gallerydiv");
    div.innerHTML = '<img src="' + data[i].filename + '" class="galleryphoto"><ul class="caption"><li><strong>Name: </strong>' + data[i].title + '</li><li><strong>Size: </strong>' +  data[i].size + '</li><li><strong>Location: </strong>' + data[i].location + '</li> </ul>';
    mainContainer.appendChild(div);
  }
}
