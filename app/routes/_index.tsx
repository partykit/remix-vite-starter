import type { MetaFunction } from "partymix";
import WhosHere from "~/components/whos-here";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>
        Welcome to 💿 Remix (SPA Mode) <br /> running on 🎈 PartyKit <br />{" "}
        built on ⚡️ Vite
      </h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
          >
            SPA Mode Guide
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <WhosHere />
    </div>
  );
}
