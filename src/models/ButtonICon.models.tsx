
export class ButtonIcon {
    iconName?: string;
    label?: string;

    public constructor(init?: Partial<ButtonIcon>) {
        Object.assign(this, init);
    }
}
