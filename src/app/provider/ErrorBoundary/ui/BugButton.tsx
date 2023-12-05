import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";

export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error])
    const onError = () => setError(true);

    return (
        <Button onClick={onError}>Совершить ошибку</Button>
    )
}
