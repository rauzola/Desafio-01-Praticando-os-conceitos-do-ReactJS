import { TbClipboardText } from 'react-icons/tb';
import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface Props {
  tasks: ITask[];
  onDelete: (taskid: string) => void;
  onComplete: (taskid: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length;
  const isCompletedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{isCompletedTasks} de {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefa cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>

        )}

      </div>
    </section>
  )
}