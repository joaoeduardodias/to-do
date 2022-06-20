import { Todo } from '../Todo';
import { Container } from './styles';

export function ListTodos() {
  return (
    <Container>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </Container>
  );
}
