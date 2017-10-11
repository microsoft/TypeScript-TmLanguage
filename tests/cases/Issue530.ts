function getStats() {
    const query = query<[number], number>(`
        SELECT *
        FROM statistics
        WHERE unit_id = $1`)

    return database.execute(query, [id])
}