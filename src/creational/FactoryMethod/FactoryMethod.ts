abstract class Product<T> {
    protected props: T

    constructor (props: T) {
        this.props = props
    }
}

/*---------------------------------------------------------------*/

interface InjectionMold<T> {
    inject(...args: any): T
}

/*---------------------------------------------------------------*/

interface DuckProps {
    name: string
    material: 'rubber' | 'plastic'
}

class ToyDuck extends Product<DuckProps> {
    private size: number

    constructor(props: DuckProps, size: number) {
        super(props)
        this.size = size
    }

    show() {
        console.log(`Olha meu pato! Ele tem o tamanho ${this.size} e o nome dele é ${this.props.name}`)
    }
}

class ToyDuckMold implements InjectionMold<ToyDuck> {
    inject(props: DuckProps): ToyDuck {
        if (props.material === 'plastic') return new ToyDuck(props, 20)
        else if (props.material === 'rubber') return new ToyDuck(props, 25)
        else return new ToyDuck(props, 15)
    }
}

/*---------------------------------------------------------------*/

interface ToyCarProps {
    color: string
    brand: string
    model: string
}

class ToyCar extends Product<ToyCarProps> {
    constructor (props: ToyCarProps) {
        super(props)
    }

    show() {
        console.log(`Olha só meu carrinho! É um(a) ${this.props.brand} ${this.props.brand} da cor ${this.props.color}`)
    }
}

class ToyCarMold implements InjectionMold<ToyCar> {
    inject(props: ToyCarProps): ToyCar {
        return new ToyCar(props)
    }
}

/*---------------------------------------------------------------*/

(() => {
    const toyCarMold = new ToyCarMold()
    const toyDuckMold = new ToyDuckMold()

    const toyCar = toyCarMold.inject({ brand: 'Mercedez', model: 'GLS-350', color: 'space gray' })
    const toyDuck = toyDuckMold.inject({ name: 'Patolino', material: 'rubber' })

    toyCar.show()
    toyDuck.show()
})()