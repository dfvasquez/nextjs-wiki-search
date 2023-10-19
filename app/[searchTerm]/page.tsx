import getResults from '@/lib/getResults'
import Item from './components/Item'

type Props = {
  params: { searchTerm: string }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const resultsData: Promise<SearchResult> = getResults(searchTerm)
  const data = await resultsData
  const displayTerm = searchTerm.replaceAll('%20', ' ') // To replace spaces

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`
    }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`
  }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const resultsData: Promise<SearchResult> = getResults(searchTerm)
  const data = await resultsData
  const results: Result[] | undefined = data?.query?.pages
  const displayTerm = searchTerm.replaceAll('%20', ' ') // To replace spaces

  const content = (
    <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />
        })
      ) : (
        <h2 className='p-2 text-xl'>{`${displayTerm} Not Found`}</h2>
      )}
    </main>
  )

  return content
}
