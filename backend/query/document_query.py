from config.db_connect import get_connection
from config.imports import mariadb

##########################################################
#                         SELECT                         #
##########################################################

# Getting all the required documents for a subcategory
def get_documents(subcategory_id):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT doc.* FROM Document doc INNER JOIN (SELECT document_id FROM Document_Subcategory WHERE subcategory_id = ?) AS dsc ON dsc.document_id = doc.document_id"
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
        json_data = 0
        
    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data

    #Getting the details for a document
def get_entries(document_id):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT entry_index, entry_title, entry_text, entry_image FROM Entry WHERE document_id = ?"
        values = (document_id,)
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