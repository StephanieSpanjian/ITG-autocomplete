import useSearchPlanets from './useSearchPlanets'

const SearchResultsList = (props: { q: string }) => {
  const { q } = props
  const { planets, isError, isLoading } = useSearchPlanets({ q })

  console.log(planets)
  console.log(isError)
  console.log(isLoading)
  // return <h1>{planets.name}</h1>

  // {
  //   /* <div className="fixed top-0 left-0 right-0">Contacts</div> */
  // }
  // {
  //   /* <div className="grid grid-cols-2 gap-4 place-content-center h-48 ...">
  //   <div>01</div>
  //   <div>02</div>
  //   <div>03</div>
  //   <div>04</div>
  // </div> */
  // }

  return isLoading || !planets ? (
    <>Loading...</> // <Skeleton />
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
