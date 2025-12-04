async function getRandomAyah() {
    try {
        const res = await fetch(" https://api.quranhub.com/v1/ayah/49:11");
        const data = await res.json();
        const ayah = data.data;
        console.log(ayah)

        document.getElementById("ayat").textContent = ` { ${ayah.text} (11)}`;

        const res2 = await fetch(" https://api.quranhub.com/v1/ayah/49:11/ar.muyassar");
        const data2 = await res2.json();
        const ayah2 = data2.data;
        
        document.getElementById("ayat1").textContent = ` ( ${ayah2.text} )`;

        const res3 = await fetch("https://api.quranhub.com/v1/ayah/49:12");
        const data3 = await res3.json();
        const ayah3 = data3.data;

        document.getElementById("ayat2").textContent = ` { ${ayah3.text} (12)}`;

        const res4 = await fetch("https://api.quranhub.com/v1/ayah/49:12/ar.muyassar");
        const data4 = await res4.json();
        const ayah4 = data4.data;
        
        document.getElementById("ayat22").textContent = ` ( ${ayah4.text} )`;

        const res5 = await fetch("https://api.quranhub.com/v1/ayah/49:13");
        const data5 = await res5.json();
        const ayah5 = data5.data;

        document.getElementById("ayat3").textContent = ` { ${ayah5.text} (13)}`;

        const res6 = await fetch("https://api.quranhub.com/v1/ayah/49:13/ar.muyassar");
        const data6 = await res6.json();
        const ayah6 = data6.data;
        
        document.getElementById("ayat33").textContent = ` ( ${ayah6.text} )`;
        


        
        
    } catch (err) {
        document.getElementById("ayah").textContent = "حدث خطاء اثناء جلب الآية.";
    }
}
    
window.onload = () => {
    getRandomAyah();
}