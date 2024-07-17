//705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value:cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let StringNumerica of cpfSemDigitos) {
           // console.log(StringNumerica, reverso)
           total += reverso * Number(stringNumerica);
            reverso--;
        }
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequência()) return false;
        if(!this.geraNovoCpf()) return false;
        this.geraNovoCpf();
        console.log(this.novoCPF);

        return 'CHEGUEI AQUI';
    }
}

let validacpf = new ValidaCPF('070.987.720-03');
//let validacpf = new ValidaCPF('999.999.999-03');
//console.log(validacpf.valida());