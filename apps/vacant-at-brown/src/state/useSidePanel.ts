import create from 'zustand';
import { persist } from 'zustand/middleware';

interface SidePanelStoreState {
  expanded: boolean;
  toggleExpanded: () => void;
  selectedBuilding?: string;
}

export const useSidePanel = create<SidePanelStoreState>()(
  persist((set, get) => ({
    expanded: false,
    toggleExpanded: () => set({ expanded: !get().expanded }),
    setBuilding: '',
  }))
);
