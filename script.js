document.body.innerHTML +='<div id="nolook-preview"></div>'
document.body.classList.add('nolook')

var previewDollarAmount = function(value) {
  document.getElementById('nolook-preview').innerText = value;
};

var resetDollarAmount = function() {
  document.getElementById('nolook-preview').innerText = '';
};

var allNodes = document.getElementsByTagName("*");
var hiddenNodes = [];

[].forEach.call(allNodes, function(elem){
    var content = elem.innerText,
      filteredContent = content.replace(',', '').replace('-', '').trim()

    if (/^\$\d+\.([0-9][0-9])$/.test(filteredContent)) {
      elem.classList.add('hideHover');
      elem.dataset.value = content;
      hiddenNodes.push(elem)
    }

});

hiddenNodes.forEach(function(elem){
  elem.addEventListener("mouseenter", function () { previewDollarAmount(elem.dataset.value) });
  elem.addEventListener("mouseleave", resetDollarAmount);
});
