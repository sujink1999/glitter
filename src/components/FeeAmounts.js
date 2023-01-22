import { useFeeAmountOf } from "../hooks/queries";
import BarLoader from "./BarLoader";
import Card from "./Card";
import MetricItem from "./MetricItem";

const FeeAmounts = () => {
    const { data: algo } = useFeeAmountOf("algo");
    const { data: xalgo } = useFeeAmountOf("xalgo");
    const { data: sol } = useFeeAmountOf("sol");
    const { data: xsol } = useFeeAmountOf("xsol");
    const { data: usdc } = useFeeAmountOf("usdc");

    const dataArray = [algo, xalgo, sol, xsol, usdc].filter((e) => e);

    return (
        <Card className=" flex flex-col gap-5 flex-1 p-5">
            <h3 className=" text-xl font-medium">Fee amounts</h3>
            <div className=" flex flex-wrap gap-8">
                {dataArray.length === 0 ? (
                    <BarLoader />
                ) : (
                    dataArray.map(({ token, feeAmount, feeAmountInUsd }) => (
                        <MetricItem
                            key={token}
                            token={token}
                            value={feeAmount}
                            usdValue={feeAmountInUsd}
                        />
                    ))
                )}
            </div>
        </Card>
    );
};

export default FeeAmounts;
