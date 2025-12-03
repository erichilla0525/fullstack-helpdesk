# Architecture layout:

## mockedTicketFormData.ts
    What does it do?
    Store static json file data for ui rendering

    How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?
    I could choose to put all mocked data in the repo layer as well, but I chose to isolate this layer from the repo to better understand the new architecute itself.

    Where is this implementation made use of in the project and how?
    Used by the repo layer for fetching the mockedata

## ticketFormRepo.ts
    What does it do?
    Retrieve the data from the mocked data file.

    How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?
    The repository only handles data access(fetch and create)

    Where is this implementation made use of in the project and how?
    Called by the service layer to fetch or create the data.

## ticketFormService.ts
    What does it do?
    Process and validate the data from repo layer, apply the the rule for the ticket form

    How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?
    The service layer contains the business logic to fetch/create ticket, and validate the data before store it into the react storage.

    Where is this implementation made use of in the project and how?
    Called by the useTicket hook layer to provide the processed and validated data for ui components.

## ticketFormHook.ts
    What does it do?
    Use react-state to management the prcoessed and validated data from the service layer for ui layout

    How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?
    It handles the presentation logic(useState, useEffect)

    Where is this implementation made use of in the project and how?
    Used in both ticket.tsx and submitTicketForm.tsx ui components to render the updated ticket information.

## hoverHook.ts
    What does it do?
    It works as a public hook for basic ui presentation.

    How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?
    I only included simple UI interaction logic to handle the hover status

    Where is this implementation made use of in the project and how?
    Called in the submitTicketForm componentg