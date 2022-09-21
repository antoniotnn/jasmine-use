describe("Teste do beforeAll", () => {

    var contador = 0;

    beforeAll(() => { // antes de todos os testes, isso é executado. (executado uma vez)
       contador = 10;
    });

    beforeEach(() => { //antes de cada teste.
       contador++;
    });

    it('Deve garantir o valor 11 para o contador', () => {
        expect(contador).toEqual(11);
    });

    xit('Deve garantir o valor 12 para o contador', () => {
       expect(contador).toEqual(12);
    });
})