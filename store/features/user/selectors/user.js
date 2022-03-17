export const userInfoSelector = state => state.user.authInformation?.user;
export const photoUrlSelector = state => state.user.authInformation?.user?.photoUrl;
export const displayNameSelector = state => state.user.authInformation?.user?.displayName;
