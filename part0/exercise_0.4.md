NewNoteDiagram
    participant user
    participant browser
    participant server

    user->>browser: Writes something in text field and clicks save.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>browser: status code 302. [//]: # Redirect.
    deactivate server

   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document.
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: css file.
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file.
    deactivate server 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON data. [{"content":"w","date":"2024-03-11T09:36:33.056Z"},{"content":"gfashkdf","date":"2024-03-11T09:37:54.406Z"},{...}]
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server->>browser: status code 404. [//]: # Not found.
    deactivate server