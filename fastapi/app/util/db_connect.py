import mariadb, sys

def get_connection():
    try:
        conn = mariadb.connect(
            user="mod",
            password="inkorea",
            host="localhost",
            port=3306,
            database="inkorea_db"
        )
        return conn
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)

def ping_db():
    json_data = []
    try:
        print("Attemp to ping db")
        conn = get_connection()
        cursor = conn.cursor()

        query = "Show tables"

        cursor.execute(query)

        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data = []

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        json_data = 0
    cursor.close()
    conn.commit()
    conn.close()
    return json_data