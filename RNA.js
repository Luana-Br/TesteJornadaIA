//gerar função entre número mínimo e máximo aleatórios
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
//valor intermediário de uma função
function lerp(a, b, t) {
    return a + (b - a) * t
}
//inerpolação linear -> pesquisar mais <-

class Neuron {
    constructor(inputs) {
        this.bias = randomRange(-1, 1);

        this.weightList - new Array(inputs)
        .fill()
        .map(() => randomRange(-1,1))
    }
};

//saída do neurônio/ativação do neurônio:

g(signalList = []); {
    let u = 0;

    for (let i = 0; i < this.weightList.length; i++) {
        u += signalList[i] * this.weightList[i]
    }

    if (Math.tanh(u) > this.bias) return 1 // Ativado
    else return 0; // Desativado
};

//mutação dos pesos: servir pra que a próxima geração IA seja diferente da anterior
mutate(rate = 1); {
    this.weightList = this.weightList.map(() => {
        return lerp(w, randomRange(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRange(-1, 1), range)
}

//ver qual neurônio funcionou mais, em qual geração
class RNA{
    constructor(inputCount = 1, levelList = []) {
        this.score = 0;

        this.levelList = levelList.map((l, i) => {
            const inputSize = i === 0 ? inputCount : levelList[i - 1]

            return new Array(1).fill().map(() => new Neuron(inputSize));
        });
    }

    //calcular as saídas RNA através das entradas 

    compute(list = []){
        for (let i =0; i < this.levelList.length; i++) {
            const tempList =[]

            for (const neuron of this.levelList[i]) {
                if (list.length !== neuron.weightList.length) throw new Error("Entrada inválida");
                tempList.push(neuron.g(list))
            }
            list = tempList;
            //vai atualizar os sinais da próxima
        }
        return list;
    }
}
//para mutar a geração RNA
mutate(rate = 1); {
    for (const level of this.levelList) {
        for (const neuron of level) neuron.mutate(rate)
    }
}

//carregar a RNA anterior toda vez que ela for mutada
load(rna); {
    if (!rna) return;
    try {
        this.levelList = rna.map((neuronList) => {
            return neuronList.map((neuron) => {
                const n = new Neuron();
                n.bias = neuron.bias
                n.weightList = neuron.weightList;

                return n;
            });
        });
    } catch (e) {
        return;
    }
    //capturar erros e retornar ^
    save(); {
        return this.levelList;
    }
}

export default RNA;