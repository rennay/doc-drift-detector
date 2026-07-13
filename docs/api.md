# API Reference

## Greeting Module

### `greet(name: string, options?: GreetingOptions): string`

Generate a personalised greeting message.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `string` | Yes | The person's name |
| `options` | `GreetingOptions` | No | Greeting configuration |

**GreetingOptions:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `formal` | `boolean` | `false` | Use formal tone |

**Returns:** `string` — A greeting message.

**Examples:**

```ts
greet("Rennay");                  // "Hello, Rennay!"
greet("Rennay", { formal: true }); // "Good day, Rennay."
```

### `farewell(name: string): string`

Generate a farewell message.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `string` | Yes | The person's name |

**Returns:** `string` — A farewell message.

**Example:**

```ts
farewell("Rennay"); // "Goodbye, Rennay. See you next time!"
```
