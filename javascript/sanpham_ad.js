function toggleDisplay(){
  let elements = document.getElementsByClassName('item');
  for (let i = 0; i < elements.length; i++) {
    // Toggle giữa 'block' và 'none'
    elements[i].style.display = (elements[i].style.display === 'block') ? 'none' : 'block';
  }

  let previousBtn = document.getElementById('previousBtn');
  previousBtn.style.display = (previousBtn.style.display === 'none') ? 'inline-block' : 'none';

  let nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = (nextBtn.style.display === 'none') ? 'inline-block' : 'none';
}

function kickQuaTrang(pageNumber){
  let page1 = document.getElementById('page1');
  let page2 = document.getElementById('page2');
  if(pageNumber == 1){
    page1.style.backgroundColor = 'black';
    page1.style.color = 'white';
  }
  else {
    page1.style.backgroundColor = '#EFEFEF';
    page1.style.color = 'black'; 
  }

  if(pageNumber == 2){
    page2.style.backgroundColor = 'black';
    page2.style.color = 'white';
  }
  else {
    page2.style.backgroundColor = '#EFEFEF';
    page2.style.color = 'black';
  }
}