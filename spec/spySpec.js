describe("Testes do objeto Spy", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it('Deve possuir o método somar como não definido', function () {
        expect(Calculadora.somar(1, 1)).toBeUndefined();
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it("Deve chamar o método somar ao menos uma vez", () => {
        expect(Calculadora.somar).not.toHaveBeenCalled(); //verificar se um método do spy não foi chamado
        Calculadora.somar(1, 1);
        expect(Calculadora.somar).toHaveBeenCalled(); //verificar se um método do spy foi chamado
    })

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it("Deve chamar o método somar duas vezes", () => {
       Calculadora.somar(1, 1);
       Calculadora.somar(1, 2);
       expect(Calculadora.somar).toHaveBeenCalledTimes(2); // verificar se o método foi chamado duas vezes.
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it("Deve chamar o método somar com os parâmetros válidos", () => {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 1); // verificar se o método foi chamado com os parâmetros passados
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2); // verificar se o método foi chamado com os parâmetros passados
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.callThrough(); // cria uma exceção a regra e faz o método ser executado na sua forma original
        spyOn(Calculadora, "subtrair");
    });

    it("Deve executar o método somar original", () => {
        expect(Calculadora.somar(1, 1)).toEqual(2);
        expect(Calculadora.subtrair(2, 1)).toBeUndefined();
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it("Deve retornar 10 para o método somar", () => {

        // devido ao .and.returnValue do spy (acima no beforeAll da classe), acaba retornando 10
       expect(Calculadora.somar(1, 2)).toEqual(10);
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValues(1, 5); // informa ao spy os valores que o método deve retornar.(por chamada ao método, e se o numero de chamadas for maior do que os números a serem retornados, retorna undefined) (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it("Deve retornar valores distintos para o método somar", () => {

        // devido ao .and.returnValues do spy (acima no beforeAll da classe), acaba retornando 1 (de acordo com a primeira chamada definida no spy)
       expect(Calculadora.somar(3, 4)).toEqual(1); // valor da operação somar não retorna 7 e sim 1, conforme definido no comentário acima (dentro do obj spy)
       expect(Calculadora.somar(1, 2)).toEqual(5); // valor da operação somar não retorna 3 e sim 5, conforme definido no comentário acima (dentro do obj spy)
       expect(Calculadora.somar(4, 4)).toBeUndefined(); // Será undefined pois o número de chamadas excedeu a quantidade de valores definidos no obj spy
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.callFake((n1, n2) => { // força a executar a implementação de um método passando o objeto e o método
            return n1 - n2;
        });
        spyOn(Calculadora, "subtrair");
    });

    it("Deve transformar o método somar em subtração", () => {
       expect(Calculadora.somar(5, 2)).toEqual(3);
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.throwError("erro"); // força o método a lançar um erro com a descrição passada
        spyOn(Calculadora, "subtrair");
    });

    it('deve lançar um erro ao somar', function () {
        expect(function () {
            Calculadora.somar(1, 1);
        }).toThrowError("erro");
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it('Deve demonstrar o uso do calls.any ', function () {
        Calculadora.somar(1, 1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o uso do calls.count', function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o uso do calls.argsFor', function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
        expect(Calculadora.somar.calls.argsFor(1)).toEqual([2, 2]);
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o uso do calls.allArgs', function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        expect(Calculadora.somar.calls.allArgs())
            .toEqual([[1, 1], [2, 2]]);
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o uso do calls.all', function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        var retorno = Calculadora.somar.calls.all();

        expect(retorno[1].object).toEqual(Calculadora);
        expect(retorno[1].args).toEqual([2, 2]);
        expect(retorno[1].returnValue).toEqual(10);
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o uso do calls.mostRecent', function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        var retorno = Calculadora.somar.calls.mostRecent();

        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([2, 2]);
        expect(retorno.returnValue).toEqual(10);
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o uso do calls.first', function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        var retorno = Calculadora.somar.calls.first();

        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([1, 1]);
        expect(retorno.returnValue).toEqual(10);
    });

});

describe("Testes do objeto Spy", function () {

    var Calculadora = {

        somar: function (n1, n2) {
            return n1 + n2;
        },

        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10); // informa ao spy o valor que o método deve retornar. (instrui ele a retornar o valor)
        spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o uso do calls.reset', function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        expect(Calculadora.somar.calls.any()).toBeTruthy();

        Calculadora.somar.calls.reset();

        expect(Calculadora.somar.calls.any()).toBeFalsy();
    });

});

describe("Testes do objeto jasmine.createSpy", function () {

    var somar;

    beforeAll(function () {
        somar = jasmine.createSpy("somar");
    })

    it('deve demonstrar o uso do jasmine.createSpy', function () {
        somar(1, 2);

        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1, 2);
    });
})

describe("Testes do objeto jasmine.creteSpyObj", function () {

    var Calculadora;

    beforeAll(function () {
        Calculadora = jasmine.createSpyObj("Calculadora", [
            "somar", "subtrair"
        ]);

        Calculadora.somar.and.returnValue(5);
    });

    it('deve demonstrar o uso do jasmine.createSpyObj', function () {
        var retorno = Calculadora.somar(1, 2);

        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
        expect(retorno).toEqual(5);
    });
})

describe("Testes do objeto jasmine.any", function () {

    var dobro;

    beforeAll(function () {
        dobro = jasmine.createSpy("dobro");
    });

    it("deve demonstrar o uso do jasmine.any", function () {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    })

});

describe("Testes do objeto jasmine.anything", function () {

    var dobro;

    beforeAll(function () {
        dobro = jasmine.createSpy("dobro");
    });

    it("deve demonstrar o uso do jasmine.anything", function () {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.anything());

        expect({}).toEqual(jasmine.anything());
    })

});

describe("Testes do objeto jasmine.objectContaining", function () {

    var carro;

    beforeAll(function () {
        carro = {
            'ano': 2017
        };
    });

    it("deve demonstrar o uso do jasmine.objectContaining", function () {

        expect(carro).toEqual(jasmine.objectContaining({
            'ano': 2017
        }));
        expect(carro).not.toEqual(jasmine.objectContaining({
            'ano': 2016
        }));
    })

});

describe("Testes do objeto jasmine.arrayContaining", function () {

    var numeros;

    beforeAll(function () {
        numeros = [1, 2, 3, 4, 5];
    });

    it("deve demonstrar o uso do jasmine.arrayContaining", function () {

        expect(numeros).toEqual(jasmine.arrayContaining([3]));
        expect(numeros).toEqual(jasmine.arrayContaining([2, 4]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([6]));
    })

});

describe("Testes do objeto jasmine.stringMatching", function () {
    // suporta regex e spy

    var exibirTexto;

    beforeAll(function () {
        exibirTexto = jasmine.createSpy("exibirTexto");
    });

    it("deve demonstrar o uso do jasmine.stringMatching", function () {

        exibirTexto("Curso de Jasmine");

        expect(exibirTexto).toHaveBeenCalledWith(
            jasmine.stringMatching("Jasmine")); //é case sensitive (com regex pode ser insensitive como abaixo)

        expect(exibirTexto).toHaveBeenCalledWith(
            jasmine.stringMatching(/jasmine/i)); // i no final diz que pode ser case insensitive.

        expect("Curso de Javascript").toEqual(
            jasmine.stringMatching("Javascript"));
    });
});

describe("Testes do objeto jasmine.clock", function () {
    // suporta regex e spyserve para tornar síncrono as chamadas do setTimeout e setInterval
    // deve ser instalado antes da chamada com jasmine.clock().install
    // deve ser removido ao final do teste com jasmine.clock().uninstall
    // executa a operacao de chamada com jasmine.clock().tick recebendo os milissegundos como parametro;
    // pode ser usado para simular uma chamada ao setTimeout ou setInterval

    beforeEach(function () {
       jasmine.clock().install();
    });

    afterEach(function () {
        jasmine.clock().uninstall()
    })

    var dobro;

    beforeAll(function () {
        dobro = jasmine.createSpy("dobro");
    });

    it("deve demonstrar o uso com o setTimeout", function () {

        setTimeout(function () {
            dobro(10);
        }, 1000);

        jasmine.clock().tick(1000);

        expect(dobro).toHaveBeenCalled();
    });

    it("deve demonstrar o uso com o setInterval", function () {

        setInterval(function () {
            dobro(2);
        }, 500);

        jasmine.clock().tick(500);

        expect(dobro).toHaveBeenCalled();
    });

});

// Criando um comparador personalizado:
describe("Testes do objeto jasmine.addMatchers", function () {
    var meuMatcher = {

        toBeValidEmail: function(util, customEqualityTesters) {

            /* sobre o regex abaixo:
                / = início do regex
                \S = valida uma string
                +@ concatenado com @
                \S+\. = valida outra string concatenada com um ponto
                \S+ = valida outra string concatenada com qualquer outra coisa
                / = fim do regex.

             */
            var emailRegex = /\S+@\S+\.\S+/;

            return {

                compare: function (actual, expected) {
                    var result = {};
                    if (expected === undefined) {
                        result.pass = emailRegex.test(actual);
                    } else {
                        result.pass = expected.test(expected);
                    }
                    if (result.pass) {
                        result.message = actual + " é um email válido";
                    } else {
                        result.message = actual + " não é um email válido";
                    }
                    return result;
                }
            }
        }
    };

    beforeEach(function () {
       jasmine.addMatchers(meuMatcher);
    });

    it('Deve verificar se um email é válido', function () {
        expect("email@dominio.com").toBeValidEmail(); // pra esse caso podia passar uma regex.

        expect("email").not.toBeValidEmail();
    });


});



