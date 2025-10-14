async function getRandomAyah() {
      try {
        const res = await fetch("https://api.quranhub.com/v1/ayah/random");
        const data = await res.json();
        const ayah = data.data;

        document.getElementById("ayah").textContent = `📖 (${ayah.text})`;
        document.getElementById("surah").textContent = `${ayah.surah.name} - آية ${ayah.numberInSurah}`;

        // جلب التفسير (إذا توفر endpoint)
        const tafsirRes = await fetch(`https://api.quranhub.com/v1/ayah/${ayah.id}/tafsir`);
        const tafsirData = await tafsirRes.json();
        document.getElementById("tafsir").textContent = `🧠 التفسير: ${tafsirData.data.text}`;
      } catch (err) {
        console.error("خطأ في جلب الآية أو التفسير:", err);
        document.getElementById("ayah").textContent = "حدث خطأ أثناء جلب الآية.";
      }
    }

    window.onload = () => {
      getRandomAyah();
      document.getElementById("btn").addEventListener("click", getRandomAyah);
    };