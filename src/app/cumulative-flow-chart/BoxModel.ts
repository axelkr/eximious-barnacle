// simplified box model from CSS
export class BoxModel {
    private readonly totalWidth: number;
    private readonly totalHeight: number;
    private readonly marginOnEachSide: number;

    constructor(totalWidth: number, totalHeight: number, marginOnEachSide: number) {
        this.totalWidth = totalWidth;
        this.totalHeight = totalHeight;
        this.marginOnEachSide = marginOnEachSide;
    }

    public contentWidth(): number {
        return this.totalWidth - 2 * this.marginOnEachSide;
    }

    public contentHeight(): number {
        return this.totalHeight - 2 * this.marginOnEachSide;
    }

    public width(): number {
        return this.totalWidth;
    }

    public height(): number {
        return this.totalHeight;
    }

    public marginLeft(): number {
        return this.marginOnEachSide;
    }

    public marginTop(): number {
        return this.marginOnEachSide;
    }
}