import { Paper } from '@mui/material';
import clsx from 'clsx';
import { useSidePanel } from '../../state/useSidePanel';

export const SidePanel = () => {
  const expanded = useSidePanel((state) => state.expanded);
  const toggleExpanded = useSidePanel((state) => state.toggleExpanded);
  return (
    <Paper
      className={clsx(
        'top-0 absolute h-full w-[400px] !transition-[right] z-[100000]',
        expanded ? 'right-0' : 'right-[-400px]'
      )}
    >
      Hello!
    </Paper>
  );
};
