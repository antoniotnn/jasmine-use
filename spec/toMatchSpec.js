describe("Teste do toMatch", () => {

    it('Deve validar o uso do toMatch', () => {
        var texto = "teste com Jasmine"

        expect(texto).toMatch("Jasmine"); // procura exatamente a mesma string na variavel texto
        expect(texto).toMatch(/jasmine/i); //case insensitive(nao importa se é maiusculo ou nao), usando expressão regular
        // expect("12345-456").toMatch(/^[0-9]{5}-[0-9]{3}$/);  validador CPF regex, exemplo 1 ( do google)
        expect("12345-456").toMatch(/^\d{5}-\d{3}$/);  //validador CPF regex, exemplo 1 ( do curso)

        //Regex: (começa e termina com /)
        // / = começo do regex
        // ^ = Quero que comece com...
        // \d = querdo que comece com digitos ( de 0 a 9 )   // \ [0-9] de 0 a 9 (no outro exemplo)
        // {5} = e que tenham 5 numeros em sequencia
        // - = depois que tenha um traço (-)
        // \d = depois que tenham mais digitos
        // {3} - e que esses digitos sejam 3
        // $ - informar que terminou e que não queremos mais caracteres
        // / = encerramento do regex


    });
});