import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { ListTodos } from '@/components/listTodos';

export default function Home() {
  return (
    <>
      <Header />
      <ListTodos />
      <Footer />
    </>
  );
}
