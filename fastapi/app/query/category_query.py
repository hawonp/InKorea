from app.util.db_connect import get_connection
import mariadb

def query_all_categories():
    try:
        print("Retreiving all categories")
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

def query_all_subcategories_by_cat_id(catagory_id):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT * FROM Subcategory S WHERE S.category_id = ?"
        values = (catagory_id,)
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