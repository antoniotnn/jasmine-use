describe("Teste do toBeFalsy", () => {

    it('Deve demonstrar o uso do toBeFalsy', () => { // o contrário é o toBeTruthy (equivalento ao .not.toBeFalsy()

        // toBeFalsy (ser falso): valor igual a um desses: 'false', '0', 'undefined', 'null', 'NaN'

        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(false).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(0).toBeFalsy();

        expect(true).not.toBeFalsy();
    });
});