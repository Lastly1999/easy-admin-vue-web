import httpRequest from "@/utils/axios/Interceptor";

export function loginAction() {
	return httpRequest({
		method: "GET",
	})
}