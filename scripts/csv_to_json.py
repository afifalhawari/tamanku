import csv
import json

with open('taman_kota.csv') as taman_kota_file:
    taman_rows = csv.reader(taman_kota_file, delimiter=',')

    header_row = taman_rows.next()

    results = []
    for taman_row in taman_rows:
        taman_dict = {}

        i = 0
        for header in header_row:
            taman_dict[header.lower()] = taman_row[i]
            i += 1

        results.append(taman_dict)

    output_file = open('output.json', 'w')
    output_file.write(json.dumps(results))
    output_file.close()
