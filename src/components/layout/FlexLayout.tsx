import React, { CSSProperties, HtmlHTMLAttributes, PropsWithChildren } from "react";

interface Props {
    children: any,
    direction?: string,
    justify?: string,
    reverse?: boolean,
    align?: string,
    style?: CSSProperties,
    className?: string
}

export default ({
    children,
    direction = 'horizontal',
    justify = 'start',
    reverse = false,
    align = 'stretch',
    style,
    className
}: Props) => {

    const getDirection = (direction: string, reverse: boolean) => {
        if (direction === 'horizontal') {
            if (reverse) {
                return 'row-reverse';
            }
            return 'row';
        }
        if (reverse) {
            return 'column-reverse';
        }
        return 'column';
    }

    const getJustify = (justify: string) => {
        if (justify === 'start') {
            return 'flex-start';
        }
        if (justify === 'end') {
            return 'flex-end';
        }
        if (justify === 'center') {
            return 'center';
        }
        if (justify === 'between') {
            return 'space-between';
        }
        if (justify === 'around') {
            return 'space-around';
        }
        throw Error('unimplemented');
    }

    const getAlign = (align: string) => {
        if (align === 'start') {
            return 'flex-start';
        }
        if (align === 'end') {
            return 'flex-end';
        }
        if (align === 'center') {
            return 'center';
        }
        if (align === 'stretch') {
            return 'stretch';
        }
        if (align === 'baseline') {
            return 'baseline';
        }
        if (align === 'initial') {
            return 'initial';
        }
        if (align === 'inherit') {
            return 'inherit';
        }
        throw Error('unimplemented');
    }

    return (
        <div style={{
            ...style,
            width: style && style.width ? style.width : '100%',
            padding: style && style.padding ? style.padding : 0,
            display: style && style.display ? style.display : 'flex',
            alignItems: getAlign(align),
            flexDirection: getDirection(direction, reverse),
            justifyContent: getJustify(justify),
            margin: style && style.margin ? style.margin : 0,
        }}
            className={className}
        >
            {children}
        </div>
    )
}