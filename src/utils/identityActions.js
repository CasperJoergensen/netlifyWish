import netlifyIdentity from "netlify-identity-widget";

export function loginUser() {
    console.log(netlifyIdentity.currentUser())
    if (netlifyIdentity && netlifyIdentity.currentUser()) {
        const {
            app_metadata, created_at, confirmed_at, email, id, user_metadata
        } = netlifyIdentity.currentUser();

        localStorage.setItem(
            "currentOpenSaucedUser",
            JSON.stringify({...app_metadata, ...user_metadata})
        );
    }
}

export function logoutUser() {
    localStorage.removeItem("currentOpenSaucedUser");
}