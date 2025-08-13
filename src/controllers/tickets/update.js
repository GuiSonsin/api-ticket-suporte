export function update({ request, response, database }) {
  const { id } = request.params.id;
  const { equipment, description } = request.body;

  return response.end();
}
