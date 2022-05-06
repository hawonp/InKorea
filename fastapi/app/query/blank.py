def method():
    json_data = []
    try:
        print()
       
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = 0
        values = 0

        # Set up query statements and values
        
        print("Selecting with query", query, values)
        cursor.execute(query, values)

        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        json_data = 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data