function Github(){
    window.open('https://github.com/dooom77-0/py-projects/tree/main/%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%A8%D8%A7%D9%8A%D8%AB%D9%88%D9%86','_blank')
}

function opinion(){
  let opinion = prompt('What is your opinions?');

  if(opinion){
    localStorage.setItem('useropinion',opinion)

    document.getElementById('feedback').innerText = '(Thanks for feedback)';
  }
  else{
    document.getElementById('feedback').innerText = 'No opinion has been entered'
  }
}
