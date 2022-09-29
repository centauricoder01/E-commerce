// reducer related to auth state;

export default function reducer(state, action) {
  switch (action.type) {
    case "AUTH_STATE":
      console.log("AUTH_STATE");
      return { ...state, auth_state: true };

    case "LOADING":
      console.log("LOADING");
      return { ...state, loading: false };

    case "ERROR":
      console.log("ERROR");
      return { ...state, error: true };

    case "TOKEN":
      console.log("TOKEN");
      return {
        loading: false,
        error: false,
        auth_state: true,
        token: action.payload.token,
      };

    default:
      return state;
  }
}