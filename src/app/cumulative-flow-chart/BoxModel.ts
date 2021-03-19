// simplified box model from CSS
export class BoxModel {
    private readonly totalWidth: number;
    private readonly totalHeight: number;
    private readonly marginLeftRight: number;
    private readonly marginTopBottom: number;

    constructor(totalWidth: number, totalHeight: number, marginLeftRight: number, marginTopBottom: number) {
        this.totalWidth = totalWidth;
        this.totalHeight = totalHeight;
        this.marginLeftRight = marginLeftRight;
        this.marginTopBottom = marginTopBottom;
    }

    public contentWidth(): number {
        return this.totalWidth - 2 * this.marginLeftRight;
    }

    public contentHeight(): number {
        return this.totalHeight - 2 * this.marginTopBottom;
    }

    public width(): number {
        return this.totalWidth;
    }

    public height(): number {
        return this.totalHeight;
    }

    public marginLeft(): number {
        return this.marginLeftRight;
    }

    public marginTop(): number {
        return this.marginTopBottom;
    }
}
