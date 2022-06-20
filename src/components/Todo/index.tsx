import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Container, Icon } from './styles';

export function Todo(): JSX.Element {
  return (
    <Container>
      <p>List todo</p>
      <Icon>
        <FiEdit size={20} />
        <FiTrash2 size={20} />
      </Icon>
    </Container>
  );
}
