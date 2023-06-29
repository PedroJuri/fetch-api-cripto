// Minha Chave da API

let apikey = {
    key: '8c7f5b01-6cd8-456a-8cdd-913c2968a64c'
}

// Requisição Get Fetch

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json()
    })
    .then((api) => {
        let texto = ''
        for(let i = 0; i < 10; i++){
            texto = texto + `
                <div class="media">
                    <img src="./assets/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                    <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                        <p>Primeira data de aparição da moeda: ${api.data[i].first_historical_data}</p><hr><hr>
                    <div/>
                </div>
            `;

            document.getElementById("coins").innerHTML = texto
        }
    })
    .catch((error) => {
        console.error(error.message)
    })