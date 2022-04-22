from config.db_connect import get_connection
from config.imports import mariadb

##########################################################
#                         INSERT                         #
##########################################################

##########################################################
#                         SELECT                         #
##########################################################

# Getting all the list of apps
def get_all_apps(page, filter):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        limit = 10
        offset = (page - 1) * 10  # if page 1, then it should start from 1.

        # Set up query statements and values
        query = "SELECT * FROM App DESC LIMIT ?, ?"
        print("Selecting with query", query)
        cursor.execute(query, values)

        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data = []

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        return 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data