NewNoteSinglePageAppDiagram
    participant user
    participant browser
    participant server

    user->>browser: Writes something in text field and clicks save.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>browser: status code 201. JSON data: {"message":"note created"}
    deactivate server 