import db from "../../firebase/config";

export const authSignUpUser = ({login, email, password}) => async (dispatch, getState) => {
  try {
    const user = await db.auth().createUserWithEmailAndPassword(email, password);
    console.log("user", user);
  } catch (err) {
    console.log("error", err);
    console.log("error message", err.message);
  }
};
export const authSignInUser = () => async (dispatch, getState) => {};
export const authSignOutUser = () => async (dispatch, getState) => {};
