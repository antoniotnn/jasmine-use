describe("Teste do toThrowError", () => {

    it('Deve demonstrar o uso do toThrowError', () => {
        // verifica se uma exceção é lançada por um método.
        // Valida o tipo da exceção lançada
        // Valida a mensagem de erro contida na exceção lançada
        // suporta regex na validação da msg de erro da exceção
        // deve ser utilizada para maior controle do erro lançado

        var somar = (n1, n2) => {
            if(n1 <= 0 || n2 <= 0) {
                throw new TypeError("Deve ser maior que 0");
            }
            return n1 + n2;
        }

        expect(() => somar(0, 0)).toThrowError(); //se lança erro
        expect(() => somar(0, 0)).toThrowError("Deve ser maior que 0"); // se lança erro com essa descrição exata
        expect(() => somar(0, 0)).toThrowError(/maior que 0/); // regex
        expect(() => somar(0, 0)).toThrowError(TypeError); //erro do tipo TypeError
        expect(() => somar(0, 0)).toThrowError(TypeError, "Deve ser maior que 0"); // Passando tipo do Erro e a descrição exata
        expect(() => somar(1, 1)).not.toThrowError(); // não lançar erro.



    });
});