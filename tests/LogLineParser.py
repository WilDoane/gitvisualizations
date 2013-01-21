# global variables (for now)
def parse_log_lines(logfile):
    datetime_indicator = ' '
    blank_line_indicator = '\n'
    loglet = {"header": '',
              "content": []}
    output = []
    with open(logfile) as f:
        currentLine = f.readline()
        while f.readline():
            if currentLine.startswith(blank_line_indicator):
                output.append(loglet)
                loglet['header'] = ''
                loglet['content'] = []
            elif currentLine.startswith(datetime_indicator):
                loglet['header'] = currentLine
            else:
                loglet['content'].append(currentLine)
            currentLine = f.readline()
        output.append(loglet)
    return output




