1.) **What is backend?**

Ans. Basically, the backend is the hidden part of a website, app, or computer system. It handles the server-side logic, database, and core functionality of any web applications. It ensures smooth communication between the server and client using languages and frameworks like Node.js, Django, and Spring boot.

   **Core Functionality of Backend includes**
(Backend exists garnu ko karan aauta specific reasons xa, As we know sabai kura haru chai browser aafaile garna sakdaina so, tyo nasakne kaam haru garna ko lagi chai backend banako ho)

 i. **Data storage and retrieval**: talking to a database to save, fetch, update, or delete data. Example - Hamile kehi kura haru instagram or facebook ma post garyau, tyo post garne bittikai backend le database ma gayera lekhdinxa so, tyo voli pani browser ko memory ma matra haina sabai ko devices ma hos.

 ii. **business logic**: The actual rule of the application. Example - yedi hamile aauta ride-sharing app build garai rako xau or aauta prime example of ride-sharing app (pathao, indrive) haru already xa. Aba yo app haru ma distance ko based ma price haru show garxa or hami haru aafaile ni set garnu milxa certain amount haru tala mathi garnu milxa.

 iii. **Authentication & authorization**: Verifies who a user is during login and Checks what specific pages or actions a logged-in user can access. Example - Movie Sreaming app, Hamile aauta movie app kholyau(netflix) authenticator le chai hamle login garna use gareko email ra password database ma gayera check garxa ani yedi login garna use gareko email and pass right xa vane app vitra login hunxau right xaina vane invalid credentials vanera popup aaunxa. Authorization ma chai hamile aauta kunai video kholera herna khoyau teti bela tyo app ko system le hamro account type herxa yedi basic plan xa vane standard quality ma movie haru herna dinxa 4k ma didaina. Ani aarko admin settings ko access didaina kine vane hami user vako vayera.

 iv. **API endpoints**: It is a specific URL where an API receives requests and sends responses to allow communication between software applications. endpoint consists of a Base URL(https://www.google.com)combined with a Path(/path/to/my/blog) tespaxi URL path chai tespaxi yo chai HTTP Method sanga combine garinxa(GET, POST, PUT/PATCH, DELETE) Yo URL chai frondent le use garxa data pathau or ligna, jasle garda frontend le directly database touch garna paunna.

 v. **Integration with external services**: It allows software systems to safely share data and run actions using web tools like APIs, webhooks, and standard data formats. Yesle chai internal apps haru lai payment gateways , CRM tools, Cloud storage and AI agents haru sanga connect garna help garxa.

 **The analogy that helped me**: backend vaneko chai aauta restaurant kitchen jastai ho jun ma Customers(frontend) jo le chai kitchen ma gayera aafno lagi khana aafai pakaudaina, Customers le just aafulai khana maan lageko kura chai Counter ma gayera order dinxa (API Calls) ani tyo order deko khana chai kitchen le decide garxa kasari pakaune tyo stock (database) ma rakheko ingredients ani recipes (business logic) use garera jun chai customers le dekhdaina.


  **What runs on the client vs. the server?**
  Ans. The client runs on the user's local devices (like a web browser or phone app), handling what you and touch. The server runs on a remote computer in a data center, handling heavy data, security, and storage. Together they form a request-response cycle.


   ##Client side vitra k k run hunxa ta (user interface: buttons, menus, text, and images
   Interactions: Animations, clicks, and page changes without reloading
   Local Data: Temporary data stored in the browser like cookies or local storage
   Languages: HTML, CSS, and Javascript)

   ##Server side tira k k run hunxa ta (Business Logic: Processing rules and user requests
   Database Access: saving and retrieving user accounts, posts, or products
   Security: Verifying passwords, permissions, and payment details
   Languages: Node.js, PHP and Java)


   **Why can't everything just live in the browser?**
   Ans. Sabai kura haru browser ma live huna sakdaina kina vane Tya chai Hardware and Performance Limits, Security and privacy walls, and The need for Offline Independence


   **Give one concrete example of something that must be on the backend and explain why.**
   Ans.User ko Password chai backend ma hunu parxa kina vane tyo forntend ma rakhyo vane hashed gareko password ani cryptographic secrets haru sabai ma expose hunxa jasle garda jole ni browser ko dev tools access garna sakxa, source code herna sakxa, ani user ko credentials steal garna sakxa ani security break garna sakxa without ever knowing the real password.



2.) **What is a backend composed of?**
Ans. A backend is composed of a server/runtime, an application running server-side logic, Database for data storage, and a API layer that connects everything to the user-facing frontend. It acts as the hidden engine processing rules, user accounts, and data behind the scenes.
 
 i. **Server/runtime**: yo chai aauta environment ho junle code haru executes garxa ani incoming requests haru sunxa

 ii. **Application Code**: yesma chai actual logic implement hunxa such as route handlers, validations, business rules. It decides what to do with an incoming request.

 iii. **API layer**: yele chai aauta bridge ko kaam garxa frontend and backend so that they can talk to each other and exchange data's.

 iv. **Database**: Yo chai aauta structured system ho like(SQL or NoSQl) that saves, update, and retrieves permanent information.

 

 [ Client Request ]
       │
       ▼
 ┌───────────┐
 │ API Layer │ ◄── (Validates and routes the request)
 └─────┬─────┘
       │
       ▼
 ┌───────────────────┐
 │ Application Code  │ ◄── (Applies business rules and logic)
 └─────┬───────────┬─┘
       │           │
       │ (Runs on) │ (Reads/Writes)
       ▼           ▼
 ┌───────────┐   ┌──────────┐
 │  Server / │   │ Database │ ◄── (Stores data safely)
 │  Runtime  │   └──────────┘
 └───────────┘



