import { Header } from '../components/Header';
import { OrderCard } from '../components/orders/OrderCard';
import { useOrders } from '../hooks/useOrders';
import './OrdersPage.css';

export const OrdersPage = () => {
  const { data: orders  = []} = useOrders();

  return ( 
    <>
      <title>Orders</title>

      <Header />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">

{orders.length === 0 && <p>You have no orders.</p>}

{
  orders.map((order) => {
    return <OrderCard key={order.id} order={order}/>;
  })
}



         
        </div>
      </div>
    </>
  );
}