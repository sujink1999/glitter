import { useSupplyOf } from "../hooks/queries";
import BarLoader from "./BarLoader";
import Card from "./Card";

const Supply = () => {
    const { data: xgliSupply } = useSupplyOf("xgli");
    const { data: xalgo } = useSupplyOf("xalgo");
    const { data: xsol } = useSupplyOf("xsol");

    const dataArray = [xgliSupply, xalgo, xsol].filter((e) => e);

    return (
        <Card className="flex flex-col p-5 items-center gap-8">
            <h3 className=" text-xl font-medium">Supply</h3>
            <div className=" w-full flex gap-5 justify-around flex-wrap">
                {dataArray.length === 0 ? (
                    <BarLoader />
                ) : (
                    dataArray.map((data) => (
                        <SupplyItem key={data.token} data={data} />
                    ))
                )}
            </div>
        </Card>
    );
};

const SupplyItem = ({ data }) => {
    const { supply, supplyInUSD, marketcap, token } = data;
    return (
        <div className="flex flex-col gap-1 items-center">
            <div className=" flex gap-2 items-center ">
                <img
                    src={require(`../assets/${token}.png`)}
                    alt={token}
                    className=" w-6 h-6 rounded-full "
                />
                <p className=" text-textGrey">{token.toUpperCase()}</p>
            </div>
            <p className=" text-2xl text-textWhite font-medium">
                {supply?.toFixed?.(2)}
            </p>
            {supplyInUSD && (
                <p className=" text-sm text-textGrey font-light">
                    ${supplyInUSD?.toFixed?.(2)}
                </p>
            )}
            {marketcap && (
                <p className=" text-sm text-textGrey font-loght">
                    Market cap: ${marketcap}
                </p>
            )}
        </div>
    );
};

export default Supply;
