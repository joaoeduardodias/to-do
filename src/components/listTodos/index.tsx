import { Todo } from '../Todo';
import { Container } from './styles';

export function ListTodos() {
  return (
    <Container>
      <header>Tarefas Concluídas - 22</header>

      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </Container>
  );
}
