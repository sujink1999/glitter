import { useReleasedAmountOf } from "../hooks/queries";
import BarLoader from "./BarLoader";
import Card from "./Card";
import MetricItem from "./MetricItem";

const ReleaseAmounts = () => {
    const { data: algo } = useReleasedAmountOf("algo");
    const { data: xalgo } = useReleasedAmountOf("xalgo");
    const { data: sol } = useReleasedAmountOf("sol");
    const { data: xsol } = useReleasedAmountOf("xsol");
    const { data: usdc } = useReleasedAmountOf("usdc");

    const dataArray = [algo, xalgo, sol, xsol, usdc].filter((e) => e);

    return (
        <Card className=" flex flex-col gap-5 flex-1 p-5">
            <h3 className=" text-xl font-medium">Release amounts</h3>
            <div className=" flex flex-wrap gap-8">
                {dataArray.length === 0 ? (
                    <BarLoader />
                ) : (
                    dataArray.map(
                        ({ token, releasedAmount, releasedAmountInUsd }) => (
                            <MetricItem
                                key={token}
                                token={token}
                                value={releasedAmount}
                                usdValue={releasedAmountInUsd}
                            />
                        )
                    )
                )}
            </div>
        </Card>
    );
};

export default ReleaseAmounts;
