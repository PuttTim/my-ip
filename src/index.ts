export default {
	fetch(request, env, ctx): Response {
		return new Response(
			`${request.cf?.city} - ${request.cf?.country} ${
				request.headers.get('x-real-ip') ?? request.headers.get('cf-connecting-ip') ?? 'unknown'
			}`
		);
	},
} satisfies ExportedHandler<Env>;
