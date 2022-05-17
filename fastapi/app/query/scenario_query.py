from app.util.db_connect import get_connection
import mariadb

def query_scenario_root_id(subcategory_id):
    json_data = []
    try:
        print()
       
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT P.phrase_id from Phrase P WHERE P.phrase_id = (SELECT PS.phrase_id FROM Phrase_Start PS WHERE PS.subcategory_id = ?)"
        values = (subcategory_id,)

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
    return json_data if len(json_data) > 0 else 0
    
def query_current_children(phrase_id):
    json_data = []
    try:
        print()
       
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT P.phrase_id FROM Phrase P WHERE P.phrase_id IN (SELECT PL.to_id FROM Phrase_Link PL WHERE PL.from_id = ?)"
        values = (phrase_id,)

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


def query_phrase_by_id(id):
    json_data = []
    try:
        print()
       
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT P.* FROM Phrase P WHERE P.phrase_id = ?"
        values = (id, )

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
    return json_data if len(json_data) > 0 else 0