**The analogy That Helped me**: Server vaneko chai aauta kitchen ma vako khali thau/kitchen's physical space, application code vaneko chai chef, ani API vaneko chai hamro waiter, ani store room chai hamro Database



3.) **what is An API?**
An API(Application Programming Interface) is a digital messanger that allows two different software applications to talk to each other.
 ##To Someone non-technical
  API vaneko chai aauta kunai pani resturant ko waiter, ani hami vaneko chai client, and Kitchen vaneko chai server, aba hami aauta resurant ma gaisake paxi menu herera food ko lagi order dinxau waiter lai ani waiter le tyo food ko order chai kitchen vitra dinxa ani hamro kitchen bata food prepare vayera waiter through aaunxa jun chai hamilai kitchen vitra kasari banyo kehini tha hudaina. waiter ko kaam chai k vayo client le gareko menu through bata request kitchen vitra deliver garne ani hami request gareko food hami client sanga lera aaidine. In simple API vaneko ni yehi ho.
 ##To a developer
 An API acts as a communication layer between a client and server, handling requests and returning responses to enable data exchange between applications.

i.Client --> API (Request): The client application sends a request to the API containing required data, parameters, headers, and authentication details.

ii. API --> Server (Request Forwarding):The API receives the request, validates the input, applies business logic, and forwards the request to the appropriate server or database.

iii. Server --> API (Response): The server processes the request, retrieves or updates data, and sends the result back to the API.

iv. API --> Client (Response): The API formats the response (commonly in JSON or XML format) and sends it back to the client application.

Example: A mobile banking app requests account details through an API. The API verifies the request, fetches data from the banking server, and returns the account information to the app.



4.) **What is JSON?**

Ans.JSON (JavaScript Object Notation) is a widely-used, lightweight data format for representing structured data.

i. Used Extensively : Used in APIs, configuration files, and data exchange between servers and clients.

ii. Text-based: JSON is a simple text format, making it lightweight and easy to transmit.

iii. Human-readable: It uses key-value pairs, making the structure easy to understand.

iv. Language-independent: While it is derived from JavaScript, JSON is supported by many programming languages including Python, Java, PHP, and more.

v. Supported Data structures: Represents data as objects, arrays, strings, numbers, booleans, and null.

Basically JSON chai Data exchange garna ko lagi commonly use hune language, jun chai API le use garxa server sanga communicate garna ko lagi.


 **What is it, why did it win over XML, and what are its data types? Write out a small JSON object.**
 Ans. JSON win over XML(Extensible Markup Language) because JSON chai ekdamai lightweight language ani Verbose haru ni kaam hunxa but XML le ja garna ni Opening ra Closing tag use garxa just like html jasko karan le XMl ekdamai heavy hunxa size ma (Eg: <name>Bipul</name>). JSON le chai JSON data haru directly maps garxa data structure vitra jun chai aauta programming language vitra built in hunxa(like maps, dictionaries, and lists), Ani XML le chai data haru lai tree structure ma represent garxa jasle garda developer haru le complex translation code lekhnu parxa memory vitra map garnu ko lagi. JSON ma chai Parsing garna sajilo kine vaneko yo chai natively parsed garna milxa aauta ready to use coding object vitra with a single, highly optimized line of code(such as JSON.parse() in javascript). JSON le chai native array support garxa tara XML le native array support gardaina.


 ##Data types: String, number, boolean, null, object ({}), and array ([]).



##Small JSON object
 {
  "name": "bipul",
  "age": 22,
  "skills": ["JavaScript", "Python", "SQL"],
  "address": {
    "city": "kathmandu",
    "zip_code": "44600"
  },
  "mid_name": null
}



**The analogy that helped me**: XML vaneko chai aauta Wooden Create jastai vayo ani JSON vaneko chai Ziploc Bag.



5.) **HTTP methods and conventions Cover GET, POST, PUT, PATCH, DELETE — what each is for, not just what it does. Then cover status codes: what do the 2xx, 4xx and 5xx families mean, and what specifically are 200, 201, 204, 400, 404 and 500? Also explain what "idempotent" means and which methods are.**


Ans. ##HTTP Methods:HTTP methods (or verbs) tell a web server what action to perform on a resource. The core methods map to CRUD operations



i. GET(Read) — retrieve data, no side effects. GET /products fetches a list; nothing should change on the server just because you looked.

ii. POST(Create) — create something new, or trigger an action that isn't naturally idempotent. POST /orders creates a new order each time you call it — call it twice, you get two orders.

iii. PUT(Replace) — replace a resource entirely. PUT /users/5 with a full user object overwrites everything at that ID, including fields you didn't mention (they'd get wiped or reset).

iv. PATCH(update) — partially update a resource. PATCH /users/5 with {"email": "eg@gmail.com"} changes just that field, leaving the rest untouched.

v. DELETE — remove a resource. DELETE /orders/12 deletes that order.


   ##Status Codes
i. 2xx = success. 200 OK — request succeeded, here's your data. 201 Created — a new resource was made (returned after a successful POST). 204 No Content — succeeded, but nothing to return (common after DELETE).

ii. 4xx = client's fault — bad request. 400 Bad Request — malformed input. 404 Not Found — resource doesn't exist.

iii. 5xx = server's fault. 500 Internal Server Error — something broke on the backend, not because of what the client sent.


##Idempotent

An operation is idempotent if calling it once or ten times leaves the system in the same state. GET, PUT, and DELETE are idempotent (deleting an already deleted thing still results in "it's gone"). POST is not, it create duplicates.