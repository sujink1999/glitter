import { concatClasses } from "../utils/helpers";

const BarLoader = ({ className }: { className?: string }) => {
    return (
        <div className={concatClasses(["load-bar", className])}>
            <div className="bar"></div>
        </div>
    );
};

export default BarLoader;
