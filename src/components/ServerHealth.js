import { useHealthCheck } from "../hooks/queries";
import { concatClasses } from "../utils/helpers";
import { HealthStatus } from "../utils/types";
import Card from "./Card";

const ServerHealth = () => {
    const { data, isLoading } = useHealthCheck();

    return (
        <div className=" flex justify-center gap-4 p-5 flex-wrap items-center pt-10">
            <Server
                name="USDC"
                healthStatus={
                    isLoading
                        ? HealthStatus.LOADING
                        : data["usdc"]?.server
                        ? HealthStatus.RUNNING
                        : HealthStatus.DOWN
                }
            />
            <Server
                name="Algorand"
                healthStatus={
                    isLoading
                        ? HealthStatus.LOADING
                        : data["algorand"]?.server
                        ? HealthStatus.RUNNING
                        : HealthStatus.DOWN
                }
            />
            <Server
                name="Solana"
                healthStatus={
                    isLoading
                        ? HealthStatus.LOADING
                        : data["solana"]?.server
                        ? HealthStatus.RUNNING
                        : HealthStatus.DOWN
                }
            />
        </div>
    );
};

const Server = ({ healthStatus, name }) => {
    const bgColor =
        healthStatus === HealthStatus.LOADING
            ? " bg-textWhite"
            : healthStatus === HealthStatus.RUNNING
            ? "bg-success"
            : "bg-error";
    return (
        <Card className=" py-2 px-4 flex gap-3 items-center">
            <p className=" font-medium ">{name}</p>
            <div className=" relative">
                <div
                    className={concatClasses([
                        " w-4 h-4 rounded-full bg-success flex justify-center",
                        bgColor,
                        healthStatus === HealthStatus.RUNNING
                            ? " animate-ping"
                            : "animate-pulse",
                    ])}
                />
                <div
                    className={concatClasses([
                        " w-3 h-3 rounded-full  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
                        bgColor,
                    ])}
                />
            </div>
        </Card>
    );
};

export default ServerHealth;
