describe("Teste do afterEach", () => {

    var contador = 0;

    beforeEach(() => { // antes de cada teste, isso é executado.
       contador++;
    });

    afterEach(() => { // depois de cada teste, isso é executado.
       contador = 0;
    });

    it('Deve garantir o valor 1 para o contador', () => {
       expect(contador).toEqual(1);
    });

    xit('Deve ainda garantir o contador com o valor 1', () => {
        expect(contador).toEqual(1);
    });
})