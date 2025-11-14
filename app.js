document.getElementById("convertBtn").addEventListener("click", convertCurrency);

async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (!amount || amount <= 0) {
        document.getElementById("result").innerText = "Lütfen geçerli bir miktar giriniz!";
        return;
    }


    const apiURL = `https://api.exchangerate-api.com/v4/latest/${from}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        const rate = data.rates[to];
        const result = (amount * rate).toFixed(2);

        document.getElementById("result").innerText =
            `${amount} ${from} = ${result} ${to}`;

    } catch (error) {
        document.getElementById("result").innerText = "Hata oluştu. API ulaşılabilir değil.";
    }
}
