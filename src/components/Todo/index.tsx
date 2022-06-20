import { FiCheckCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Container, Icon } from './styles';

export function Todo(): JSX.Element {
  return (
    <Container>
      <p>List todo</p>
      <Icon>
        <FiTrash2 size={20} />
        <FiEdit size={20} />
        <FiCheckCircle size={21} />
      </Icon>
    </Container>
  );
}
