import {Button} from "shared/ui/Button/Button";

export const PageError = () => {
    const onReload = () => location.reload();

    return (
        <Button onClick={onReload}>Перезагрузить страницу</Button>
    )
}
