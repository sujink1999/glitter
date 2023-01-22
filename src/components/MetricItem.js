const MetricItem = ({ token, value, usdValue }) => {
    return (
        <div className="flex flex-col flex-1 gap-1 pr-3">
            <div className=" flex gap-2 items-center ">
                <img
                    src={require(`../assets/${token}.png`)}
                    alt={token}
                    className=" w-6 h-6 rounded-full bg-textWhite"
                />
                <p className=" text-textGrey">{token.toUpperCase()}</p>
            </div>
            <p className=" text-xl text-textWhite font-medium">
                {value?.toFixed?.(2)}
            </p>
            <p className=" text-xs text-textGrey font-light">
                ${usdValue?.toFixed?.(2)}
            </p>
        </div>
    );
};

export default MetricItem;
