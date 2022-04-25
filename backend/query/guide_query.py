from config.db_connect import get_connection
from config.imports import mariadb

##########################################################
#                         SELECT                         #
##########################################################

# Getting all the categories
def get_categories():
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT * FROM Category"
        print("Selecting with query", query)
        cursor.execute(query)

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

# Getting all the subcategories for one category
def get_subcategories(category_name):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT subcategory_id, subcategory_name FROM Subcategory INNER JOIN (SELECT * FROM Category WHERE category_name = ?) AS cat ON cat.category_id = Subcategory.category_id"
        values = (category_name,)
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
        json_data = 0
    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data

# Getting subcategory id with name
def get_subcategory_id(subcategory_name):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT subcategory_id FROM Subcategory WHERE subcategory_name = ?"
        values = (subcategory_name,)
        print("Selecting with query", query)
        cursor.execute(query, values)

        #Fetching one row since we know its only one
        rv = cursor.fetchone()

    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        return 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return rv[0]