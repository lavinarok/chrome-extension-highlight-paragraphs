import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 4173;

const currentDirectory =
  dirname(fileURLToPath(import.meta.url));

const formPath =
  join(currentDirectory, "..", "demo", "form.html");

const server = createServer(async (request, response) => {
  if (
    request.url !== "/" &&
    request.url !== "/form.html"
  ) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  try {
    const html = await readFile(formPath);

    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    response.end(html);
  } catch (error) {
    console.error(error);

    response.writeHead(500);
    response.end("Erro ao carregar a página.");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(
    `Página de teste disponível em http://127.0.0.1:${PORT}`
  );
});
