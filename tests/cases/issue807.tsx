// @onlyOwnGrammar - As this has jsx 
const { loading, error, data } = useQuery<{
  tasks: Array<Pick<Task, 'id' | 'title'>>
}>(taskListQuery)

if (loading) return <p>Loading...</p>
if (error)
  return (
    <>
      <p>Error :(</p>
      <p>{`${error}`}</p>
    </>
  )