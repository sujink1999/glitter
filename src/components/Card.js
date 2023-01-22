import { concatClasses } from "../utils/helpers";

const Card = ({ children, className }) => {
    return (
        <div className={concatClasses([" glass text-textGrey", className])}>
            {children}
        </div>
    );
};

export default Card;
