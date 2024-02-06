import useSearchPlanets from './useSearchPlanets'

const SearchResultsList = (props: { q: string }) => {
  const { q } = props
  const { planets, isError, isLoading } = useSearchPlanets({ q })

  return isLoading || !planets ? (
    <>Loading...</> // Should be some kind of <Skeleton />
  ) : (
    <div className="grid grid-cols-1 gap-4">
      {planets.length > 0 ? (
        planets.map((planet: any) => {
          return (
            <div key={planet?.name}>
              <a href={planet?.url}>
                <strong>{planet?.name}</strong>
              </a>
            </div>
          )
        })
      ) : (
        <>No results for {q}</>
      )}
    </div>
  )
}

export default SearchResultsList
