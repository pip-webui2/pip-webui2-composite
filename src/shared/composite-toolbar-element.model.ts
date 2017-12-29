import { CompositeElementType } from './composite-element-types.model';

export class PipCompositeToolbarElement {
    public type: CompositeElementType;
    public icon: string;
    public color?: string;
    public action?: any;
}