import httpRequest from "@/utils/axios/Interceptor";

export function loginAction() {
	return httpRequest({
		method: "GET",
	})
}

export function getGraphic() {
	return httpRequest({
		url: "/auth/code",
		method: "GET",
	})
}