var cv = document.getElementById('cv');
var article=document.getElementById('article');
var labelcv = document.getElementById('cvupload');
var labelarticle = document.getElementById('articleupload');

cv.addEventListener('change', showCvName);
article.addEventListener('change', showArticleName);

function showCvName(event) {
    var cv=event.target;
    var fileName = cv.files[0].name;
    labelcv.textContent = fileName;
    labelcv.style.display='block';
}

function showArticleName(event) {
    var article=event.target;
    var fileName = article.files[0].name;
    labelarticle.textContent = fileName;
    labelarticle.style.display='block';
}