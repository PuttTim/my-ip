export default {
	fetch(request, env, ctx): Response {
		console.log(request.cf);

		return new Response(
			`${request.cf?.city} - ${request.cf?.country} - ${
				request.headers.get('x-real-ip') ?? request.headers.get('cf-connecting-ip') ?? 'unknown'
			} - ${request.cf?.asOrganization}`
		);
	},
} satisfies ExportedHandler<Env>;
