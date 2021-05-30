import React, { FC } from "react";
import { RowAlignCenterView } from "../styles";
import { StarIcon } from "./";
import { RatingProps } from "./types";

const Rating: FC<RatingProps> = ({ rating, quantity, customColor }) => {
    const starsTypes = [];
    const color = customColor ? customColor : "yellow";

    for (let index = 0; index < quantity; index++) {
        starsTypes[index] =
            (rating >= index + 1 ? "filled-" : "unfilled-") + color;
    }

    return (
        <RowAlignCenterView>
            {starsTypes.map((type) => (
                <StarIcon type={type} />
            ))}
        </RowAlignCenterView>
    );
};

export default Rating;
