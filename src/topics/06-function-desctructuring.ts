export interface Product{
    description: string;
    price:number
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

// function taxCalculation( options: TaxCalculationOptions ): [number, number]{
export function taxCalculation( options: TaxCalculationOptions ): [number, number]{
    let total = 0;
    const {tax, products} = options;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total*tax];
}

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

// console.log(total);
// console.log(taxTotal);