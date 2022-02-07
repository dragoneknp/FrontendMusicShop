import { RootState } from "./store";

export const getCardDetails = (state: RootState) => state.cardDetails;

export const getCards = (state: RootState) => state.card;

export const getLogin = (state: RootState) => state.login;

export const getRegister = (state: RootState) => state.register;

export const getAlbumCardDetails = (state: RootState) => state.albumCardDetails;

export const getAlbumCards = (state: RootState) => state.albumCard;

export const getBids = (state: RootState) => state.myBids;

export const getNFTs = (state: RootState) => state.myNFTs;
