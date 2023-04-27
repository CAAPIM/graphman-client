# Graphman client

>**NOTE:**
The Graphman client is offered as an unsupported, but useful, example of how the fully supported Graphman API (when advanced from preview to limited or general availability) can be accessed via CLI scripting for greater utility. As such, it has been moved to the [Layer7 Community repo](https://github.com/Layer7-Community/Utilities/tree/main/graphman-client).

---

Graphman is an API running on a Layer7 Gateway for interacting with the gateway configuration. This API
lets you retrieve full or partial gateway configuration from a Layer7 Gateway with Graphman running on it,
bundle configuration for the purposes of applying configuration as code and apply configuration to a
gateway.

Graphman is a GraphQL API but you don't need prior experience with, or an understanding of GraphQL to use it
with this client. This client abstracts out the GraphQL API layer by providing commands to perform common
Graphman operations. Power users can dive into the GraphQL layer to create their own queries that can then be
used with this client. Custom GraphQL queries let you control the specific configuration that needs to be
bundled for your domain-specific use case. To help dive into that layer, power users should refer to the 
provided Postman collection which provides samples for all the queries and mutations supported by Graphman.