import "@testing-library/jest-dom"
import { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartContextProvider, cartContext } from '../../context/CartContext';
import { useCart } from '../useCart';

const TestComponent = () => {
  const { addedToCart, decreaseQuantity, incrementQuantity, deleteWish } = useCart();
  const { cart } = useContext(cartContext);

  const Item = {
    id: 1,
    name: 'string',
    brand: 'string',
    description: 'string',
    photo: 'string',
    price: 'string',
    createdAt: 'string',
    updateAt: 'string',
    quantity: 1,
  }

  return (
    <div>
      <h1>
        {cart && cart.map((item) => (
          <div>
            <h1>
              {item.name}
            </h1>
            <h1>
              Quantidade: {item.quantity}
            </h1>
          </div>
        ))}
      </h1>
      <button onClick={() => addedToCart({
        id: 1,
        name: 'Produto Teste',
        brand: 'string',
        description: 'string',
        photo: 'string',
        price: 'string',
        createdAt: 'string',
        updateAt: 'string',
        quantity: 1,
      })}>
        Adicionar ao Carrinho
      </button>
      <button onClick={() => decreaseQuantity(Item)}>Diminuir Quantidade</button>
      <button onClick={() => incrementQuantity(Item)}>Aumentar Quantidade</button>
      <button onClick={() => deleteWish(Item)}>Excluir Produto</button>
    </div>
  );
};

describe('useCart', () => {
  it('adiciona um item ao carrinho', () => {
    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    );

    // Verifica se o produto não está inicialmente no carrinho
    expect(screen.queryByText('Produto Teste')).toBeNull();

    // Clica no botão para adicionar ao carrinho
    fireEvent.click(screen.getByText('Adicionar ao Carrinho'));

    // Verifica se o produto foi adicionado ao carrinho
    expect(screen.getByText('Produto Teste')).toBeInTheDocument();
  });
  it('decrementa a quantidade de um item no carrinho', () => {
    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    );

    // Adiciona o produto ao carrinho
    fireEvent.click(screen.getByText('Adicionar ao Carrinho'));

    // Clica no botão para diminuir a quantidade
    fireEvent.click(screen.getByText('Diminuir Quantidade'));

    // Verifica se a quantidade foi diminuída
    expect(screen.getByText('Quantidade: 1')).toBeInTheDocument();
  });

  it('incrementa a quantidade de um item no carrinho', () => {
    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    );

    // Adiciona o produto ao carrinho
    fireEvent.click(screen.getByText('Adicionar ao Carrinho'));

    // Clica no botão para aumentar a quantidade
    fireEvent.click(screen.getByText('Aumentar Quantidade'));

    // Verifica se a quantidade foi aumentada
    expect(screen.getByText('Quantidade: 2')).toBeInTheDocument();
  });

  it('deleta um item do carrinho', () => {
    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    );

    // Adiciona o produto ao carrinho
    fireEvent.click(screen.getByText('Adicionar ao Carrinho'));

    // Clica no botão para excluir o produto
    fireEvent.click(screen.getByText('Excluir Produto'));

    // Verifica se o produto foi removido do carrinho
    expect(screen.queryByText('Produto Teste')).toBeNull();
  });
});
