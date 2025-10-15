async function getRandomAyah() {
      try {
        const res = await fetch("https://api.quranhub.com/v1/ayah/random");
        const data = await res.json();
        const ayah = data.data;

        document.getElementById("ayah").textContent = `📖 {${ayah.text}}`;
        document.getElementById("surah").textContent = `${ayah.surah.name} - آية ${ayah.numberInSurah}`;

        // التفسير من موقع آخر
        const tafsirLink = `https://tafsir.app/ayah/${ayah.surah.number}/${ayah.numberInSurah}`;
        document.getElementById("tafsir").innerHTML = `<a href="${tafsirLink}" target="_blank">عرض التفسير  tafsir.app</a>`;


      } catch (err) {
        document.getElementById("ayah").textContent = "حدث خطأ أثناء جلب الآية.";
      }
    }

    window.onload = () => {
      getRandomAyah();
      document.getElementById("btn").addEventListener("click", getRandomAyah);
};
    
//------------------------------------------Script loaded successfully------------------------------------------//