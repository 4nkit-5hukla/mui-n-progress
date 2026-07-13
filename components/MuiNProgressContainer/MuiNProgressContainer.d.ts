import { default as React } from '../../../node_modules/react';
import { MuiNProgressProps, MuiNProgressStoreState } from '../../index.types';
interface MuiNProgressContainerProps extends MuiNProgressProps {
    getSnapshot: () => MuiNProgressStoreState;
    subscribe: (listener: () => void) => () => void;
}
declare const MuiNProgressContainer: ({ getSnapshot, subscribe, color: colorProp, showSpinner: showSpinnerProp, className }: MuiNProgressContainerProps) => React.JSX.Element | null;
export default MuiNProgressContainer;
