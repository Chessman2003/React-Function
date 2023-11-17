import React, { useState } from 'react';

type Props = {
    title: string
}

export const Header = ({title}:Props) => {
    return (
        <h1>
            {title}
        </h1>
    )
}