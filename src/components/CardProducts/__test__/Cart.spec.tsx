import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { InMain } from "../InMain"

describe('Card', () => {

  it('Render button addedToCart', () => {
    const Product = {
      products: [
        {
          id: 1,
          name: "Air pods",
          brand: "lorem ipsum",
          description: "lorem ipsum...",
          photo: "url img",
          price: "3000",
          createdAt: "22-10-2010",
          updateAt: "01-02-2020",
        }
      ],
      count: 1,
    }
    render(<InMain data={Product}/> );

    const buttonAddedToCart = screen.getByRole('button', { name: /comprar/i });
    expect(buttonAddedToCart).toBeInTheDocument();
  })
})