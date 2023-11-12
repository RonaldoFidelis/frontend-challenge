type Product = {
  product: [{
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updateAt: string;
  }],
  count:number
}

export function CardProduct({ data }: { data: Product[] }) {
  console.log('Sou o card.', data)
  return (
    <div>

    </div>
  )
}