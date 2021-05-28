import React, { FC } from "react";
import { StarIconProps } from "./types";
import Star from "../assets/icons/star.svg";
import StarFilled from "../assets/icons/star-filled.svg";
import StarFilledGrey from "../assets/icons/star-filled-grey.svg";
import StarGrey from "../assets/icons/star-grey.svg";

const StarIcon: FC<StarIconProps> = ({ type }) => {
    switch (type) {
        case "filled-yellow":
            return <StarFilled />;
            break;
        case "filled-grey":
            return <StarFilledGrey />;
            break;
        case "unfilled-yellow":
            return <Star />;
            break;
        case "unfilled-grey":
            return <StarGrey />;
            break;
    }
    return <Star />;
};

export default StarIcon;
