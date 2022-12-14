xdescribe("Suite externa", () => { // aninhamento de Suites

    var contadorExterno = 0;

    beforeEach(() => {
        contadorExterno++;
    });

    it("Deve conter 1 para contadorExterno", () => {
        expect(contadorExterno).toEqual(1);
    });

    describe("Suite interna", () => {

        var contadorInterno = 0;

        beforeEach(() => {
            contadorInterno++;
        });

        it("Deve validar o valor dos contadores", () => {
           expect(contadorInterno).toEqual(1);
           expect(contadorExterno).toEqual(2);
        });
    });
});