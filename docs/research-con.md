6.)**What is a REST API?**

Ans.REST stands for representational state transfer. Yelai chai hamle set of Guidelines or Set of rules haru vanera pani bujhna sakinxa. It Describes how wbe clients and servers should communicate with each other over the internet.

REST defines a way for different systems to interact by using standard web technologies. With REST, clients such as web browsers, mobile apps, and APIs communicate with a server using common HTTP methods like GET, POST, PUT, PATCH, and DELETE, which we discussed in a previous lesson.

**Resources**

In REST, everything is treated as a resource. A resource is a piece of data that can be accessed or modified. Each resource is identified by a URL, such as /products for all products, or /products/1 for a specific product.


**statelessness**:

Statelessness means that each request a client sends to the server is handled independently. The server does not remember previous requests. Because of this, every request must include all the information needed to process it. For example, if a user is authenticated, their authentication token must be sent with each request

**why URLs are nouns and not verbs.**

URLs are designed as nouns because they act as identifiers for resources (things) rather than the actions performed on them. . The HTTP Methods already provides explicit verbs like GET, POST, PUT, and DELETE to handle the actions. Separating the "thing" (the URL noun) from the "action" (the HTTP verb) creates a clean, predictable, and standardized system.

**Why is GET /users/5 better than GET /getUser?id=5?**

The URL GET /users/5 follows REST rules by using nouns to name a resource and path parameters for identification.
GET /getUser?id=5 uses a verb based Remote Procedure Call (RPC) style with query parameters, making it less standard, harder to scale, and less clear.


