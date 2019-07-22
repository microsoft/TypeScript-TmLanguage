let new_string = "New Changes"


let plain_double_text = "Hello\
this link to github is https://github.com/\
hello\
World"

let plain_single_text= 'Try with single bracket\
hello world \\\\\
let this be   ^\
a good test   ^'

let double_quote_issue = "  qstring-double:\
    name: string.double.ts\
    begin: \'\"\'\
    end: \'\"|(?:[^\r\n\\]$)'\
    patterns:\
    - include: '#string-character-escape'\
    "

let single_quote_issue = 'qstring-single:\
    name: string.single.ts\
    begin: \"\'\"\
    end: \'|(?:[^\r\n\\]$)\
    endCaptures:\
      '0': {name: string-character-escape }\
    patterns:\
    - include: \'#string-character-escape\'\
    '

let new_string = "Changes End here"


