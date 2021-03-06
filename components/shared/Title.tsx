import React from "react";

type TitleProps = {
    text: string;
    row1: string;
    row2?: string;
}

function Title({text, row1, row2}: TitleProps) {
    if(row2 == undefined){
        return <>
            <p className="text-gray">{ text }</p>
            <p className="text-3xl md:text-4xl font-bold text-blueish">{ row1 }</p>
        </>
    }

    return <>
        <p className="text-gray">{ text }</p>
        <p className="text-3xl md:text-4xl font-bold text-blueish">{ row1 }</p>
        <p className="text-3xl md:text-4xl font-bold text-blueish">{ row2 }</p>
    </>
}

export default Title;