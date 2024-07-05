import ProductsList from "../../components/ProductsList"
import {
    useGetActionGamesQuery,
    useGetRpgGamesQuery,
    useGetSimulationGamesQuery,
    useGetSportGamesQuery,
    useGetFigthGamesQuery
} from "../../services/api"

const Categories = () => {
    const { data: actionGames, isLoading: isLoadingAction } = useGetActionGamesQuery()
    const { data: sportGames, isLoading: isLoadingSports } = useGetSportGamesQuery()
    const { data: simulationGames, isLoading: isLoadingSimulation } = useGetSimulationGamesQuery()
    const { data: figthGames, isLoading: isLoadingFigth } = useGetFigthGamesQuery()
    const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

    return (
        <>
            <ProductsList
                games={actionGames}
                title="Ação"
                background="black"
                id="action"
                isLoading={isLoadingAction}
            />
            <ProductsList
                games={sportGames}
                title="Esportes"
                background="gray"
                id="sports"
                isLoading={isLoadingSports}
            />
            <ProductsList
                games={figthGames}
                title="Luta"
                background="black"
                id="figth"
                isLoading={isLoadingFigth}
            />
            <ProductsList
                games={rpgGames}
                title="RPG"
                background="gray"
                id="rpg"
                isLoading={isLoadingRPG}
            />
            <ProductsList
                games={simulationGames}
                title="Simulação"
                background="black"
                id="simulation"
                isLoading={isLoadingSimulation}
            />
        </>
    )
}

export default Categories;
