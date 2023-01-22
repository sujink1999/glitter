import { useQuery } from "react-query";

export const useHealthCheck = () => {
    return useQuery(
        "health-check",
        async () => {
            const res = await fetch(
                "https://api.glitterfinance.org/api/health"
            );
            const data = await res.json();

            return JSON.parse(data);
        },
        {
            refetchInterval: 5000,
        }
    );
};

export const useSupplyOf = (token) => {
    return useQuery(`supply-${token}`, async () => {
        const res = await fetch(
            `https://api.glitterfinance.org/api/supply/${token}`
        );
        const data = await res.json();
        return { token, ...data };
    });
};

export const useFeeAmountOf = (token) => {
    return useQuery(`fee-${token}`, async () => {
        const res = await fetch(
            `https://api.glitterfinance.org/api/fee/${token}`
        );

        const data = await res.json();

        return { token, ...data };
    });
};

export const useReleasedAmountOf = (token) => {
    return useQuery(`release-${token}`, async () => {
        const res = await fetch(
            `https://api.glitterfinance.org/api/release/${token}`
        );
        const data = await res.json();
        return { token, ...data };
    });
};
