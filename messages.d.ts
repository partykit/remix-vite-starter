// This is a shared file between the server and the client,
// showing the types of messages being passed between them.

// Keeping this simple, we send only one type of message
// (a total count of all connections and a count of connections from each country)

export type State = {
  total: number;
  from: Record<string, number>;
};
