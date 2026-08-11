1.) **What is backend?**
Ans. Basically, the backend is the hidden part of a website, app, or computer system. It handles the server-side logic, database, and core functionality of any web applications. It ensures smooth communication between the server and client using languages and frameworks like Node.js, Django, and Spring boot.
    **Core Functionality of Backend includes**
(Backend exists garnu ko karan aauta specific reasons xa, As we know sabai kura haru chai browser aafaile garna sakdaina so, tyo nasakne kaam haru garna ko lagi chai backend banako ho)
 i. **Data storage and retrieval**: talking to a database to save, fetch, update, or delete data. Example - Hamile kehi kura haru instagram or facebook ma post garyau, tyo post garne bittikai backend le database ma gayera lekhdinxa so, tyo voli pani browser ko memory ma matra haina sabai ko devices ma hos.

 ii. **business logic**: The actual rule of the application. Example - yedi hamile aauta ride-sharing app build garai rako xau or aauta prime example of ride-sharing app (pathao, indrive) haru already xa. Aba aba yo aap haru ma distance ko based ma price haru show garxa or hami haru aafaile ni set garnu milxa certain amount haru tala mathi garnu milxa.

 iii. **Authentication & authorization**: Verifies who a user is during login and Checks what specific pages or actions a logged-in user can access. Example - Movie Sreaming app, Hamile aauta movie app kholyau(netflix) authenticator le chai hamle login garna use gareko email ra password database ma gayera check garxa ani yedi login garna use gareko email and pass right xa vane app vitra login hunxau right xaina vane invalid credentials vanera popup aaunxa. Authorization ma chai hamile aauta kunai video kholera herna khoyau teti bela tyo app ko system le hamro account type herxa yedi basic plan xa vane standard quality ma movie haru herna dinxa 4k ma didaina. Ani aarko admin settings ko access didaina kine vane hami user vako vayera.

 iv. **API endpoints**: It is a specific URL where an API receives requests and sends responses to allow communication between software applications. endpoint consists of a Base URL(https://www.google.com)combined with a Path(/path/to/my/blog) tespaxi URL path chai tespaxi yo chai HTTP Method sanga combine garinxa(GET, POST, PUT/PATCH, DELETE) Yo URL chai frondent le use garxa data pathau or ligna, jasle garda frontend le directly database touch garna paunna.

 v. **Integration with external services**: It allows software systems to safely share data and run actions using web tools like APIs, webhooks, and standard data formats. Yesle chai internal apps haru lai payment gateways , CRM tools, Cloud storage and AI agents haru sanga connect garna help garxa.

 **The analogy that helps me**: backend vaneko chai aauta restaurant kitchen jastai ho jun ma Customers(frontend) jo le chai kitchen ma gayera aafno lagi khana aafai pakaudaina, Customers le just aafulai khana maan lageko kura chai Counter ma gayera order dinxa (API Calls) ani tyo order deko khana chai kitchen le decide garxa kasari pakaune tyo stock (database) ma rakheko ingredients ani recipes (business logic) use garera jun chai customers le dekhdaina.
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

**The analogy That Helps me**: Server vaneko chai aauta kitchen ma vako khali thau/kitchen's physical space, application code vaneko chai chef, ani API vaneko chai hamro waiter, ani store room chai hamro Database