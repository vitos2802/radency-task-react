import Icon from '@mdi/react';
import { mdiPencil, mdiPackageDown, mdiDelete, mdiPackageUp } from '@mdi/js';
import Button from '../Button';
import generateIcon from '../../helpers/generateIcon';
import styles from './Todo.module.css';

const Todo = ({
  name,
  created,
  category,
  content,
  dates,
  archived,
  onDelete,
  onArchive,
  onEdit,
}) => {
  return (
    <>
      <div className={styles.icon}>
        <Icon path={generateIcon(category)} />
      </div>
      <div className={styles.cell}>{name}</div>
      <div className={styles.cell}>{created}</div>
      <div className={styles.cell}>{category}</div>
      <div className={styles.cell}>{content}</div>
      <div className={styles.cell}>{dates}</div>
      <div className={styles.btnBox}>
        {!archived && (
          <>
            <Button onClick={onEdit}>
              <Icon path={mdiPencil} />
            </Button>
            <Button onClick={onArchive}>
              <Icon path={mdiPackageDown} />
            </Button>
            <Button onClick={onDelete}>
              <Icon path={mdiDelete} />
            </Button>
          </>
        )}
        {archived && (
          <Button onClick={onArchive}>
            <Icon path={mdiPackageUp} />
          </Button>
        )}
      </div>
    </>
  );
};

export default Todo;
