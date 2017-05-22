class Negociacao {
	
    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime()); // criando uma nova instância a partir do tempo de uma data 
        this._quantidade = quantidade;
        this._valor = valor;
		
		Object.freeze(this); // congela a instância do objeto
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime()); // novidade aqui! retorna uma nova Data
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}