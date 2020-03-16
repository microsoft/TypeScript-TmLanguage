const { loading, error, data } = useQuery<{
  tasks: Array<Pick<Task, 'id' | 'title'>>
}>(taskListQuery)

if (loading) return true
if (error)
  return false