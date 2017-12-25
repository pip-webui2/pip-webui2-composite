import { CompositeElementType } from './composite-element-types.model';

export class PipCompositeElement {
    public type: CompositeElementType;
    public text?: string;
    public documents?: any[];
    public pictures?: any[];
    public location?: any;
    public locationName?: string;
    public startDate?: Date; 
    public endDate?: Date;
}