import React, { useState, useCallback } from "react";
// style
import { Card } from "./styled";

const CertCard = ({ name, ...rest }) => {

    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);

    return (
        <Card open={open} onClick={toggleOpen} {...rest}>
            <header>
                {name}
            </header>
            <figure />
        </Card>
    )
}

export default CertCard;