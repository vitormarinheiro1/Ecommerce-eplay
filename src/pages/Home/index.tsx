import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";
import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api";

const Home = () => {
    const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
    const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

    return (
        <>
            <Banner />
            <ProductsList
                games={onSaleGames}
                title="Promoções"
                background="gray"
                id="on-sale"
                isLoading={isLoadingSale}
            />
            <ProductsList
                games={soonGames}
                title="Promoções"
                background="gray"
                id="on-sale"
                isLoading={isLoadingSoon}
            />
        </>
    )
}

export default Home;
