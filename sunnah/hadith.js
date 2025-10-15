function RandomHadith() {
  try {
    fetch("https://hadeethenc.com/api/v1/hadeeths")
    .thin(res => res.json())
    .then(data => {
      document.getElementById("hadith").textContent = data.hadeeth.text;
      document.getElementById("source").textContent = data.hadeeth.source;
      document.getElementById("explanation").textContent = data.hadeeth.explanation;
    });
} catch (err) {
    console.error(err);
}
}