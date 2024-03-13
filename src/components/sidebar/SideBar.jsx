import React from 'react';
import { useGetMarketsQuery } from "../../features/api/coinApiSlice";
import { Container, Wrapper, Title, Coins } from "./SideBar.styles";
import CoinCard from "../coinCard/CoinCard";
import SyncLoader from "react-spinners/SyncLoader";

const SideBar = () => {
    //Fetching Data
    const { data, isFetching } = useGetMarketsQuery();
    // if ( isFetching ) return "Loading....";
    return (

        <Container>
            <Wrapper>
                <Title>Top Trending Crypto Currencies by Coin Market </Title>
                <SyncLoader color="rgb(0, 51, 102)" size={10} loading={isFetching} />
                <Coins>
                    {data && data.map((coin) => <CoinCard key={coin.id} coin={coin} />)}
                </Coins>
            </Wrapper>
        </Container>
    );
};
export default SideBar;