from config.db_connect import get_connection
from config.imports import mariadb

##########################################################
#                         SELECT                         #
##########################################################

# Getting all the required documents for a subcategory :TODO: yes
def get_question(subcategory_id):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT "
        values = (subcategory_id,)
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