export declare type IframePositionKeys = 'left' | 'right' | 'top' | 'bottom';
export declare type IframePositionOptions = {
    [key in IframePositionKeys]?: string;
};
export declare type IframeSizeOptions = {
    width: number;
    height: number;
};
export declare type FullIframeOptions = {
    size: IframeSizeOptions;
    position: IframePositionOptions;
    className: string;
    containerElement: HTMLElement;
    protectAgainstGlobalStyleBleed: boolean;
    hidden?: boolean;
};
export declare type ConfigurableIframeOptions = null | {
    position?: IframePositionOptions;
    className?: string;
    containerElement?: HTMLElement;
    protectAgainstGlobalStyleBleed?: boolean;
};
