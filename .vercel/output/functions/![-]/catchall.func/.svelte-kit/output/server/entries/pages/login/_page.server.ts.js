import { fail, redirect } from "@sveltejs/kit";
const load = async ({ cookies }) => {
  const username = cookies.get("username");
  return {
    username
  };
};
const actions = {
  login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const username = data.get("username")?.toString().trim();
    if (username === void 0 || username === null || username === "") {
      return fail(400, { username, missing: true });
    }
    cookies.set("username", username, { path: "/" });
    if (url.searchParams.has("redirectTo")) {
      const redirectTo = url.searchParams.get("redirectTo")?.toString();
      if (redirectTo === void 0 || redirectTo === null)
        return;
      redirect(303, redirectTo);
    }
    return { success: true };
  }
};
export {
  actions,
  load
};
