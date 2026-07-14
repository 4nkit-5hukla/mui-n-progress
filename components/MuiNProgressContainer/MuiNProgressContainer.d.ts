import { default as React } from '../../../node_modules/react';
import { MuiNProgressProps, MuiNProgressStoreState } from '../../index.types';
interface MuiNProgressContainerProps extends MuiNProgressProps {
    getSnapshot: () => MuiNProgressStoreState;
    subscribe: (listener: () => void) => () => void;
}
declare const MuiNProgressContainer: ({ getSnapshot, subscribe, className, color: colorProp, height: heightProp, showSpinner: showSpinnerProp, size: sizeProp, thickness: thicknessProp }: MuiNProgressContainerProps) => React.JSX.Element | null;
export default MuiNProgressContainer;
