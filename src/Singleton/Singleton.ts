/*O Singleton basicamente garante que so possa ser 
instanciado uma unica instancia em todo o sistema, 
e que seja acessivel apenas atraves de um metodo pre
determinado, getInstance()*/


//Torna a classe Singleton acessivel para o outros arquivos

export class Singleton {
  
    /*A manipulacao deste atributo e privada 
    pois somente os metodos desta classe poderao altera-las.*/
    private static instance: Singleton;

    /* Um atributo generico da classe */
    public name?: string;

    /*O Contrutor e privado para que ninguem seja capaz de criar uma instancia alem da 
    propria classe. */        
    private constructor() { 
        this.name = 'João'
    }

    /* Basicamente permite que uma instancia seja criada
     ou recuperada caso ja exista. */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

}
