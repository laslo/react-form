import React from 'react';

const MIN_TEXT = 70;
const MAX_TEXT = 190;
const randomLength = () => Math.floor(Math.random() * (MAX_TEXT - MIN_TEXT + 1)) + MIN_TEXT;

export const TextDummy = (props) => {
    let styles = {
        width: !!props.width ? +props.width : randomLength(),
        height: +props.height
    };
    return <span className="text-dummy linear-background" style={styles}></span>
};

export const TableLoading = ({
    rows = 4,
    cols = 4,
    fontSize = 18
}) => (
    <table className="table table-lightweight table-hover loading">
        <tbody>
            {Array(+rows).fill(null).map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {Array(+cols).fill(null).map((col, colIndex) => (
                        <td key={colIndex}><TextDummy height={fontSize} /></td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);