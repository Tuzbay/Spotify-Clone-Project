export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCSSMB0ppHewsfcs55N0OrGcTzAGDFd6lvrDwMuzkgxtik34c…bcUxZrNBlZPN5M6ghroseRkQwuwK1B-Wgvh90Dv6q50rph-vR",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
