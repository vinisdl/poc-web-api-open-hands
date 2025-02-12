import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "WS API",
    version: "1.0.0",
    description: "API for Next.js based WebSocket client."
  },
  paths: {
    "/api/ws": {
      get: {
        summary: "Get current connection status and events",
        responses: {
          "200": {
            description: "Success"
          }
        }
      },
      post: {
        summary: "Perform an action (connect, disconnect, send) on the WebSocket client",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  action: { type: "string" },
                  message: { type: "object" },
                  conversationId: { type: "string" }
                },
                required: ["action"]
              }
            }
          }
        },
        responses: {
          "200": { description: "Action performed successfully" },
          "400": { description: "Bad request" }
        }
      }
    }
  }
};

export default function SwaggerPage() {
  return <SwaggerUI spec={swaggerDocument} />;
}
