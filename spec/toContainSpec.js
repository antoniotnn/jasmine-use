describe("Teste do toContain", () => {

    it('Deve demonstrar o uso do toContain', () => {
        //busca um item em um array
        //também pode ser utilizado para buscar um substring dentro de uma string
        //não suporta busca por Regex

        var texto = "Meu nome é Antônio";
        var frutas = ["laranja", "banana", "pera"];


        expect(texto).toContain("Antônio");
        expect(texto).not.toContain("antônio"); //toContain É CASE SENSITIVE

        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");


    });
});