import useSWR from 'swr'

const useSearchPlanets = (props: { q: string }) => {
  const { q } = props

  const fetcher = (props: any) => fetch(props).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/planets/?search=${q}&page=1`,
    fetcher
  )

  return {
    planets: data?.results,
    isLoading,
    isError: error,
  }
}

export default useSearchPlanets
