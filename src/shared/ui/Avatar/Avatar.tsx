import {Svg} from "shared/ui/Svg/Svg";
import cls from "./Avatar.module.scss";
import defaultAvatar from "shared/assets/avatar.svg";

interface AvatarProps {
    bordered?: boolean;
    src?: string | null;
    editable?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    return (
        <div className={cls.Image}>
            {
                props.editable && (
                    <div style={{ borderBottomRightRadius: props.src ? "12px" : "20px"}} className={cls.IconOverlay}>
                        <Svg src={defaultAvatar} height="10px" />
                    </div>
                )
            }
        </div>
    )
}
