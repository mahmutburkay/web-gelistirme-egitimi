class Currency {
  constructor() {
    this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    // console.log(result); // değeri alabildik mi konsola yaz dene 

    const exchangedResult = amount * result.data[secondCurrency]; // girilen değeri, gelen data (kur) ile çarp

    return exchangedResult;
  }
}