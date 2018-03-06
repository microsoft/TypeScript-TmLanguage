function runQuery() {
    const query = createQuery<[number[]], Table<Columns>>(`
        some SQL here
    `)
    return database.execute(query)
}